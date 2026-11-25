(function () {
  var toast = document.querySelector('.ds-toast'), t;
  function say(msg) {
    toast.textContent = msg;
    toast.classList.add('is-on');
    clearTimeout(t);
    t = setTimeout(function () { toast.classList.remove('is-on'); }, 1600);
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-copy]');
    if (!b) return;
    var v = b.getAttribute('data-copy');
    var done = function () { say(v.toUpperCase() + (document.documentElement.lang === 'en' ? ' copied' : ' kopiert')); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(v).then(done, done);
    else done();
  });

  var header = document.querySelector('.ds-header'), last = window.scrollY;
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    header.classList.toggle('is-hidden', y > last && y > 160);
    last = y;
  }, { passive: true });
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    window.addEventListener('mousemove', function (e) { if (e.clientY < 16) header.classList.remove('is-hidden'); }, { passive: true });
  }

  function fit(f) {
    try {
      var d = f.contentDocument; if (!d || !d.body) return;
      var h = Math.max(d.documentElement.scrollHeight, d.body.scrollHeight);
      if (h > 40) f.style.height = (h + 8) + 'px';
    } catch (err) {}
  }
  [].slice.call(document.querySelectorAll('.ds-comp__frame iframe')).forEach(function (f) {
    f.addEventListener('load', function () {
      fit(f); setTimeout(function () { fit(f); }, 400); setTimeout(function () { fit(f); }, 1500);
      try { if ('ResizeObserver' in window) new ResizeObserver(function () { fit(f); }).observe(f.contentDocument.body); } catch (err) {}
    });
  });

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('ds-anim');
    var rio = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (!en.isIntersecting) return; en.target.classList.add('is-in'); rio.unobserve(en.target); });
    }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });
    [].slice.call(document.querySelectorAll('.ds-mark')).forEach(function (el) { rio.observe(el); });
    [].slice.call(document.querySelectorAll('.ds-swatch, .ds-type, .ds-scale, .ds-radius, .ds-asset, .ds-icon, .ds-comp, .ds-hero__art')).forEach(function (el) {
      var sib = el.parentElement ? [].slice.call(el.parentElement.children) : [el];
      el.classList.add('ds-rise'); el.style.transitionDelay = ((Math.max(0, sib.indexOf(el)) % 6) * 60) + 'ms'; rio.observe(el);
    });
  }

  var links = [].slice.call(document.querySelectorAll('.ds-header__nav a'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id); });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    links.forEach(function (a) { var s = document.querySelector(a.getAttribute('href')); if (s) io.observe(s); });
  }
})();
(function () {
  var b = document.querySelector('.ds-totop');
  if (!b) return;
  function update() { b.classList.toggle('is-on', window.scrollY > window.innerHeight * 0.8); }
  window.addEventListener('scroll', update, { passive: true });
  update();
  b.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });
})();
