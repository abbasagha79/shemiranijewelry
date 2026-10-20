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
  document.title = D.name + ' | SHEMIRANI Jewelry';

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

  /* language-dependent parts */
  SM.onLang(function(){
    main.querySelector('[data-kind]').textContent = SM.t(D.kind);
    main.querySelector('[data-desc]').textContent = SM.t(D.description);
    main.querySelector('[data-note]').textContent = SM.t(D.note);
    main.querySelector('[data-specs]').innerHTML = D.specs.map(function(g){
      return '<div class="spec"><div class="spec-in"><h2>' + e(SM.t(g.title)) + '</h2><ul>' + g.items.map(function(it){ return '<li>' + e(SM.t(it)) + '</li>'; }).join('') + '</ul></div></div>';
    }).join('');
    [].forEach.call(main.querySelectorAll('.spec'), function(sp){ SM.beam(sp, { reveal: 'hover', length: 18, thickness: 1, speed: 4 }); });
  });

  /* viewer */
  var stage = main.querySelector('.vstage'), stageIn = main.querySelector('.vstage-in');
  SM.beam(stage, { length: 16, thickness: 1.5, speed: 9 });
  var video = stage.querySelector('video'), img = stage.querySelector('.vimg');
  var viewer = window.ShemiraniRing(stage.querySelector('canvas'), { model: D.model, base: u('assets/'), host: stageIn, drag: true, fill: .62, pose: { az: .62, el: .32, d: 1, ty: 0 } });
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
