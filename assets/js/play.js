/* SHEMIRANI — mischievous jewels. Seven little white characters misbehave in their own way
   and say one short thing from a thought cloud above their heads. Renders into <section data-play>. */
(function(){
  'use strict';
  var host = document.querySelector('[data-play]');
  if (!host || !window.SM) return;
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
  var FLY = ['diamond', 'ring', 'pearl', 'heart', 'gold', 'diamond', 'necklace', 'ring', 'heart', 'bracelet', 'pearl', 'gold'];
  function build(){
    var fa = SM.lang === 'fa';
    host.className = 'play';
    host.innerHTML =
      '<div class="play-fly" aria-hidden="true">' + FLY.map(function(k, i){
        return '<span class="pf" style="--x:' + ((i * 83 + 7) % 100) + '%;--d:' + (9 + (i * 5) % 8) + 's;--o:-' + ((i * 3.7) % 12).toFixed(1) + 's;--s:' + (22 + (i * 11) % 22) + 'px;--r:' + ((i * 37) % 50 - 25) + 'deg">' + CH[k].replace(/<g class="face".*<\/g>(?=<\/svg>)/, '') + '</span>';
      }).join('') + '</div>' +
      '<div class="play-wrap">' + ROWS.map(function(r, i){
        return '<div class="pc c-' + r.c + '" style="--i:' + i + '"><p class="pc-cloud">' + e(fa ? r.fa : r.en) + '<i></i><i></i></p><span class="pc-body">' + CH[r.c] + '</span></div>';
      }).join('') + '</div>';
    var cells = host.querySelectorAll('.pc');
    if (RM || !('IntersectionObserver' in window)){ [].forEach.call(cells, function(r){ r.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function(es){ es.forEach(function(en){ if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } }); }, { threshold: .3 });
    [].forEach.call(cells, function(r){ io.observe(r); });
  }
  build(); SM.onLang(build);
})();
