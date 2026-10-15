// Small enhancements: whiteboard sketches draw themselves as they scroll into
// view, and headline numbers count up. Without JavaScript, or with reduced
// motion turned on, everything simply shows in its finished state.
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('motion');

  // Anything already on screen is drawn straight away, so the first view is complete.
  var drawables = Array.prototype.slice.call(document.querySelectorAll('.drawable'));
  var fold = window.innerHeight * 0.9;
  var drawObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        drawObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });

  drawables.forEach(function (el) {
    if (el.getBoundingClientRect().top < fold) {
      el.classList.add('in');
    } else {
      drawObserver.observe(el);
    }
  });

  var countObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      countObserver.unobserve(entry.target);
      var el = entry.target;
      var end = parseInt(el.getAttribute('data-count'), 10);
      var finalText = el.textContent;
      var suffix = finalText.replace(/[0-9]/g, '');
      var start = performance.now();
      (function step(now) {
        var progress = Math.min(1, (now - start) / 900);
        el.textContent = progress < 1 ? Math.round(end * progress) + suffix : finalText;
        if (progress < 1) requestAnimationFrame(step);
      })(start);
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('[data-count]').forEach(function (el) {
    countObserver.observe(el);
  });
})();
