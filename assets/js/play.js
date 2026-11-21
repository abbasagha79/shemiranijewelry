/* SHEMIRANI — mischievous jewels. Seven tiny white characters roam the whole page: they drift
   with the scroll, tumble when you scroll fast, work out when you stop, and now and then say
   one salty thing from a little cloud. Pure overlay (pointer-events none). */
(function(){
  'use strict';
  if (!window.SM || document.querySelector('.play-layer')) return;
  var SM = window.SM, e = SM.esc, RM = SM.RM;
  /* shared face: eyes that blink, slanted brows, a crooked grin; (x,y) is the centre of the face */
  function face(x, y, k){
    k = k || 1;
    return '<g class="face" transform="translate(' + x + ' ' + y + ') scale(' + k + ')">' +
      '<g class="eyes"><ellipse cx="-7" cy="0" rx="2.6" ry="3.4"/><ellipse cx="7" cy="0" rx="2.6" ry="3.4"/></g>' +
      '<path class="brow" d="M-11 -7l8 3M11 -7l-8 3"/>' +
      '<path class="grin" d="M-8 8q8 7 16 -1"/></g>';
  }
  var CH = {
    diamond: '<svg viewBox="0 0 100 100"><path d="M26 22h48l16 22-40 46L10 44z"/><path d="M10 44h80M34 22l-8 22 24 46 24-46-8-22M34 22l16 22 16-22" class="in"/>' + face(50, 56, 1.1) + '</svg>',
    ring: '<svg viewBox="0 0 100 100"><circle cx="50" cy="66" r="27"/><circle cx="50" cy="66" r="19"/><path d="M36 22h28l8 12-22 24-22-24z"/><path d="M28 34h44M44 22l-6 12 12 24 12-24-6-12" class="in"/>' + face(50, 38, .8) + '</svg>',
    necklace: '<svg viewBox="0 0 100 100"><path d="M8 8c2 26 18 46 42 46S90 34 92 8"/><path d="M14 8c3 22 16 38 36 38s33-16 36-38" class="in"/><path d="M50 54l-14 14 14 26 14-26z"/>' + face(50, 72, .75) + '</svg>',
    bracelet: '<svg viewBox="0 0 100 100"><ellipse cx="50" cy="52" rx="42" ry="30"/><ellipse cx="50" cy="52" rx="34" ry="22" class="in"/><circle cx="50" cy="82" r="13"/>' + face(50, 83, .62) + '</svg>',
    pearl: '<svg viewBox="0 0 100 100"><circle cx="50" cy="54" r="34"/><path d="M30 38q6-12 20-14" class="in"/>' + face(50, 58, 1.1) + '</svg>',
    heart: '<svg viewBox="0 0 100 100"><path d="M50 88C12 62 8 36 26 26c11-6 20 0 24 8 4-8 13-14 24-8 18 10 14 36-24 62z"/><path d="M22 36q4-8 12-8" class="in"/>' + face(50, 52, 1) + '</svg>',
    gold: '<svg viewBox="0 0 100 100"><path d="M24 34h52l14 44H10z"/><path d="M24 34l-6 14h64l-6-14M18 48l-8 30M82 48l8 30" class="in"/>' + face(50, 62, 1) + '</svg>'
  };
  var ROWS = [
    { c: 'diamond', en: 'I’m not hard to get. Just hard to scratch.', fa: 'ارزون نیستم، خط‌خور هم نیستم!' },
    { c: 'ring', en: 'Put a ring on it? Smart choice.', fa: 'حلقه‌م کردی؟ آفرین به سلیقه‌ت!' },
    { c: 'necklace', en: 'Hanging around. Looking fabulous.', fa: 'آویزونم، ولی شیکِ شیک!' },
    { c: 'bracelet', en: 'Free spins. No casino needed.', fa: 'دور می‌زنم؛ بدون کازینو!' },
    { c: 'pearl', en: 'Round, rich and rolling away.', fa: 'گِردم، گرونم، فرار می‌کنم!' },
    { c: 'heart', en: 'Close to your heart. Far from your budget? No.', fa: 'نزدیک دلتم؛ دور از جیبت نه!' },
    { c: 'gold', en: 'Winning since 3000 BC.', fa: 'از هزاران سال پیش برنده‌ام!' }
  ];
  /* Each little jewel lives on the page itself (it scrolls away with the content) and moves by
     its own will: it walks to a random spot, stops, works out or says something, then walks on. */
  var layer = document.createElement('div');
  layer.className = 'play-layer'; layer.setAttribute('aria-hidden', 'true');
  document.body.appendChild(layer);
  var chars = [], W = 0, H = 0;
  var MOVES = ['st-jack', 'st-squat', 'st-lift', 'st-stretch'];
  function size(){
    W = document.documentElement.clientWidth;
    H = Math.max(document.documentElement.scrollHeight, innerHeight);
    layer.style.height = H + 'px';
  }
  function build(){
    var fa = SM.lang === 'fa', n = innerWidth < 700 ? 4 : ROWS.length;
    size(); layer.innerHTML = ''; chars = [];
    ROWS.slice(0, n).forEach(function(r, i){
      var el = document.createElement('div');
      el.className = 'pl c-' + r.c + ' st-walk';
      el.innerHTML = '<p class="pl-cloud">' + e(fa ? r.fa : r.en) + '<i></i></p>' +
        '<div class="pl-fig"><i class="lm ar a1"></i><i class="lm lg g1"></i><span class="pl-body">' + CH[r.c] + '</span><i class="lm lg g2"></i><i class="lm ar a2"></i></div>';
      layer.appendChild(el);
      var home = Math.max(520, (i + .6) / n * (H - 400));
      chars.push({ el: el, fig: el.querySelector('.pl-fig'), x: (i * 173) % Math.max(60, W - 80), y: home, home: home, tx: 0, ty: home, mode: 'walk', until: 0, dir: 1, talkAt: 2000 + i * 900, mi: i });
    });
  }
  build(); SM.onLang(build);
  if (RM){ chars.forEach(function(c){ c.el.classList.add('still'); c.el.style.transform = 'translate3d(' + c.x + 'px,' + c.y + 'px,0)'; }); return; }
  addEventListener('resize', build);
  addEventListener('load', size);
  setInterval(size, 4000);
  var last = performance.now();
  function pick(c, t){
    c.tx = 10 + Math.random() * Math.max(40, W - 80);
    c.ty = Math.min(H - 80, Math.max(300, c.home + (Math.random() - .5) * 360));
    c.mode = 'walk'; c.el.classList.remove('st-jack', 'st-squat', 'st-lift', 'st-stretch'); c.el.classList.add('st-walk');
  }
  chars.forEach(function(c){ pick(c, 0); });
  function frame(t){
    var dt = Math.min(.05, (t - last) / 1000); last = t;
    chars.forEach(function(c, i){
      if (c.mode === 'walk'){
        var dx = c.tx - c.x, dy = c.ty - c.y, d = Math.hypot(dx, dy), sp = 46 + (i % 4) * 14;
        if (d < 6){
          c.mode = 'play'; c.until = t + 3200 + Math.random() * 2600; c.mi = (c.mi + 1) % MOVES.length;
          c.el.classList.remove('st-walk'); c.el.classList.add(MOVES[c.mi]);
        } else {
          c.x += dx / d * sp * dt; c.y += dy / d * sp * .5 * dt;
          if (Math.abs(dx) > 3) c.fig.style.transform = 'scaleX(' + (dx < 0 ? -1 : 1) + ')';
        }
      } else if (t > c.until) pick(c, t);
      if (t > c.talkAt && c.mode === 'play'){
        c.talkAt = t + 9000 + Math.random() * 6000;
        c.el.classList.add('talk'); (function(el){ setTimeout(function(){ el.classList.remove('talk'); }, 3400); })(c.el);
      }
      c.el.style.transform = 'translate3d(' + c.x.toFixed(1) + 'px,' + c.y.toFixed(1) + 'px,0)';
    });
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
