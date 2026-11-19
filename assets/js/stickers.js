/* SHEMIRANI — sticker strip (white die-cut jewellery stickers + a talking bubble).
   Renders into <section data-stickers>. Stickers unfold in a row when they scroll into view,
   then keep bobbing; the bubble swaps its line every few seconds. */
(function(){
  'use strict';
  var host = document.querySelector('[data-stickers]');
  if (!host || !window.SM) return;
  var SM = window.SM, e = SM.esc;
  var fa = function(){ return SM.lang === 'fa'; };
  /* each sticker: a white die-cut underlay (same shapes, fat white stroke) + the inked drawing */
  var S = [
    { en: 'Ring', fa: 'انگشتر', d: '<ellipse cx="50" cy="66" rx="22" ry="19"/><ellipse cx="50" cy="66" rx="14" ry="11"/>',
      g: '<path class="dia" d="M36 34l6-10h16l6 10-14 17z"/><path class="ink" d="M36 34h28M42 24l8 27M58 24l-8 27"/>' },
    { en: 'Necklace', fa: 'گردنبند', d: '<path d="M14 22c2 30 18 48 36 48s34-18 36-48"/><path d="M50 70l-9 11 9 12 9-12z"/>',
      g: '<path class="ink" d="M14 22c2 30 18 48 36 48s34-18 36-48"/><path class="dia" d="M50 70l-9 11 9 12 9-12z"/>' },
    { en: 'Bangle', fa: 'النگو', d: '<ellipse cx="50" cy="52" rx="34" ry="26"/>',
      g: '<ellipse class="gld" cx="50" cy="52" rx="34" ry="26"/><ellipse class="ink" cx="50" cy="52" rx="24" ry="17"/><circle class="dia" cx="50" cy="26" r="5"/>' },
    { en: 'Earrings', fa: 'گوشواره', d: '<circle cx="30" cy="22" r="6"/><path d="M30 28v16"/><path d="M30 44l-9 13 9 13 9-13z"/><circle cx="70" cy="22" r="6"/><path d="M70 28v16"/><path d="M70 44l-9 13 9 13 9-13z"/>',
      g: '<circle class="gld" cx="30" cy="22" r="5"/><path class="ink" d="M30 27v17"/><path class="dia" d="M30 44l-9 13 9 13 9-13z"/><circle class="gld" cx="70" cy="22" r="5"/><path class="ink" d="M70 27v17"/><path class="dia" d="M70 44l-9 13 9 13 9-13z"/>' },
    { en: 'Diamond', fa: 'الماس', d: '<path d="M26 30h48l16 20-40 40L10 50z"/>',
      g: '<path class="dia" d="M26 30h48l16 20-40 40L10 50z"/><path class="ink" d="M10 50h80M38 30l-8 20 20 40M62 30l8 20-20 40M38 30l12 20 12-20"/>' },
    { en: 'Pendant', fa: 'آویز', d: '<circle cx="50" cy="20" r="10"/><path d="M50 30v10"/><path d="M50 40c-16 8-22 22-12 34 6 7 18 7 24 0 10-12 4-26-12-34z"/>',
      g: '<circle class="ink" cx="50" cy="20" r="9"/><path class="ink" d="M50 29v11"/><path class="gld" d="M50 40c-16 8-22 22-12 34 6 7 18 7 24 0 10-12 4-26-12-34z"/><circle class="dia" cx="50" cy="60" r="6"/>' }
  ];
  var LINES = {
    en: ['18K? We call it "politely shiny".', 'Gold prices go up. Our taste never goes down.', 'Looking for gold, or falling in love? Both.', 'One tiny diamond, one very big mood.', 'Warning: may cause compliments.'],
    fa: ['عیارش ۱۸ است، ولی ناز و ادایش ۲۴!', 'قیمت طلا بالا و پایین می‌شود، سلیقه‌ی ما همیشه بالاست.', 'طلا می‌خواهی یا عاشق می‌شوی؟ هر دو!', 'یک نگین کوچک، یک دنیا ذوق.', 'هشدار: ممکن است باعث تعریف و تمجید شود.']
  };
  var SPARK = '<svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor" aria-hidden="true"><path d="M12 0c1 7 5 11 12 12-7 1-11 5-12 12-1-7-5-11-12-12 7-1 11-5 12-12z"/></svg>';
  var li = 0, timer = 0;
  function build(){
    host.className = 'stk-sec' + (host.classList.contains('on') ? ' on' : '');
    var sp = [[8, 20, 18, 0], [90, 14, 14, .8], [18, 78, 12, 1.5], [84, 70, 20, .4], [50, 8, 12, 2.1]];
    host.innerHTML =
      sp.map(function(s){ return '<i class="stk-sp" style="left:' + s[0] + '%;top:' + s[1] + '%;width:' + s[2] + 'px;height:' + s[2] + 'px;--d:' + s[3] + '">' + SPARK + '</i>'; }).join('') +
      '<div class="stk-say"><div class="stk-bubble" aria-live="polite"><span data-line>' + e(LINES[fa() ? 'fa' : 'en'][li % 5]) + '</span></div></div>' +
      '<div class="stk-row">' + S.map(function(s, i){
        return '<div class="stk" style="--i:' + i + '"><div class="stk-in"><svg viewBox="0 0 100 100" aria-hidden="true"><g class="die">' + s.d + '</g>' + s.g + '</svg></div>' +
          '<span class="stk-tag">' + e(fa() ? s.fa : s.en) + '</span></div>';
      }).join('') + '</div>';
  }
  function rotate(){
    var el = host.querySelector('[data-line]'); if (!el) return;
    el.classList.add('out');
    setTimeout(function(){ li++; el.textContent = LINES[fa() ? 'fa' : 'en'][li % 5]; el.classList.remove('out'); }, 360);
  }
  build(); SM.onLang(build);
  if (!SM.RM) timer = setInterval(rotate, 4200);
  if ('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(es){ es.forEach(function(x){ host.classList.toggle('on', x.isIntersecting); }); }, { threshold: .25 });
    io.observe(host);
  } else host.classList.add('on');
})();
