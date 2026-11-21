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
  var ACT = ['a-squat', 'a-jump', 'a-push', 'a-spin', 'a-stretch', 'a-lift'];
  var layer = document.createElement('div');
  layer.className = 'play-layer'; layer.setAttribute('aria-hidden', 'true');
  document.body.appendChild(layer);
  var chars = [];
  function build(){
    var fa = SM.lang === 'fa', n = innerWidth < 700 ? 4 : ROWS.length;
    layer.innerHTML = ''; chars = [];
    ROWS.slice(0, n).forEach(function(r, i){
      var el = document.createElement('div');
      el.className = 'pl c-' + r.c + ' ' + ACT[i % ACT.length];
      el.innerHTML = '<p class="pl-cloud">' + e(fa ? r.fa : r.en) + '<i></i></p><span class="pl-body">' + CH[r.c] + '</span>';
      layer.appendChild(el);
      chars.push({ el: el, x: (i * 137 + 9) % 86 + 4, ph: i * 211, sp: .22 + (i % 4) * .09, say: 1500 + i * 1300, act: i % ACT.length });
    });
  }
  build(); SM.onLang(build);
  if (RM){ return; }
  var vy = 0, lastY = scrollY, lastT = performance.now(), idle = 0, fast = false;
  function frame(t){
    var vh = innerHeight, vw = innerWidth, y = scrollY;
    vy = vy * .88 + (y - lastY) * .12; lastY = y;
    var f = Math.abs(vy) > 14;
    if (f !== fast){ fast = f; layer.classList.toggle('fast', f); }
    chars.forEach(function(c, i){
      var span = vh + 160;
      var py = (((c.ph + y * c.sp + t * .006 * (1 + i % 3)) % span) + span) % span - 80;
      var px = c.x / 100 * (vw - 70) + Math.sin(t / 1600 + i * 1.7) * 26;
      c.el.style.transform = 'translate3d(' + px.toFixed(1) + 'px,' + py.toFixed(1) + 'px,0)';
      if (t > c.say){
        c.say = t + 7000 + (i * 977) % 5000;
        if (py > 70 && py < vh - 90 && !fast){
          c.el.classList.add('talk'); setTimeout(function(){ c.el.classList.remove('talk'); }, 3200);
        }
        c.act = (c.act + 1) % ACT.length;
        c.el.className = c.el.className.replace(/a-\w+/, ACT[c.act]);
      }
    });
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
