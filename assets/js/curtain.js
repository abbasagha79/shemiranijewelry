/* SHEMIRANI — curtain footer (vanilla-JS port of the "cinematic footer" component).
   Same behaviour as the original, without GSAP: scroll-scrubbed reveal of the giant word
   and content (scrub: 1 -> eased following), magnetic pills with tilt, elastic release.
   Renders into <div data-curtain>. */
(function(){
  'use strict';
  var host = document.querySelector('[data-curtain]');
  if (!host || !window.SM) return;
  var SM = window.SM, e = SM.esc;
  var RM = SM.RM, FINE = window.matchMedia && matchMedia('(hover:hover) and (pointer:fine)').matches;
  var cur = document.body.getAttribute('data-collection') || '';
  var fa = function(){ return SM.lang === 'fa'; };
  var TG = 'https://t.me/abbasamrahbari';
  var ICON = {
    tg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.5 3.5 2.5 10.8l6.1 2.1 2.2 6.6 3-4 4.8 3.5z"/><path d="M8.6 12.9 21.5 3.5"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="3" y="3" width="8" height="8" rx="1.6"/><rect x="13" y="3" width="8" height="8" rx="1.6"/><rect x="3" y="13" width="8" height="8" rx="1.6"/><rect x="13" y="13" width="8" height="8" rx="1.6"/></svg>',
    up: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>'
  };
  var MQ = {
    en: ['Custom design', '18K gold', 'Diamond setting', '3D preview', 'Every measurement'],
    fa: ['طراحی اختصاصی', 'طلای ۱۸ عیار', 'نگین‌نشانی', 'پیش‌نمایش سه‌بعدی', 'همه‌ی اندازه‌ها']
  };
  function marq(){
    var l = MQ[fa() ? 'fa' : 'en'], h = '<div class="cf-item">';
    l.forEach(function(t, i){ h += '<span>' + e(t) + '</span> <i>✦</i>'; });
    return h + '</div>';
  }
  function build(){
    var others = SM.collections.filter(function(c){ return c.id !== cur; });
    var pills = (cur ? others : SM.collections.concat([{ id: 'action-figures', en: 'Action figures', fa: 'اکشن فیگورها' }])).map(function(c){
      return '<a class="cf-pill md" data-mag href="' + e(SM.url('collections/' + c.id + '/index.html')) + '">' + e(fa() ? c.fa : c.en) + '</a>';
    }).join('');
    host.className = 'cf-wrap';
    host.innerHTML =
      '<div class="cf-foot" role="contentinfo">' +
        '<div class="cf-aurora"></div><div class="cf-grid"></div>' +
        '<div class="cf-giant" data-giant aria-hidden="true">SHEMIRANI</div>' +
        '<div class="cf-marq" aria-hidden="true"><div class="cf-marq-in">' + marq() + marq() + '</div></div>' +
        '<div class="cf-center">' +
          '<h2 class="cf-h" data-head>' + (fa() ? 'طرح خودتان را پیدا کنید' : 'Find your piece') + '</h2>' +
          '<div class="cf-links" data-links>' +
            '<div class="cf-row">' +
              '<a class="cf-pill lg" data-mag href="' + TG + '" target="_blank" rel="noopener">' + ICON.tg + (fa() ? 'پیام در تلگرام' : 'Message on Telegram') + '</a>' +
              (cur ? '<a class="cf-pill lg" data-mag href="' + e(SM.url('index.html#collections')) + '">' + ICON.grid + (fa() ? 'همه‌ی مجموعه‌ها' : 'All collections') + '</a>'
                   : '<a class="cf-pill lg" data-mag href="#works">' + ICON.grid + (fa() ? 'طرح‌های ما' : 'Our designs') + '</a>') +
            '</div>' +
            '<div class="cf-row sm">' + pills + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="cf-bar">' +
          '<div class="cf-copy">' + (fa() ? '© ۲۰۲۶ SHEMIRANI. تمامی حقوق محفوظ است.' : '© 2026 SHEMIRANI. All rights reserved.') + '</div>' +
          '<div class="cf-badge"><span>' + (fa() ? 'ساخته‌شده با' : 'Crafted with') + '</span><span class="cf-heart">❤</span><span>' + (fa() ? 'توسط' : 'by') + '</span><b>SHEMIRANI</b></div>' +
          '<button type="button" class="cf-pill cf-top" data-mag data-top aria-label="' + (fa() ? 'بازگشت به بالا' : 'Back to top') + '">' + ICON.up + '</button>' +
        '</div>' +
      '</div>';
    wire();
  }

  /* ---------- easings (GSAP names) ---------- */
  var ease = {
    p1: function(x){ return 1 - Math.pow(1 - x, 2); },
    p2: function(x){ return 1 - Math.pow(1 - x, 3); },
    p3: function(x){ return 1 - Math.pow(1 - x, 4); },
    elastic: function(x){ if (x <= 0) return 0; if (x >= 1) return 1; return Math.pow(2, -10 * x) * Math.sin((x - 0.075) * 2 * Math.PI / 0.3) + 1; }
  };
  function lerp(a, b, t){ return a + (b - a) * t; }
  function clamp01(v){ return v < 0 ? 0 : v > 1 ? 1 : v; }

  var giant, head, links, wrap;
  var tgtA = 0, tgtB = 0, curA = 0, curB = 0, raf = 0, last = 0;
  /* ScrollTrigger-style progress: start "top P%" -> end "bottom bottom" */
  function progress(startFrac){
    var r = wrap.getBoundingClientRect(), vh = window.innerHeight;
    var s = vh * startFrac, end = vh - r.height;           /* wrapper top at s  ->  wrapper bottom at viewport bottom */
    return clamp01((s - r.top) / (s - end || 1));
  }
  function paint(){
    /* giant word: y 10vh -> 0, scale .8 -> 1, opacity 0 -> 1, power1.out */
    var a = ease.p1(curA);
    giant.style.transform = 'translate(-50%,' + lerp(10, 0, a) + 'vh) scale(' + lerp(.8, 1, a) + ')';
    giant.style.opacity = a;
    /* heading, then links: stagger .15 inside a 1.15-long timeline, power3.out */
    [head, links].forEach(function(el, i){
      var t = clamp01((curB * 1.15 - i * .15) / 1), k = ease.p3(t);
      el.style.transform = 'translateY(' + lerp(50, 0, k) + 'px)'; el.style.opacity = k;
    });
  }
  function tick(now){
    raf = 0;
    var dt = Math.min(.1, (now - last) / 1000 || .016); last = now;
    tgtA = progress(.8); tgtB = progress(.4);
    var f = 1 - Math.exp(-dt / .28);                         /* scrub: 1 -> about one second of catch-up */
    curA = lerp(curA, tgtA, f); curB = lerp(curB, tgtB, f);
    paint();
    if (Math.abs(curA - tgtA) > .0005 || Math.abs(curB - tgtB) > .0005) raf = requestAnimationFrame(tick);
  }
  function kick(){ if (!raf){ last = performance.now(); raf = requestAnimationFrame(tick); } }

  /* ---------- magnetic pill ---------- */
  function magnetic(el){
    var s = { x: 0, y: 0, rx: 0, ry: 0, sc: 1 }, from = null, t0 = 0, dur = 0, mode = '', to = null, r = 0;
    function apply(){ el.style.transform = 'perspective(600px) translate3d(' + s.x + 'px,' + s.y + 'px,0) rotateX(' + s.rx + 'deg) rotateY(' + s.ry + 'deg) scale(' + s.sc + ')'; }
    function step(now){
      var k = clamp01((now - t0) / dur), v = mode === 'leave' ? ease.elastic(k) : ease.p2(k);
      for (var p in to) s[p] = lerp(from[p], to[p], v);
      apply();
      r = k < 1 ? requestAnimationFrame(step) : 0;
      if (k >= 1 && mode === 'leave') el.style.transform = '';
    }
    function go(m, target, d){ from = { x: s.x, y: s.y, rx: s.rx, ry: s.ry, sc: s.sc }; to = target; mode = m; dur = d; t0 = performance.now(); if (r) cancelAnimationFrame(r); r = requestAnimationFrame(step); }
    el.addEventListener('mousemove', function(ev){
      var b = el.getBoundingClientRect(), x = ev.clientX - b.left - b.width / 2, y = ev.clientY - b.top - b.height / 2;
      go('move', { x: x * .4, y: y * .4, rx: -y * .15, ry: x * .15, sc: 1.05 }, 400);
    });
    el.addEventListener('mouseleave', function(){ go('leave', { x: 0, y: 0, rx: 0, ry: 0, sc: 1 }, 1200); });
  }

  var bound = false;
  function wire(){
    wrap = host; giant = host.querySelector('[data-giant]'); head = host.querySelector('[data-head]'); links = host.querySelector('[data-links]');
    host.querySelector('[data-top]').addEventListener('click', function(){ window.scrollTo({ top: 0, behavior: RM ? 'auto' : 'smooth' }); });
    if (RM){ curA = curB = 1; paint(); }
    else { curA = tgtA = progress(.8); curB = tgtB = progress(.4); paint(); kick(); }
    if (FINE && !RM) [].forEach.call(host.querySelectorAll('[data-mag]'), magnetic);
    if (SM.collectLabels) SM.collectLabels();
    if (!bound){ bound = true; if (!RM){ addEventListener('scroll', kick, { passive: true }); addEventListener('resize', kick); } }
  }
  var main = document.getElementById('collection');
  if (main) main.classList.add('cf-main');
  build();
  SM.onLang(build);
})();
