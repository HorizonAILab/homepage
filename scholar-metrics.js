/* 数值取 Google Scholar 的 All 栏 */
window.SCHOLAR_METRICS = {
  profileId: 'w0YDfhcAAAAJ',
  citations: 1399,
  hIndex: 23,
  i10Index: 42,
  updatedAt: '2026-10-16'
};

(function () {
  'use strict';
  var data = window.SCHOLAR_METRICS;
  var keys = ['citations', 'hIndex', 'i10Index'];
  var names = { citations: 'citations', hIndex: 'h-index', i10Index: 'i10-index' };
  var nodes = Array.from(document.querySelectorAll('[data-scholar-metric]'));
  if (!nodes.length || !valid(data)) return;
  var storageKey = 'scholar-last-visit:v1:' + data.profileId;
  var format = new Intl.NumberFormat('en-US');
  var date = new Date(data.updatedAt + 'T00:00:00Z');
  var dateLabel = Number.isFinite(date.getTime())
    ? new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date)
    : data.updatedAt;
  var frames = new Set();
  var started = false;
  var observer;
  var inView = !('IntersectionObserver' in window);
  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');

  function valid(value) {
    if (!value || typeof value.profileId !== 'string' || !/^[A-Za-z0-9_-]{1,64}$/.test(value.profileId)) return false;
    var timestamp = Date.parse(value.updatedAt + 'T00:00:00Z');
    return value.profileId === data.profileId &&
      typeof value.updatedAt === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value.updatedAt) &&
      Number.isFinite(timestamp) && new Date(timestamp).toISOString().slice(0, 10) === value.updatedAt &&
      keys.every(function (key) { return Number.isSafeInteger(value[key]) && value[key] >= 0; });
  }
  function previousVisit() {
    try {
      var previous = JSON.parse(window.localStorage.getItem(storageKey));
      return valid(previous) ? previous : null;
    } catch (_) { return null; }
  }
  function finish() {
    frames.forEach(function (id) { window.cancelAnimationFrame(id); });
    frames.clear();
    nodes.forEach(function (node) {
      var key = node.dataset.scholarMetric;
      if (keys.includes(key)) {
        node.textContent = format.format(data[key]);
        node.classList.remove('is-increasing');
      }
    });
  }
  function grow(node, from, to) {
    var first;
    node.classList.add('is-increasing');
    function tick(now) {
      frames.delete(id);
      if (first === undefined) first = now;
      var progress = Math.min(1, Math.max(0, (now - first) / 950));
      var value = from + Math.floor((to - from) * (1 - Math.pow(1 - progress, 3)));
      node.textContent = format.format(progress === 1 ? to : value);
      if (progress < 1) { id = window.requestAnimationFrame(tick); frames.add(id); }
      else node.classList.remove('is-increasing');
    }
    node.textContent = format.format(from);
    var id = window.requestAnimationFrame(tick);
    frames.add(id);
  }
  function start() {
    if (started || document.hidden || !inView) return;
    started = true;
    if (observer) observer.disconnect();
    var previous = previousVisit();
    var olderSnapshot = previous && previous.updatedAt > data.updatedAt;
    nodes.forEach(function (node) {
      var key = node.dataset.scholarMetric;
      if (!keys.includes(key)) return;
      if (previous && !olderSnapshot && data[key] > previous[key] &&
          !(reducedMotion && reducedMotion.matches) && window.requestAnimationFrame) {
        grow(node, previous[key], data[key]);
      }
    });
    if (!olderSnapshot) {
      try {
        window.localStorage.setItem(storageKey, JSON.stringify({
          profileId: data.profileId, updatedAt: data.updatedAt,
          citations: data.citations, hIndex: data.hIndex, i10Index: data.i10Index
        }));
      } catch (_) { /* 隐私模式或存储不可用时，仍直接显示真实配置值。 */ }
    }
  }

  nodes.forEach(function (node) {
    var key = node.dataset.scholarMetric;
    if (!keys.includes(key)) return;
    node.textContent = format.format(data[key]);
    node.setAttribute('aria-label', format.format(data[key]) + ' ' + names[key]);
    node.title = 'Google Scholar · ' + dateLabel;
  });
  document.querySelectorAll('[data-scholar-updated]').forEach(function (node) {
    node.textContent = dateLabel;
    node.setAttribute('datetime', data.updatedAt);
  });
  document.querySelectorAll('[data-scholar-source]').forEach(function (node) {
    node.title = 'Google Scholar · Snapshot checked ' + dateLabel;
  });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) finish();
    else start();
  });
  window.addEventListener('pagehide', finish);
  if (reducedMotion) {
    var motionChanged = function () { if (reducedMotion.matches) finish(); };
    if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', motionChanged);
    else if (reducedMotion.addListener) reducedMotion.addListener(motionChanged);
  }
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(function (entries) {
      inView = entries.some(function (entry) { return entry.isIntersecting; });
      if (inView) start();
    }, { threshold: 0.15 });
    observer.observe(nodes[0]);
  } else start();
}());
