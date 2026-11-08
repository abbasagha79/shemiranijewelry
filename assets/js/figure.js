/* SHEMIRANI — action-figure pages, drawn from assets/js/designs.js (SHEMIRANI_FIGURES).
     <body data-figures>        the Action Figure collection page
     <body data-figure="id">    one figure: 3D viewer, colour combos, size slider, weights
   Weights are volume x density at the chosen size; the figure can be made larger or smaller. */
(function(){
  'use strict';
  var SM = window.SM, e = SM.esc, u = SM.url;
  var FIGS = window.SHEMIRANI_FIGURES || [], MATS = window.SHEMIRANI_FIGURE_MATERIALS || [], COMBOS = window.SHEMIRANI_FIGURE_COMBOS || [];
  var main = document.getElementById('figure-main');
  var fa = function(){ return SM.lang === 'fa'; };
  var WALL = 1.5;   /* mm, wall of the hollow versions */

  function num(n, d){
    try { return new Intl.NumberFormat(fa() ? 'fa-IR' : 'en-US', { maximumFractionDigits: d == null ? 0 : d, minimumFractionDigits: 0 }).format(n); }
    catch(x){ return String(Math.round(n * 100) / 100); }
  }
  function grams(g){
    if (g >= 1000) return num(g / 1000, 2) + (fa() ? ' کیلوگرم' : ' kg');
    return num(g, g < 100 ? 1 : 0) + (fa() ? ' گرم' : ' g');
  }
  function mm(v){ return num(v, v < 100 ? 1 : 0) + (fa() ? ' میلی‌متر' : ' mm'); }
  var arrow = '<svg class="arrow-i" viewBox="0 0 24 24"><path d="M4 12h16m-6-6 6 6-6 6"/></svg>';
  var tg = '<svg viewBox="0 0 24 24"><path d="M21.5 3.5 2.5 10.8l6.1 2.1 2.2 6.6 3-4 4.8 3.5z"/><path d="M8.6 12.9 21.5 3.5"/></svg>';

  /* ------------------------------------------------------------ collection page */
  if (document.body.hasAttribute('data-figures')){
    main.innerHTML = '<div class="page-in"><div data-head></div><div class="fig-grid" data-grid></div><nav class="sibs" data-sibs></nav></div>';
    var head = main.querySelector('[data-head]'), grid = main.querySelector('[data-grid]');
    SM.onLang(function(){
      document.title = fa() ? 'اکشن فیگور | SHEMIRANI' : 'Action Figure | SHEMIRANI — Figures designed in 3D';
      head.innerHTML =
        '<nav class="crumbs" aria-label="Breadcrumb"><a href="' + u('index.html') + '">' + (fa() ? 'خانه' : 'Home') + '</a><i></i><span>' + (fa() ? 'اکشن فیگور' : 'Action Figure') + '</span></nav>' +
        '<h1>' + (fa() ? 'اکشن فیگور' : 'Action Figure') + '</h1>' +
        '<p class="lead">' + (fa()
          ? 'فیگورهای طراحی‌شده‌ی شمیرانی، آماده‌ی چاپ سه‌بعدی و ریخته‌گری. هر فیگور را به هر اندازه‌ای بزرگ‌تر یا کوچک‌تر می‌شود ساخت، با ترکیب رنگ دلخواه، و وزنش در هر متریال از رزین و فیلامنت تا طلا روی صفحه آمده است.'
          : 'Figures designed by SHEMIRANI, ready for 3D printing and casting. Every figure can be made larger or smaller, in any colour combo, and its weight in each material — from resin and filament to gold — is on its page.') + '</p>';
      grid.innerHTML = FIGS.map(function(f){
        return '<a class="fig-card" href="' + u('figures/' + f.id + '/index.html') + '"><span class="fig-img"><img src="' + u(f.cover) + '" alt="' + e(f.name) + '" loading="lazy"></span>' +
          '<span class="fig-nm"><b>' + e(f.name) + '</b><small>' + e(SM.t(f.line)) + '</small></span></a>';
      }).join('');
      main.querySelector('[data-sibs]').innerHTML = '<a class="on" href="' + u('collections/action-figures/index.html') + '" aria-current="page">' + (fa() ? 'همه‌ی فیگورها' : 'All figures') + '</a>';
    });
    SM.start();
    return;
  }

  /* ------------------------------------------------------------ one figure */
  var id = document.body.getAttribute('data-figure');
  var F = FIGS.filter(function(f){ return f.id === id; })[0];
  if (!F){ main.innerHTML = '<div class="page-in"><p class="lead">This figure was not found.</p></div>'; SM.start(); return; }

  var qs = new URLSearchParams(location.search);
  var combo = COMBOS.filter(function(c){ return c.id === qs.get('combo'); })[0] || COMBOS[0];
  var scale = Math.max(.05, Math.min(10, (parseFloat(qs.get('s')) || 100) / 100));

  main.innerHTML =
    '<div class="page-in">' +
      '<nav class="crumbs" aria-label="Breadcrumb"><a href="' + u('index.html') + '" data-fa="خانه">Home</a><i></i>' +
        '<a href="' + u('collections/action-figures/index.html') + '" data-fa="اکشن فیگور">Action Figure</a><i></i><span>' + e(F.name) + '</span></nav>' +
      '<div class="dgrid2">' +
        '<div class="viewer">' +
          '<div class="vstage" data-mode="model"><div class="vstage-in">' +
            '<img class="vposter" src="' + u(F.cover) + '" alt="">' +
            '<canvas aria-label="' + e(F.name) + ' in 3D"></canvas>' +
            '<img class="vimg" alt="">' +
            '<div class="vhint" data-fa="برای چرخاندن بکشید">Drag to turn</div>' +
          '</div></div>' +
          '<div class="vtabs" role="tablist">' +
            '<button type="button" class="on" data-mode="model" aria-label="3D">3D</button>' +
            F.photos.map(function(p, i){ return '<button type="button" data-mode="photo" data-src="' + u(p) + '" aria-label="View ' + (i + 1) + '"><img src="' + u(p) + '" alt="" loading="lazy"></button>'; }).join('') +
          '</div>' +
          '<div class="combos" role="group" aria-label="Colour combos">' +
            '<div class="combos-h" data-fa="ترکیب‌های رنگی">Colour combos</div>' +
            '<div class="combos-l">' + COMBOS.map(function(c){
              return '<button type="button" class="combo" data-id="' + c.id + '" data-l-en="' + e(c.en) + '" data-l-fa="' + e(c.fa) + '" aria-pressed="false">' +
                '<i style="background:linear-gradient(135deg,' + c.stops[0] + ',' + c.stops[1] + ' 55%,' + c.stops[2] + ')"></i><span></span></button>';
            }).join('') + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="dinfo">' +
          '<div class="kind" data-kind></div>' +
          '<h1>' + e(F.name) + '</h1>' +
          '<p class="lead" data-desc></p>' +
          '<div class="spec fig-size"><div class="spec-in">' +
            '<h2 data-fa="اندازه">Size</h2>' +
            '<p class="fig-note" data-sizenote></p>' +
            '<div class="sizer"><input type="range" min="10" max="500" step="5" aria-label="Size" data-range><output data-pct></output></div>' +
            '<div class="sizer-row"><label><span data-fa="ارتفاع (میلی‌متر)">Height (mm)</span><input type="number" min="3" max="2000" step="1" inputmode="decimal" data-height></label>' +
              '<div class="presets">' + [50, 100, 150, 200, 300].map(function(p){ return '<button type="button" data-s="' + p + '">' + p + '%</button>'; }).join('') + '</div></div>' +
            '<ul data-dims></ul>' +
          '</div></div>' +
          '<div data-specs></div>' +
          '<p class="specnote" data-note></p>' +
          '<div class="dactions">' +
            '<a class="cta2 gold" href="https://t.me/abbasamrahbari" target="_blank" rel="noopener">' + tg + '<span data-fa="درخواست و پرسش در تلگرام">Inquire on Telegram</span></a>' +
            '<a class="cta2 ghost" href="' + u('collections/action-figures/index.html') + '"><span data-fa="همه‌ی فیگورها">All figures</span>' + arrow + '</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<section class="details" aria-labelledby="dh">' +
        '<h2 id="dh" data-fa="نماها و رنگ‌ها">Views and colours</h2><p data-fa="برای دیدن بزرگ‌تر روی هر عکس بزنید.">Tap any photo to see it larger.</p>' +
        '<div class="pgrid">' + F.photos.map(function(p, i){ return '<button type="button" data-full="' + u(p) + '" aria-label="Open view ' + (i + 1) + '"><img src="' + u(p) + '" alt="' + e(F.name) + ', view ' + (i + 1) + '" loading="lazy"></button>'; }).join('') + '</div>' +
      '</section>' +
    '</div>' +
    '<div class="lightbox" role="dialog" aria-modal="true" aria-label="Photo"><img alt=""><button type="button" aria-label="Close">×</button></div>';

  var range = main.querySelector('[data-range]'), height = main.querySelector('[data-height]'), pct = main.querySelector('[data-pct]');

  /* everything that depends on the size or the language */
  function refresh(){
    var s = scale, vol = F.volume * s * s * s, surf = F.surface * s * s;              /* cm3, cm2 */
    var pc = Math.round(s * 100);
    pct.textContent = num(pc) + '%';
    if (document.activeElement !== range) range.value = Math.max(10, Math.min(500, pc));
    if (document.activeElement !== height) height.value = Math.round(F.size.h * s * 10) / 10;
    [].forEach.call(main.querySelectorAll('.presets button'), function(b){ b.classList.toggle('on', +b.getAttribute('data-s') === pc); });
    main.querySelector('[data-dims]').innerHTML = [
      [fa() ? 'عرض' : 'Width', mm(F.size.w * s)], [fa() ? 'عمق' : 'Depth', mm(F.size.d * s)], [fa() ? 'ارتفاع' : 'Height', mm(F.size.h * s)],
      [fa() ? 'حجم' : 'Volume', num(vol, vol < 100 ? 1 : 0) + (fa() ? ' سانتی‌متر مکعب' : ' cm³')]
    ].map(function(r){ return '<li>' + e(r[0]) + ': ' + e(r[1]) + '</li>'; }).join('');
    /* weights: solid = volume x density; hollow = thin shell (surface x wall) x density, never above solid */
    var shell = Math.min(vol, surf * (WALL / 10));
    main.querySelector('[data-specs]').innerHTML = MATS.map(function(g){
      return '<div class="spec"><div class="spec-in"><h2>' + e(SM.t(g.title)) + '</h2><ul>' + g.items.map(function(it){
        var solid = vol * it.d, hollow = shell * it.d;
        return '<li>' + e(SM.t(it)) + ': <b>' + e(grams(solid)) + '</b> ' + (fa() ? '(توپر)' : 'solid') + ' · <b>' + e(grams(hollow)) + '</b> ' + (fa() ? '(توخالی)' : 'hollow') + '</li>';
      }).join('') + '</ul></div></div>';
    }).join('');
    [].forEach.call(main.querySelectorAll('.spec'), function(sp){ SM.beam(sp, { reveal: 'hover', length: 18, thickness: 1, speed: 4 }); });
    if (viewer && viewer.sized) viewer.sized(s);
  }
  var viewer = null;

  SM.onLang(function(){
    main.querySelector('[data-kind]').textContent = SM.t(F.kind);
    main.querySelector('[data-desc]').textContent = SM.t(F.description);
    main.querySelector('[data-sizenote]').textContent = fa()
      ? 'ابعاد کار کاملاً قابل تغییر است؛ فیگور را می‌شود هم بزرگ‌تر و هم کوچک‌تر ساخت. اسلایدر یا ارتفاع دلخواه را وارد کنید تا اندازه و وزن‌ها همین‌جا به‌روز شوند.'
      : 'The size is fully adjustable — the figure can be made both larger and smaller. Move the slider or type a height and the dimensions and weights below update.';
    main.querySelector('[data-note]').textContent = fa()
      ? 'وزن‌ها تقریبی‌اند و از حجم مدل × چگالی متریال حساب شده‌اند. «توپر» یعنی پر؛ «توخالی» یعنی پوسته‌ی ' + num(WALL, 1) + ' میلی‌متری. با دو برابر شدن اندازه، وزن ۸ برابر می‌شود. اندازه‌ی اصلی فایل بر پایه‌ی میلی‌متر است.'
      : 'Weights are estimates: model volume × material density. “Solid” is fully filled; “hollow” is a ' + WALL + ' mm shell. Doubling the size multiplies the weight by 8. The file’s own size is taken as millimetres.';
    [].forEach.call(main.querySelectorAll('.combo'), function(b){
      b.querySelector('span').textContent = b.getAttribute(fa() ? 'data-l-fa' : 'data-l-en');
    });
    refresh();
  });

  /* size controls */
  function setScale(s){ scale = Math.max(.05, Math.min(10, s)); refresh(); }
  range.addEventListener('input', function(){ setScale(+range.value / 100); });
  height.addEventListener('input', function(){ var h = parseFloat(height.value); if (h > 0) setScale(h / F.size.h); });
  height.addEventListener('blur', refresh); range.addEventListener('change', refresh);
  [].forEach.call(main.querySelectorAll('.presets button'), function(b){ b.addEventListener('click', function(){ setScale(+b.getAttribute('data-s') / 100); }); });

  /* viewer */
  var stage = main.querySelector('.vstage'), stageIn = main.querySelector('.vstage-in');
  SM.beam(stage, { length: 16, thickness: 1.5, speed: 9 });
  var img = stage.querySelector('.vimg');
  viewer = window.ShemiraniFigure(stage.querySelector('canvas'), { url: u('assets/models/' + F.model + '.bin'), host: stageIn, rot: F.rot, combo: combo });

  function pick(c, quiet){
    combo = c; viewer.setCombo && viewer.setCombo(c);
    [].forEach.call(main.querySelectorAll('.combo'), function(b){ b.setAttribute('aria-pressed', String(b.getAttribute('data-id') === c.id)); });
    if (!quiet) try { var q = new URLSearchParams(location.search); q.set('combo', c.id); history.replaceState(null, '', location.pathname + '?' + q.toString()); } catch(x){}
  }
  [].forEach.call(main.querySelectorAll('.combo'), function(b){
    b.addEventListener('click', function(){
      var c = COMBOS.filter(function(x){ return x.id === b.getAttribute('data-id'); })[0];
      pick(c);
      /* if a photo is showing, go back to the live 3D so the change is visible */
      var t = main.querySelector('.vtabs button[data-mode=model]'); if (t && !t.classList.contains('on')) t.click();
    });
  });
  pick(combo, true);

  var tabs = [].slice.call(main.querySelectorAll('.vtabs button'));
  tabs.forEach(function(b){
    b.addEventListener('click', function(){
      tabs.forEach(function(x){ x.classList.remove('on'); }); b.classList.add('on');
      var m = b.getAttribute('data-mode'); stage.setAttribute('data-mode', m);
      viewer.paused = m !== 'model';
      if (m === 'photo') img.src = b.getAttribute('data-src');
    });
  });

  /* lightbox */
  var lb = main.querySelector('.lightbox'), lbi = lb.querySelector('img'), lastFocus;
  function close(){ lb.classList.remove('on'); if (lastFocus) lastFocus.focus(); }
  [].forEach.call(main.querySelectorAll('.pgrid button'), function(b){
    b.addEventListener('click', function(){ lastFocus = b; lbi.src = b.getAttribute('data-full'); lb.classList.add('on'); lb.querySelector('button').focus(); });
  });
  lb.addEventListener('click', function(ev){ if (ev.target !== lbi) close(); });
  document.addEventListener('keydown', function(ev){ if (ev.key === 'Escape' && lb.classList.contains('on')) close(); });

  document.title = F.name + ' — Action Figure | SHEMIRANI';
  SM.start();
})();
