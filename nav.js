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

  themeToggle.addEventListener('click', function () {
    var next = currentTheme() === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', next);
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

/* ── scroll-reveal for work cards + count-up for the dominant stat ──── */
(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var cards = document.querySelectorAll('.proj--featured, .proj--supporting');
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
