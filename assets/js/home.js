/* SHEMIRANI — home hero.
   Opens on the newest design and moves to the next one every 30 seconds: the 3D model
   cross-fades, the name, line and description drop out and rise back in, and within each
   design the camera tours the piece (three-quarter, top, stones, side). */
(function(){
  'use strict';
  var SM = window.SM, RM = SM.RM, root = document.documentElement;
  var LIST = SM.designs.slice();               /* already newest first */
  var HOLD = 30000;                             /* ms per design */
  var TOUR = [
    { az: .62, el: .30, d: 1,   ty: 0 },
    { az: 0,   el: 1.3, d: .9,  ty: .1 },
    { az: .35, el: .72, d: .5,  ty: .72 },
    { az: 1.5, el: .12, d: .92, ty: .05 }
  ];

  var hero = document.querySelector('.hero');
  var rises = [].slice.call(hero.querySelectorAll('.hrise'));
  var blurb = hero.querySelector('.blurb');
  var cta = hero.querySelector('.cta');
  var stage = document.querySelector('.stage');
  var poster = document.querySelector('.bg .poster');
  var ticker = document.querySelector('.ticker');
  var idx = 0, swapT = 0;

  function D(){ return LIST[idx]; }
  function fill(){
    var d = D();
    rises[0].textContent = d.name;
    rises[1].textContent = SM.t(d.line);
    blurb.textContent = SM.t(d.description);
    cta.setAttribute('href', SM.url('designs/' + d.id + '/index.html'));
    var bgl = document.querySelector('.bg'); if (bgl) bgl.setAttribute('aria-label', d.name + ', ' + SM.t(d.kind));
    [].forEach.call(ticker.querySelectorAll('button'), function(b, i){ b.classList.toggle('on', i === idx); b.setAttribute('aria-current', i === idx ? 'true' : 'false'); });
  }
  SM.onLang(fill);

  /* ticker: one segment per design, filling over 30 s */
  ticker.innerHTML = LIST.map(function(d, i){
    return '<button type="button" aria-label="' + SM.esc(d.name) + '"><span class="nm">' + SM.esc(d.name) + '</span><i><b></b></i></button>';
  }).join('');
  if (LIST.length < 2) ticker.hidden = true;
  [].forEach.call(ticker.querySelectorAll('button'), function(b, i){ b.addEventListener('click', function(){ show(i); }); });

  var scene = window.ShemiraniRing(document.getElementById('gl'), {
    model: D().model, base: SM.url('assets/'), host: stage, fill: .5, pose: TOUR[0],
    offset: function(W, H){ var a = W / H; return W <= 548 ? .17 : (a < 1.2 ? .14 : .11); },
    onResize: function(off){ stage.style.setProperty('--ring-y', (50 - off * 100 - 3) + '%'); }
  });
  if (poster) poster.src = SM.url(D().thumb);
  LIST.forEach(function(d, i){ if (i) setTimeout(function(){ scene.preload(d.model); }, 4000 + i * 1500); });

  var elapsed = 0, tourStep = 0;
  function show(i){
    if (i === idx) { elapsed = 0; return; }
    idx = (i + LIST.length) % LIST.length; elapsed = 0; tourStep = 0;
    scene.setModel(D().model); scene.go(TOUR[0]);
    clearTimeout(swapT);
    hero.classList.add('swapping');
    swapT = setTimeout(function(){ fill(); void hero.offsetWidth; hero.classList.remove('swapping'); }, RM ? 0 : 500);
    [].forEach.call(ticker.querySelectorAll('b'), function(b){ b.style.transform = 'scaleX(0)'; });
  }

  /* the clock only runs while the hero is on screen and the tab is visible */
  var heroVis = true, last = performance.now();
  if ('IntersectionObserver' in window) new IntersectionObserver(function(es){ heroVis = es[0].isIntersecting; }, { threshold: .35 }).observe(stage);
  function clock(now){
    requestAnimationFrame(clock);
    var dt = now - last; last = now;
    if (!heroVis || document.hidden || root.classList.contains('sb-open') || dt > 500) return;
    elapsed += dt;
    var bars = ticker.querySelectorAll('b');
    if (bars[idx]) bars[idx].style.transform = 'scaleX(' + Math.min(1, elapsed / HOLD).toFixed(4) + ')';
    var step = Math.min(TOUR.length - 1, Math.floor(elapsed / (HOLD / TOUR.length)));
    if (step !== tourStep){ tourStep = step; scene.go(TOUR[step]); }
    if (elapsed >= HOLD && LIST.length > 1) show(idx + 1);
  }
  requestAnimationFrame(clock);

  /* ---------- parallax (reference values) ---------- */
  var bg = document.querySelector('.bg');
  var tx = 0, ty = 0, cx = 0, cy = 0, running = false;
  function ptick(){
    cx += (tx - cx) * 0.045; cy += (ty - cy) * 0.045;
    var w = innerWidth, h = innerHeight, dx = -cx * w * 0.0156, dy = -cy * h * 0.015;
    var cover = 2 * Math.max(Math.abs(dx) / w, Math.abs(dy) / h), sc = 1 + cover + 0.014 * Math.max(0, cy);
    bg.style.transform = 'translate3d(' + dx.toFixed(2) + 'px,' + dy.toFixed(2) + 'px,0) scale(' + sc.toFixed(4) + ')';
    if (Math.abs(tx - cx) < 0.0004 && Math.abs(ty - cy) < 0.0004){ running = false; return; }
    requestAnimationFrame(ptick);
  }
  function wake(){ if (!running && !RM){ running = true; requestAnimationFrame(ptick); } }
  addEventListener('pointermove', function(e){
    if (e.pointerType === 'touch' || root.classList.contains('sb-open') || scrollY > innerHeight) return;
    tx = (e.clientX / innerWidth) * 2 - 1; ty = (e.clientY / innerHeight) * 2 - 1; wake();
  }, { passive: true });
  document.addEventListener('pointerleave', function(){ tx = 0; ty = 0; wake(); });

  /* ---------- audio toggle (UI state, as in the reference) ---------- */
  var audio = document.querySelector('.audio');
  audio.addEventListener('click', function(){
    var on = audio.getAttribute('aria-pressed') === 'true';
    audio.setAttribute('aria-pressed', String(!on)); audio.classList.toggle('muted', on);
    var t = audio.querySelector('.t');
    if (on) SM.relabel(t, 'AUDIO OFF', 'صدا خاموش'); else SM.relabel(t, 'AUDIO ON', 'صدا روشن');
  });

  /* ---------- the newest design below the fold ---------- */
  var N = LIST[0], fph = document.querySelector('.feature .ph');
  if (fph){
    fph.innerHTML = N.film
      ? '<video muted loop playsinline autoplay preload="metadata" poster="' + SM.url(N.poster) + '" src="' + SM.url(N.film) + '" aria-label="' + SM.esc(N.name) + '"></video>'
      : '<img src="' + SM.url(N.cover) + '" alt="' + SM.esc(N.name) + '">';
  }
  [].forEach.call(document.querySelectorAll('[data-design-link]'), function(a){ a.href = SM.url('designs/' + N.id + '/index.html'); });
  var fn = document.querySelector('[data-design-name]'); if (fn) fn.textContent = N.name;
  SM.onLang(function(){
    var q = function(s){ return document.querySelector(s); };
    if (q('[data-design-desc]')) q('[data-design-desc]').textContent = SM.t(N.description);
    if (q('[data-design-kind]')) q('[data-design-kind]').textContent = SM.t(N.kind);
    if (q('[data-design-line]')) q('[data-design-line]').textContent = SM.t(N.line);
  });

  /* ---------- boot ---------- */
  fill();
  SM.start({ onFonts: function(){
    if (RM) return;
    function at(sel, t0, step){
      [].slice.call(document.querySelectorAll(sel)).forEach(function(el, i){ setTimeout(function(){ SM.decode(el); }, t0 + i * (step || 0)); });
    }
    at('.enter .t', 330); at('.menu .t', 390); at('.links a .t', 360, 45);
    at('.cta .t', 900); at('.dock .t', 1000, 60);
    setTimeout(function(){ root.classList.remove('anim'); }, 2200);
    setTimeout(function(){ SM.labels.forEach(SM.settle); }, 2600);
  }});
})();
