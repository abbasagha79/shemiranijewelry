/* SHEMIRANI — a collection page, drawn from assets/js/designs.js.
   The page shell sets <body data-collection="id">. Its designs sit on a works wheel,
   each card a turning render of the piece. */
(function(){
  'use strict';
  var SM = window.SM, e = SM.esc, u = SM.url;
  var id = document.body.getAttribute('data-collection');
  var C = SM.collections.filter(function(c){ return c.id === id; })[0] || SM.collections[0];
  var ds = SM.inCollection(C.id);
  var main = document.getElementById('collection');
  main.innerHTML = '<div class="page-in" data-head></div>' + (ds.length ? '<div id="col-wheel"></div>' : '') + '<div class="page-in" data-foot></div>';
  var head = main.querySelector('[data-head]'), foot = main.querySelector('[data-foot]');
  var fa = function(){ return SM.lang === 'fa'; };

  function render(){
    document.title = (fa() ? C.fa + ' | طلا و جواهر | SHEMIRANI' : C.en + ' | SHEMIRANI \u2014 18K Gold & Diamond Jewellery');
    head.innerHTML =
      '<nav class="crumbs" aria-label="Breadcrumb"><a href="' + u('index.html') + '">' + (fa() ? 'خانه' : 'Home') + '</a><i></i>' +
        '<a href="' + u('index.html#collections') + '">' + (fa() ? 'مجموعه‌ها' : 'Collections') + '</a></nav>' +
      '<h1>' + e(fa() ? C.fa : C.en) + '</h1>' +
      '<p class="lead">' + (ds.length
        ? (fa() ? ds.length.toLocaleString('fa-IR') + ' طرح در این مجموعه. چرخ را بچرخانید و روی هر طرح بزنید تا مدل سه‌بعدی، فیلم و همه‌ی مشخصاتش را ببینید.'
                : ds.length + (ds.length > 1 ? ' designs' : ' design') + ' in this collection. Turn the wheel, then open a design to see it in 3D, on film and with every measurement.')
        : (fa() ? 'طراحی‌های این مجموعه به‌زودی اضافه می‌شود.' : 'Designs in this collection will be added soon.')) + '</p>' +
      (ds.length ? '' : '<div class="empty"><svg viewBox="0 0 100 100" aria-hidden="true">' + C.icon + '</svg><div>' + (fa() ? 'به‌زودی' : 'Coming soon') + '</div></div>');
    foot.innerHTML = '<nav class="sibs" aria-label="Collections">' + SM.collections.map(function(c){
      return '<a href="' + u('collections/' + c.id + '/index.html') + '"' + (c.id === C.id ? ' class="on" aria-current="page"' : '') + '>' + e(fa() ? c.fa : c.en) + '</a>';
    }).join('') + '</nav>';
  }
  SM.onLang(render);

  var wheel = null, wEl = document.getElementById('col-wheel');
  function wheelText(){
    return {
      label: fa() ? C.fa : C.en,
      action: fa() ? 'مشاهده' : 'View',
      hint: fa() ? 'برای چرخاندن اسکرول کنید یا بکشید' : 'Scroll or drag to turn',
      items: ds.map(function(d){ return { sub: SM.t(d.line) }; })
    };
  }
  if (wEl && window.ShemiraniWheel){
    var wt = wheelText();
    wheel = window.ShemiraniWheel(wEl, ds.map(function(d, i){
      return { title: d.name, sub: wt.items[i].sub, href: u('designs/' + d.id + '/index.html'),
        video: d.spin ? u(d.spin) : null, poster: d.spinPoster ? u(d.spinPoster) : null, image: u(d.cover) };
    }), wt);
    SM.onLang(function(){ wheel.update(wheelText()); });
  }
  SM.start();
})();
