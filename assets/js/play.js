/* SHEMIRANI — white sticker rows. Jewellery stickers float up and down; each row pops open
   when it scrolls in and speaks through a small bubble. Renders into <section data-play>. */
(function(){
  'use strict';
  var host = document.querySelector('[data-play]');
  if (!host || !window.SM) return;
  var SM = window.SM, e = SM.esc, RM = SM.RM;
  var S = {
    ring: '<svg viewBox="0 0 64 64"><ellipse cx="32" cy="42" rx="15" ry="14"/><ellipse cx="32" cy="42" rx="10.5" ry="9.5"/><path d="M24 24l5-7h6l5 7-8 9z"/><path d="M24 24h16M29 17l3 7 3-7M32 33V24"/><path class="sp" d="M50 12v8M46 16h8M12 20v6M9 23h6"/></svg>',
    necklace: '<svg viewBox="0 0 64 64"><path d="M8 12c2 24 12 34 24 34s22-10 24-34"/><path d="M12 12c2 20 10 28 20 28s18-8 20-28" stroke-dasharray="1 4"/><path d="M32 46l-5 6 5 8 5-8z"/><path d="M27 52h10M32 46v14"/><path class="sp" d="M52 38v7M48.5 41.5h7M10 40v5M7.5 42.5h5"/></svg>',
    bracelet: '<svg viewBox="0 0 64 64"><ellipse cx="32" cy="34" rx="24" ry="12"/><ellipse cx="32" cy="34" rx="19" ry="8"/><path d="M12 28l3-5 3 5-3 4zM29 22l3-5 3 5-3 4zM46 28l3-5 3 5-3 4z"/><path class="sp" d="M52 10v7M48.5 13.5h7M12 10v5M9.5 12.5h5"/></svg>',
    gem: '<svg viewBox="0 0 64 64"><path d="M18 14h28l10 14-24 28L8 28z"/><path d="M8 28h48M24 14l-6 14 14 28 14-28-6-14M24 14l8 14 8-14"/><path class="sp" d="M54 8v7M50.5 11.5h7M8 46v6M5 49h6"/></svg>',
    earring: '<svg viewBox="0 0 64 64"><circle cx="20" cy="14" r="4"/><path d="M20 18v8"/><path d="M20 26l-7 10 7 14 7-14z"/><circle cx="44" cy="14" r="4"/><path d="M44 18v8"/><path d="M44 26l-7 10 7 14 7-14z"/><path class="sp" d="M32 6v6M29 9h6"/></svg>'
  };
  var ROWS = [
    { s: 'ring', en: 'Diamonds are forever. Excuses to buy one are too.', fa: 'الماس تا ابد می‌مونه؛ بهونه‌ی خریدش هم!' },
    { s: 'necklace', en: 'Gold never goes out of style. Unlike last year’s haircut.', fa: 'طلا هیچ‌وقت از مد نمی‌افته؛ برخلاف مدل موی پارسالت!' },
    { s: 'bracelet', en: 'Tiny stones. Big opinions.', fa: 'سنگ ریز، حرف درشت!' },
    { s: 'earring', en: 'Drawn in 3D, worn in real life. Mostly.', fa: 'توی سه‌بعدی طراحی می‌شه، توی زندگی واقعی می‌درخشه.' },
    { s: 'gem', en: 'Your next favourite thing is a sketch away.', fa: 'چیز مورد علاقه‌ی بعدیت فقط یک طرح فاصله داره.' }
  ];
  var FLY = ['ring', 'necklace', 'bracelet', 'gem', 'earring', 'ring', 'gem', 'bracelet', 'earring', 'necklace', 'gem', 'ring'];
  function build(){
    var fa = SM.lang === 'fa';
    host.className = 'play';
    host.innerHTML =
      '<div class="play-fly" aria-hidden="true">' + FLY.map(function(k, i){
        return '<span class="pf" style="--x:' + ((i * 83 + 7) % 100) + '%;--d:' + (9 + (i * 5) % 8) + 's;--o:-' + ((i * 3.7) % 12).toFixed(1) + 's;--s:' + (22 + (i * 11) % 22) + 'px;--r:' + ((i * 37) % 50 - 25) + 'deg">' + S[k] + '</span>';
      }).join('') + '</div>' +
      '<div class="play-wrap">' + ROWS.map(function(r, i){
        return '<div class="play-row ' + (i % 2 ? 'alt' : '') + '" style="--i:' + i + '"><span class="play-st">' + S[r.s] + '</span><p class="play-bub">' + e(fa ? r.fa : r.en) + '</p></div>';
      }).join('') + '</div>';
    var rows = host.querySelectorAll('.play-row');
    if (RM || !('IntersectionObserver' in window)){ [].forEach.call(rows, function(r){ r.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function(es){ es.forEach(function(en){ if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } }); }, { threshold: .35 });
    [].forEach.call(rows, function(r){ io.observe(r); });
  }
  build(); SM.onLang(build);
})();
