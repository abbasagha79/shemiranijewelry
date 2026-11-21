/* SHEMIRANI — a design's full page, drawn from assets/js/designs.js.
   The page shell sets <body data-design="id">. */
(function(){
  'use strict';
  var SM = window.SM;
  var id = document.body.getAttribute('data-design'), D = SM.design(id);
  var main = document.getElementById('design');
  if (!D){ main.innerHTML = '<div class="page-in"><p class="lead">This design was not found.</p></div>'; SM.start(); return; }
  var C = SM.collections.filter(function(c){ return c.id === D.collection; })[0] || SM.collections[0];
  var u = SM.url, e = SM.esc;
  var NOUN = { rings: 'Ring', earrings: 'Earrings', bracelets: 'Bracelet', bangles: 'Bangle', necklaces: 'Necklace', pendants: 'Pendant', sets: 'Set' };
  document.title = D.name + ' \u2014 18K Gold & Diamond ' + (NOUN[D.collection] || 'Jewel') + ' | SHEMIRANI';

  var arrow = '<svg class="arrow-i" viewBox="0 0 24 24"><path d="M4 12h16m-6-6 6 6-6 6"/></svg>';
  var tg = '<svg viewBox="0 0 24 24"><path d="M21.5 3.5 2.5 10.8l6.1 2.1 2.2 6.6 3-4 4.8 3.5z"/><path d="M8.6 12.9 21.5 3.5"/></svg>';

  main.innerHTML =
    '<div class="page-in">' +
      '<nav class="crumbs" aria-label="Breadcrumb"><a href="' + u('index.html') + '" data-fa="خانه">Home</a><i></i>' +
        '<a href="' + u('collections/' + C.id + '/index.html') + '" data-fa="' + e(C.fa) + '">' + e(C.en) + '</a><i></i><span>' + e(D.name) + '</span></nav>' +
      '<div class="dgrid2">' +
        '<div class="viewer">' +
          '<div class="vstage" data-mode="model"><div class="vstage-in">' +
            '<img class="vposter" src="' + u(D.cover) + '" alt="">' +
            '<canvas aria-label="' + e(D.name) + ' in 3D"></canvas>' +
            (D.film ? '<video muted loop playsinline preload="none" poster="' + u(D.poster) + '"></video>' : '') +
            '<img class="vimg" alt="">' +
            '<div class="vhint" data-fa="برای چرخاندن بکشید">Drag to turn</div>' +
          '</div></div>' +
          '<div class="vtabs" role="tablist">' +
            '<button type="button" class="on" data-mode="model" aria-label="3D">3D</button>' +
            (D.film ? '<button type="button" data-mode="film" aria-label="360° film"><img src="' + u(D.poster) + '" alt=""><i class="play"><svg viewBox="0 0 24 24"><path d="M7 4v16l13-8z"/></svg></i></button>' : '') +
            D.photos.map(function(p, i){ return '<button type="button" data-mode="photo" data-src="' + u(p) + '" aria-label="View ' + (i + 1) + '"><img src="' + u(p) + '" alt="" loading="lazy"></button>'; }).join('') +
          '</div>' +
        '</div>' +
        '<div class="dinfo">' +
          '<div class="kind" data-kind></div>' +
          '<h1>' + e(D.name) + '</h1>' +
          '<p class="lead" data-desc></p>' +
          '<div data-specs></div>' +
          '<p class="specnote" data-note></p>' +
          '<div class="dactions">' +
            '<a class="cta2 gold" href="https://t.me/abbasamrahbari" target="_blank" rel="noopener">' + tg + '<span data-fa="درخواست و پرسش در تلگرام">Inquire on Telegram</span></a>' +
            '<a class="cta2 ghost" href="' + u('collections/' + C.id + '/index.html') + '"><span data-fa="همه‌ی ' + e(C.fa) + '‌ها">All ' + e(C.en.toLowerCase()) + '</span>' + arrow + '</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<section class="details" aria-labelledby="dh">' +
        '<h2 id="dh" data-fa="جزئیات کار">Detail views</h2><p data-fa="برای دیدن بزرگ‌تر روی هر عکس بزنید.">Tap any photo to see it larger.</p>' +
        '<div class="pgrid">' + D.photos.map(function(p, i){ return '<button type="button" data-full="' + u(p) + '" aria-label="Open view ' + (i + 1) + '"><img src="' + u(p) + '" alt="' + e(D.name) + ', view ' + (i + 1) + '" loading="lazy"></button>'; }).join('') + '</div>' +
      '</section>' +
    '</div>' +
    '<div class="lightbox" role="dialog" aria-modal="true" aria-label="Photo"><img alt=""><button type="button" aria-label="Close">×</button></div>';

  var SALES = { price: 20, total: 1000, sold: {} };
  /* language-dependent parts */
  SM.onLang(function(){
    main.querySelector('[data-kind]').textContent = SM.t(D.kind);
    main.querySelector('[data-desc]').textContent = SM.t(D.description);
    main.querySelector('[data-note]').textContent = SM.t(D.note);
    renderSpecs();
  });
  function renderSpecs(){
    var fa = SM.lang === 'fa', box = main.querySelector('[data-specs]'), sold = Math.max(0, Math.min(SALES.total, +SALES.sold[D.id] || 0)), left = SALES.total - sold, pct = Math.round(left / SALES.total * 100);
    function num(s){ var m = /([\d.]+)\s*g\b/.exec(s); return m ? parseFloat(m[1]) : 0; }
    function fmt(n){ return n.toLocaleString(fa ? 'fa-IR' : 'en-US'); }
    var icons = { 0: '<path d="M4 18h16l-2-9H6zM9 9V6h6v3"/>', 1: '<path d="M6 4h12l4 6-10 11L2 10z"/><path d="M2 10h20"/>', 2: '<path d="M3 17L17 3l4 4L7 21zM8 12l2 2M11 9l2 2M14 6l2 2"/>', 3: '<path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z"/>' };
    var cards = D.specs.map(function(g, gi){
      var rows = g.items.map(function(it){ return SM.t(it); });
      var maxG = Math.max.apply(null, rows.map(num).concat([0.0001])), isMetal = gi === 0 && maxG > 0.001;
      var body = rows.map(function(r){
        var k = r.indexOf(':'), lab = k > 0 ? r.slice(0, k) : '', val = k > 0 ? r.slice(k + 1).trim() : r;
        var bar = isMetal && num(r) ? '<i class="bar"><b style="--w:' + Math.max(6, Math.round(num(r) / maxG * 100)) + '%"></b></i>' : '';
        return '<li><span class="bl">' + e(lab) + '</span><span class="bv">' + e(val) + '</span>' + bar + '</li>';
      }).join('');
      var size = (g.items.length > 4 || gi === 3) ? 'md' : 'sm';
      return '<article class="bc ' + size + '"><div class="bc-vis"><svg viewBox="0 0 24 24">' + (icons[gi % 4]) + '</svg></div><h2>' + e(SM.t(g.title)) + '</h2><ul>' + body + '</ul></article>';
    }).join('');
    var edition = '<article class="bc full ed"><div class="ed-l"><div class="ed-p"><small>' + (fa ? 'قیمت پایه' : 'Base price') + '</small><strong>$' + SALES.price + '</strong></div>' +
      '<div class="ed-m"><div class="ed-t"><span>' + (fa ? 'نسخه‌های باقی‌مانده' : 'Copies remaining') + '</span><b>' + fmt(left) + ' / ' + fmt(SALES.total) + '</b></div><div class="ed-bar" role="progressbar" aria-valuemin="0" aria-valuemax="' + SALES.total + '" aria-valuenow="' + left + '"><i style="--w:' + pct + '%"></i></div>' +
      '<p>' + (fa ? 'از هر طرح فقط ' + fmt(SALES.total) + ' نسخه عرضه می‌شود.' : 'Only ' + fmt(SALES.total) + ' copies of each design will ever exist.') + '</p></div></div>' +
      '<div class="ed-r"><small>' + (fa ? 'حق امتیاز کامل طرح' : 'Full design royalty') + '</small><strong>$' + fmt(SALES.price * left) + '</strong><p>' + (fa ? 'خرید تمام ' + fmt(left) + ' نسخه‌ی باقی‌مانده = تملک کامل و فروش‌رفتن (Sold out) طرح.' : 'Buy all ' + fmt(left) + ' remaining copies to own the whole design and sell it out.') + '</p></div></article>';
    box.innerHTML = '<div class="bento">' + edition + cards + '</div>';
    [].forEach.call(box.querySelectorAll('.bc'), function(sp){ SM.beam(sp, { reveal: 'hover', length: 18, thickness: 1, speed: 4 }); });
    if ('IntersectionObserver' in window && !SM.RM){
      var io = new IntersectionObserver(function(es){ es.forEach(function(x){ if (x.isIntersecting){ x.target.classList.add('on'); io.unobserve(x.target); } }); }, { threshold: .2 });
      [].forEach.call(box.querySelectorAll('.bc'), function(c){ io.observe(c); });
    } else [].forEach.call(box.querySelectorAll('.bc'), function(c){ c.classList.add('on'); });
  }
  try { fetch(u('data/sales.json'), { cache: 'no-cache' }).then(function(r){ return r.json(); }).then(function(j){ if (j && j.total){ SALES = j; SALES.sold = j.sold || {}; renderSpecs(); } }).catch(function(){}); } catch (x) {}

  /* viewer */
  var stage = main.querySelector('.vstage'), stageIn = main.querySelector('.vstage-in');
  SM.beam(stage, { length: 16, thickness: 1.5, speed: 9 });
  var video = stage.querySelector('video'), img = stage.querySelector('.vimg');
  var viewer = window.ShemiraniRing(stage.querySelector('canvas'), { model: D.model, base: u('assets/'), host: stageIn, drag: true, fill: .62, pose: D.pose || { az: .62, el: .32, d: 1, ty: 0 } });
  var tabs = [].slice.call(main.querySelectorAll('.vtabs button'));
  tabs.forEach(function(b){
    b.addEventListener('click', function(){
      tabs.forEach(function(x){ x.classList.remove('on'); }); b.classList.add('on');
      var m = b.getAttribute('data-mode'); stage.setAttribute('data-mode', m);
      viewer.paused = m !== 'model';
      if (video){ if (m === 'film'){ if (!video.getAttribute('src')){ video.src = u(D.film); } var p = video.play(); if (p && p.catch) p.catch(function(){}); }
      else video.pause(); }
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

  SM.start();
})();
