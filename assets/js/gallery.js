/* SHEMIRANI — "works" gallery. Many small renders play like a video: the columns slide
   endlessly, neighbours in opposite directions. The sheet opens (side insets) and settles
   (scale 1.2 -> 1) as it scrolls into view. Only design renders appear here. */
(function(){
  'use strict';
  var host = document.querySelector('[data-gallery]');
  if (!host || !window.SM) return;
  var SM = window.SM, e = SM.esc, RM = SM.RM;
  function lerp(a, b, t){ return a + (b - a) * t; }
  function clamp01(v){ return v < 0 ? 0 : v > 1 ? 1 : v; }

  /* every work whose cover is a real render (a few older covers are gem-report / Matrix screenshots) */
  var SKIP = { thalver: 1, orovant: 1, zorelian: 1 };
  var all = SM.designs.filter(function(d){ return d.cover && !SKIP[d.id]; });
  if (all.length < 6) return;
  var N = innerWidth >= 1100 ? 10 : innerWidth >= 768 ? 7 : 4;
  var cols = []; for (var i = 0; i < N; i++) cols.push([]);
  all.forEach(function(d, i){ cols[i % N].push(d); });

  function tile(d){
    var sm = d.cover.replace(/\.jpg$/, '-sm.jpg');
    return '<a class="sg-img" href="' + e(SM.url('designs/' + d.id + '/index.html')) + '" aria-label="' + e(d.name) + '" tabindex="-1">' +
      '<img src="' + e(SM.url(sm)) + '" data-full="' + e(SM.url(d.cover)) + '" alt="' + e(d.name) + '" loading="lazy" decoding="async" draggable="false"></a>';
  }
  host.className = 'sg-sec';
  host.innerHTML = '<div class="sg" data-sg><div class="sg-inset" data-inset><div class="sg-sheet" data-sheet>' +
    cols.map(function(c, k){
      var one = c.map(tile).join('');
      var dur = 70 + (k * 17) % 40;
      return '<div class="sg-col ' + (k % 2 ? 'dn' : 'up') + '" style="--dur:' + dur + 's;--off:-' + ((k * 13) % dur) + 's"><div class="sg-track">' + one + one + '</div></div>';
    }).join('') + '</div></div></div>';
  [].forEach.call(host.querySelectorAll('img'), function(im){
    im.addEventListener('error', function(){ if (im.dataset.full && im.src.indexOf('-sm.') > -1){ im.src = im.dataset.full; } }, { once: true });
  });
  var sg = host.querySelector('[data-sg]'), inset = host.querySelector('[data-inset]'), sheet = host.querySelector('[data-sheet]');

  var curP = 0, raf = 0, last = 0;
  function progress(){
    var r = sg.getBoundingClientRect(), vh = window.innerHeight;
    return clamp01((vh - r.top) / (vh + r.height) * 1.6 - .15);
  }
  function paint(p){
    inset.style.clipPath = 'inset(0px ' + lerp(48, 0, p) + 'px)';
    sheet.style.transform = 'scale(' + lerp(1.2, 1, p) + ')';
  }
  function tick(now){
    raf = 0;
    var dt = Math.min(.1, (now - last) / 1000 || .016); last = now;
    var tgt = progress();
    curP = lerp(curP, tgt, 1 - Math.exp(-dt / .09));
    paint(curP);
    if (Math.abs(curP - tgt) > .0004) raf = requestAnimationFrame(tick);
  }
  function kick(){ if (!raf){ last = performance.now(); raf = requestAnimationFrame(tick); } }
  curP = progress(); paint(curP);
  if (!RM){ addEventListener('scroll', kick, { passive: true }); addEventListener('resize', kick); }
  else host.classList.add('still');
})();
