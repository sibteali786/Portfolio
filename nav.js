(function () {
  var themeToggle = document.querySelector('.theme-toggle');
  if (!themeToggle) return;

  function currentTheme() {
    var stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
  }

  applyTheme(currentTheme());

  var reduceMotionForSwap = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  themeToggle.addEventListener('click', function () {
    var next = currentTheme() === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    /* blur-mask the palette swap so every color on the page doesn't hard-cut
       at once — see body.theme-swapping in index.css. Skipped under reduced
       motion since it's a movement-adjacent visual effect, not just color. */
    if (!reduceMotionForSwap) {
      document.body.classList.add('theme-swapping');
      setTimeout(function () {
        document.body.classList.remove('theme-swapping');
      }, 260);
    }
    applyTheme(next);
  });
})();

(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu   = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  /* JS drives the animated open state via a class instead of [hidden],
     so max-height/opacity can transition instead of snapping. */
  menu.hidden = false;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
    menu.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
})();

/* height is the deliberately-chosen animated property below (see the
   comment above .proj__arch in index.css for why transform/opacity-only
   alternatives were rejected). */
/* ── animated open/close for architecture-notes disclosures ─────────── */
(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  var detailsList = document.querySelectorAll('.proj__details, .project-featured__details');

  detailsList.forEach(function (details) {
    var content = details.querySelector('.proj__arch, .project-featured__arch');
    var summary = details.querySelector('summary');
    if (!content || !summary) return;

    summary.addEventListener('click', function (e) {
      e.preventDefault();

      if (details.open) {
        content.style.height = content.scrollHeight + 'px';
        requestAnimationFrame(function () {
          content.style.height = '0px';
          content.style.opacity = '0';
        });
        content.addEventListener('transitionend', function handler(ev) {
          if (ev.propertyName !== 'height') return;
          details.open = false;
          content.style.height = '';
          content.removeEventListener('transitionend', handler);
        });
      } else {
        details.open = true;
        content.style.height = '0px';
        content.style.opacity = '0';
        requestAnimationFrame(function () {
          content.style.height = content.scrollHeight + 'px';
          content.style.opacity = '1';
        });
        content.addEventListener('transitionend', function handler(ev) {
          if (ev.propertyName !== 'height') return;
          content.style.height = 'auto';
          content.removeEventListener('transitionend', handler);
        });
      }
    });
  });
})();

/* ── scroll-reveal for work cards + count-up for the dominant stat ──── */
(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var cards = document.querySelectorAll(
    '.proj--featured, .proj--supporting, .project-featured, .project-supporting, .oss-card, .exp-item'
  );
  if (cards.length && 'IntersectionObserver' in window && !reduceMotion) {
    cards.forEach(function (c) { c.classList.add('reveal-pending'); });
    {
      var cardObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            setTimeout(function () { entry.target.classList.add('is-visible'); }, i * 50);
            cardObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      cards.forEach(function (c) { cardObserver.observe(c); });
    }
  }

  var stat = document.querySelector('.stat--dominant .stat__num');
  if (stat && 'IntersectionObserver' in window) {
    var target = parseFloat(stat.textContent);
    var suffix = stat.textContent.replace(/[0-9.]/g, '');
    if (reduceMotion || isNaN(target)) {
      // leave static
    } else {
      var statObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          statObserver.unobserve(entry.target);
          var start = null;
          var duration = 700;
          function step(ts) {
            if (start === null) start = ts;
            var progress = Math.min((ts - start) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            stat.textContent = (target * eased).toFixed(target % 1 === 0 ? 0 : 1) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        });
      }, { threshold: 0.6 });
      statObserver.observe(stat);
    }
  }
})();

/* ── spring-powered interactions (Motion, loaded from CDN) ───────────
   Everything below is decorative/feedback motion on elements the user
   directly touches (press, hover-tilt, toggle, drawer) — exactly where
   Apple's fluid-interfaces guidance says springs earn their keep. Skipped
   entirely under prefers-reduced-motion so no extra JS/network cost is
   paid for a payload that would just be disabled. */
(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  import('https://cdn.jsdelivr.net/npm/motion@11.15.0/+esm').then(function (Motion) {
    var animate = Motion.animate;

    /* press feedback — snappy in, bouncy release, on every pressable CTA.
       Animates the independent `scale` CSS property rather than the
       `transform` shorthand, so it composes cleanly with the magnetic-pull
       `x`/`y` animation below instead of one overwriting the other. */
    var pressables = document.querySelectorAll('.btn, .nav-cta');
    pressables.forEach(function (el) {
      var down = false;
      el.addEventListener('pointerdown', function () {
        down = true;
        animate(el, { scale: 0.94 }, { type: 'spring', stiffness: 500, damping: 30 });
      });
      function release() {
        if (!down) return;
        down = false;
        animate(el, { scale: 1 }, { type: 'spring', duration: 0.45, bounce: 0.4 });
      }
      el.addEventListener('pointerup', release);
      el.addEventListener('pointerleave', release);
      el.addEventListener('pointercancel', release);
    });

    /* magnetic pull — the two primary hero CTAs lean toward the cursor
       within a small radius, then spring back on leave. Desktop-only. */
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      var magnetic = document.querySelectorAll('.btn--primary, .btn--secondary');
      magnetic.forEach(function (el) {
        el.addEventListener('pointermove', function (e) {
          var rect = el.getBoundingClientRect();
          var x = (e.clientX - rect.left - rect.width / 2) * 0.25;
          var y = (e.clientY - rect.top - rect.height / 2) * 0.25;
          animate(el, { x: x, y: y }, { type: 'spring', stiffness: 200, damping: 18 });
        });
        el.addEventListener('pointerleave', function () {
          animate(el, { x: 0, y: 0 }, { type: 'spring', duration: 0.5, bounce: 0.35 });
        });
      });
    }

    /* magnetic tilt + cursor-spotlight — desktop-only, mouse-tracking,
       purely decorative. The spotlight reads --spot-x/--spot-y set here
       directly on the card element itself (see the ::after rules in
       index.css/projects.css) — never on a shared ancestor — so updating
       them on every pointermove only recalculates this one element's
       style, not its children's. */
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      var tiltCards = document.querySelectorAll('.proj, .project-featured, .oss-card');
      tiltCards.forEach(function (card) {
        card.addEventListener('pointermove', function (e) {
          var rect = card.getBoundingClientRect();
          var px = (e.clientX - rect.left) / rect.width - 0.5;
          var py = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.setProperty('--spot-x', (px + 0.5) * 100 + '%');
          card.style.setProperty('--spot-y', (py + 0.5) * 100 + '%');
          animate(
            card,
            { transform: 'perspective(900px) rotateX(' + (-py * 4) + 'deg) rotateY(' + (px * 4) + 'deg)' },
            { type: 'spring', stiffness: 150, damping: 15 }
          );
        });
        card.addEventListener('pointerleave', function () {
          animate(
            card,
            { transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)' },
            { type: 'spring', duration: 0.6, bounce: 0.3 }
          );
        });
      });
    }

    /* theme toggle — a little spin+pulse on top of the existing icon crossfade.
       Animates the independent `rotate`/`scale` CSS properties (not the
       `transform` shorthand) and accumulates rotation rather than resetting
       to a fixed start keyframe each click — otherwise every second click
       would snap back to 0deg before spinning again instead of continuing
       smoothly from wherever the icon currently sits. */
    var themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      var toggleRotation = 0;
      themeToggle.addEventListener('click', function () {
        toggleRotation += 180;
        animate(
          themeToggle,
          { rotate: toggleRotation + 'deg', scale: [1, 1.15, 1] },
          { type: 'spring', duration: 0.5, bounce: 0.35 }
        );
      });
    }

    /* mobile nav — pop open with a bit of overshoot, snap shut fast */
    var mobileMenu = document.getElementById('nav-menu');
    if (mobileMenu) {
      var menuObserver = new MutationObserver(function () {
        if (mobileMenu.classList.contains('is-open')) {
          /* CSS already drives max-height/opacity/padding-block (see index.css
             .nav-menu.is-open) — this layers a scaleY overshoot on top,
             it doesn't duplicate opacity so the two systems don't race. */
          animate(
            mobileMenu,
            { transform: ['scaleY(0.9)', 'scaleY(1)'] },
            { type: 'spring', duration: 0.45, bounce: 0.3 }
          );
        }
      });
      menuObserver.observe(mobileMenu, { attributes: true, attributeFilter: ['class'] });
    }

    /* stat count-up completion pulse — the dominant metric currently counts
       up (see the scroll-reveal block above) and then just stops; this adds
       a small landing beat once it settles. The 700 here must match the
       `duration` constant in that block's count-up step function. */
    var statEl = document.querySelector('.stat--dominant .stat__num');
    if (statEl && 'IntersectionObserver' in window) {
      var statPulseObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          statPulseObserver.unobserve(entry.target);
          setTimeout(function () {
            animate(statEl, { scale: [1, 1.12, 1] }, { type: 'spring', duration: 0.5, bounce: 0.45 });
          }, 700);
        });
      }, { threshold: 0.6 });
      statPulseObserver.observe(statEl);
    }
  });
})();
