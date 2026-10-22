/* SHEMIRANI — collections corridor.
   Two rails of gold-framed cards ride from deep behind the screen toward the viewer
   (vanilla port of the "image stream hero"). Perspective does all the work: as a card's z
   grows it gets bigger and its x sweeps outward by the same factor.
   - depth is authored as apparent size, geometrically, so neighbouring cards keep a constant
     size ratio and the ribbon never tears near the edge;
   - the rails open early then hold (fan > 1), so the ribbon leaves the centre flat, bends once,
     then runs out on the diagonal;
   - a card is born across the axis (railBirth < 0), so the centre is always covered and no
     card ever needs a fade-in.
   Every length is cqw (percent of the container's width): the same shape at every size.
   Only transform is animated (compositor-only), and the animation pauses off screen. */
(function(){
  'use strict';
  var PATH = { perspective: 30, cardWidth: 18, cardHeight: 25, birthHeight: 2.6, exitHeight: 46,
               railBirth: -11, railExit: 44, fan: 3.3, turnBirth: 6, turnExit: 28, stops: 24 };
  var uid = 0;

  function keyframes(dir, name, p){
    var out = [];
    for (var s = 0; s <= p.stops; s++){
      var u = s / p.stops;
      var scale = (p.birthHeight / p.cardHeight) * Math.pow(p.exitHeight / p.birthHeight, u);
      var z = p.perspective * (1 - 1 / scale);
      var rail = p.railExit - (p.railExit - p.railBirth) * Math.pow(1 - u, p.fan);
      var turn = p.turnBirth + (p.turnExit - p.turnBirth) * u;
      out.push((u * 100).toFixed(2) + '%{transform:translate3d(' + (dir * rail).toFixed(2) + 'cqw,0,' + z.toFixed(2) + 'cqw) rotateY(' + (-dir * turn).toFixed(2) + 'deg)}');
    }
    return '@keyframes ' + name + '{' + out.join('') + '}';
  }

  window.ShemiraniCorridor = function(host, opt){
    opt = opt || {};
    var p = {}, k; for (k in PATH) p[k] = PATH[k]; for (k in (opt.path || {})) p[k] = opt.path[k];
    var images = opt.images || [], cards = opt.cards || 9, speed = opt.speed || 22, axis = opt.axis == null ? 55 : opt.axis;
    var id = 'cr' + (++uid), R = id + '-r', L = id + '-l';

    var st = document.createElement('style');
    st.textContent = keyframes(1, R, p) + keyframes(-1, L, p);
    document.head.appendChild(st);

    var view = document.createElement('div');
    view.className = 'corr-view'; view.setAttribute('aria-hidden', 'true');
    view.style.perspective = p.perspective + 'cqw';
    view.style.perspectiveOrigin = '50% ' + axis + '%';
    var stage = document.createElement('div'); stage.className = 'corr-stage';
    view.appendChild(stage);

    var html = '';
    [R, L].forEach(function(name, side){
      for (var i = 0; i < cards; i++){
        /* the left rail runs half a lap behind the right one, so the two sides show different
           pieces at the same depth while still reading as one mirrored stream */
        var img = images.length ? images[(i + side * Math.ceil(images.length / 2)) % images.length] : null;
        html += '<div class="corr-card" style="left:50%;top:' + axis + '%;width:' + p.cardWidth + 'cqw;height:' + p.cardHeight + 'cqw;' +
          'margin-left:' + (-p.cardWidth / 2) + 'cqw;margin-top:' + (-p.cardHeight / 2) + 'cqw;' +
          'animation:' + name + ' ' + speed + 's linear infinite;animation-delay:' + (-(i * speed) / cards).toFixed(3) + 's">' +
          '<span class="corr-in">' + (img ? '<img data-src="' + img + '" alt="" decoding="async" draggable="false">' : '') + '</span></div>';
      }
    });
    stage.innerHTML = html;
    host.insertBefore(view, host.firstChild);

    /* the photos load only as the section comes near, so they never compete with the hero */
    var loaded = false;
    function load(){
      if (loaded) return; loaded = true;
      [].forEach.call(stage.querySelectorAll('img[data-src]'), function(im){ im.src = im.getAttribute('data-src'); im.removeAttribute('data-src'); });
    }
    /* run only while on screen */
    host.classList.add('corr-paused');
    if ('IntersectionObserver' in window){
      host._corrIO = new IntersectionObserver(function(es){
        var on = es[0].isIntersecting;
        if (on) load();
        host.classList.toggle('corr-paused', !on);
      }, { rootMargin: '300px 0px' });
      host._corrIO.observe(host);
    } else { load(); host.classList.remove('corr-paused'); }
    return { el: view };
  };
})();
