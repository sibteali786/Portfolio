(function () {
  var themeToggle = document.querySelector('.theme-toggle');

  function currentTheme() {
    var stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
    }
  }

  /* applies even on pages without a toggle button, so a stored preference
     follows the visitor onto every page */
  applyTheme(currentTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = currentTheme() === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      applyTheme(next);
    });
  }
})();

(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu   = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  /* nav-menu ships visible/expanded in CSS so links work with no JS.
     Only once this runs do we opt into the collapsible mobile menu. */
  menu.classList.add('js-collapsed');

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
    '.proj--featured, .proj--supporting, .project-featured, .project-supporting, .oss-card, .exp-item,' +
    ' .arch-block, .log-entry, .shipped-group, .req-item, .pipeline-step, .zen-loop'
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
