/* SHEMIRANI — a collection page, drawn from assets/js/designs.js.
   The page shell sets <body data-collection="id">. */
(function(){
  'use strict';
  var SM = window.SM, e = SM.esc, u = SM.url;
  var id = document.body.getAttribute('data-collection');
  var C = SM.collections.filter(function(c){ return c.id === id; })[0] || SM.collections[0];
  var main = document.getElementById('collection');
  function render(){
    var ds = SM.inCollection(C.id);
    document.title = (SM.lang === 'fa' ? C.fa : C.en) + ' | SHEMIRANI Jewelry';
    var cards = ds.map(function(d){
      return '<a class="dcard" href="' + u('designs/' + d.id + '/index.html') + '"><span class="dcard-in">' +
        '<span class="ph"><img src="' + u(d.thumb) + '" alt="' + e(d.name) + '" loading="lazy"></span>' +
        '<span class="meta"><span class="nm"><b>' + e(d.name) + '</b><small>' + e(SM.t(d.kind)) + '</small></span>' +
        (d.isNew ? '<span class="new">' + (SM.lang === 'fa' ? 'جدید' : 'NEW') + '</span>' : '') + '</span></span></a>';
    }).join('');
    main.innerHTML = '<div class="page-in">' +
      '<nav class="crumbs" aria-label="Breadcrumb"><a href="' + u('index.html') + '">' + (SM.lang === 'fa' ? 'خانه' : 'Home') + '</a><i></i>' +
        '<a href="' + u('index.html#collections') + '">' + (SM.lang === 'fa' ? 'مجموعه‌ها' : 'Collections') + '</a></nav>' +
      '<h1>' + e(SM.lang === 'fa' ? C.fa : C.en) + '</h1>' +
      '<p class="lead">' + (ds.length
        ? (SM.lang === 'fa' ? ds.length.toLocaleString('fa-IR') + ' طرح در این مجموعه. برای دیدن مدل سه‌بعدی، فیلم و همه‌ی مشخصات روی هر طرح بزنید.' : ds.length + (ds.length > 1 ? ' designs' : ' design') + ' in this collection. Open one to see it in 3D, on film and with every measurement.')
        : (SM.lang === 'fa' ? 'طراحی‌های این مجموعه به‌زودی اضافه می‌شود.' : 'Designs in this collection will be added soon.')) + '</p>' +
      (ds.length ? '<div class="dgrid">' + cards + '</div>'
        : '<div class="empty"><svg viewBox="0 0 100 100" aria-hidden="true">' + C.icon + '</svg><div>' + (SM.lang === 'fa' ? 'به‌زودی' : 'Coming soon') + '</div></div>') +
      '<nav class="sibs" aria-label="Collections">' + SM.collections.map(function(c){
        return '<a href="' + u('collections/' + c.id + '/index.html') + '"' + (c.id === C.id ? ' class="on" aria-current="page"' : '') + '>' + e(SM.lang === 'fa' ? c.fa : c.en) + '</a>';
      }).join('') + '</nav></div>';
  }
  SM.onLang(render);
  SM.start();
})();
