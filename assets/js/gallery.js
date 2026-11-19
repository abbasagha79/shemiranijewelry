/* SHEMIRANI — scroll gallery (vanilla-JS port of the scroll-trigger-animations component).
   One scroll progress (0 -> 1 as the block crosses the screen) drives: the block sliding down,
   its side insets opening, the whole sheet scaling 1.2 -> 1, and three photo columns drifting
   at different speeds. Only design renders appear here. Renders into <section data-gallery>. */
(function(){
  'use strict';
  var host = document.querySelector('[data-gallery]');
  if (!host || !window.SM) return;
  var SM = window.SM, e = SM.esc, RM = SM.RM;
  var cur = document.body.getAttribute('data-collection') || '';
  function lerp(a, b, t){ return a + (b - a) * t; }
  function clamp01(v){ return v < 0 ? 0 : v > 1 ? 1 : v; }

  /* 12 renders: this collection first, the rest of the studio after */
  var mine = SM.designs.filter(function(d){ return d.collection === cur && d.cover; });
  var rest = SM.designs.filter(function(d){ return d.collection !== cur && d.cover; });
  var pick = mine.concat(rest).slice(0, 12);
  if (pick.length < 4) return;
  while (pick.length < 12) pick.push(pick[pick.length % Math.max(1, mine.length || pick.length)]);
  var cols = [[], [], []];
  pick.forEach(function(d, i){ cols[i % 3].push(d); });

  function img(d){
    return '<a class="sg-img" href="' + e(SM.url('designs/' + d.id + '/index.html')) + '" aria-label="' + e(d.name) + '">' +
      '<img src="' + e(SM.url(d.cover)) + '" alt="' + e(d.name) + '" loading="lazy" decoding="async" draggable="false"></a>';
  }
  host.className = 'sg-sec';
  host.innerHTML =
    '<div class="sg" data-sg>' +
      '<div class="sg-move" data-move><div class="sg-inset" data-inset><div class="sg-sheet" data-sheet>' +
        '<div class="sg-col" data-c1>' + cols[0].map(img).join('') + '</div>' +
        '<div class="sg-col sg-col2" data-c2>' + cols[1].map(img).join('') + '</div>' +
        '<div class="sg-col sg-col3" data-c3>' + cols[2].map(img).join('') + '</div>' +
      '</div></div></div>' +
      '<div class="sg-spacer"></div>' +
    '</div>';
  var sg = host.querySelector('[data-sg]'), move = host.querySelector('[data-move]'), inset = host.querySelector('[data-inset]'),
      sheet = host.querySelector('[data-sheet]'), c1 = host.querySelector('[data-c1]'), c2 = host.querySelector('[data-c2]'), c3 = host.querySelector('[data-c3]');

  var tgt = 0, curP = 0, raf = 0, last = 0;
  /* scroll progress of the block: 0 when its top meets the bottom of the screen, 1 when its bottom meets the top */
  function progress(){
    var r = sg.getBoundingClientRect(), vh = window.innerHeight;
    return clamp01((vh - r.top) / (vh + r.height));
  }
  function paint(p){
    var spacer = window.innerWidth >= 768 ? 384 : 160;
    move.style.transform = 'translate3d(0,' + lerp(0, spacer, p) + 'px,0)';
    var x = lerp(48, 0, p);
    inset.style.clipPath = 'inset(0px ' + x + 'px)';
    sheet.style.transform = 'scale(' + lerp(1.2, 1, p) + ')';
    c1.style.transform = 'translate3d(0,' + lerp(0, -10, p) + '%,0)';
    c2.style.transform = 'translate3d(0,' + lerp(0, 20, p) + '%,0)';
    c3.style.transform = 'translate3d(0,' + lerp(0, -10, p) + '%,0)';
  }
  function tick(now){
    raf = 0;
    var dt = Math.min(.1, (now - last) / 1000 || .016); last = now;
    tgt = progress();
    curP = lerp(curP, tgt, 1 - Math.exp(-dt / .09));      /* the original smooths scroll (lerp .1) */
    paint(curP);
    if (Math.abs(curP - tgt) > .0004) raf = requestAnimationFrame(tick);
  }
  function kick(){ if (!raf){ last = performance.now(); raf = requestAnimationFrame(tick); } }
  curP = tgt = progress(); paint(curP);
  if (!RM){ addEventListener('scroll', kick, { passive: true }); addEventListener('resize', kick); }
})();
