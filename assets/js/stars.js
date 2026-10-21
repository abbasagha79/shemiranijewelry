/* SHEMIRANI hero starfield — a faint field of twinkling stars with the occasional
   shooting star (ستاره‌ی دنباله‌دار) streaking across the night-blue scene behind the ring.
   Cheap 2D canvas; pauses when off-screen or the tab is hidden; honours reduced-motion. */
(function(){
  'use strict';
  var cv = document.getElementById('stars');
  if (!cv || !cv.getContext) return;
  var ctx = cv.getContext('2d', { alpha: true });
  var RM = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var W = 0, H = 0, DPR = 1, stars = [], comets = [], last = 0, nextComet = 0, vis = true, raf = 0;

  function rand(a, b){ return a + Math.random() * (b - a); }

  function resize(){
    DPR = Math.min(2, window.devicePixelRatio || 1);
    var r = cv.getBoundingClientRect();
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    var n = Math.round(Math.min(150, (W * H) / 9000));
    stars = [];
    for (var i = 0; i < n; i++){
      stars.push({
        x: Math.random() * W, y: Math.random() * H * 0.82,
        r: rand(0.3, 1.25), a: rand(0.2, 0.75),
        tw: rand(0.4, 1.6), ph: Math.random() * 6.28,
        warm: Math.random() < 0.3
      });
    }
  }

  function spawnComet(now){
    /* fall from upper area, down and to one side, with a tapering tail */
    var dir = Math.random() < 0.5 ? 1 : -1;
    var ang = rand(0.28, 0.5) * Math.PI * (dir); /* steepish downward */
    var speed = rand(520, 820);
    comets.push({
      x: dir > 0 ? rand(-0.1, 0.5) * W : rand(0.5, 1.1) * W,
      y: rand(-0.1, 0.25) * H,
      vx: Math.sin(ang) * speed, vy: Math.cos(ang) * speed * 0.72,
      len: rand(90, 190), life: 0, max: rand(0.7, 1.15), warm: Math.random() < 0.5
    });
    nextComet = now + rand(2600, 7000);
  }

  function frame(now){
    raf = requestAnimationFrame(frame);
    if (!vis || document.hidden){ last = now; return; }
    var dt = Math.min(0.05, (now - last) / 1000); last = now;
    ctx.clearRect(0, 0, W, H);

    /* twinkling field */
    for (var i = 0; i < stars.length; i++){
      var s = stars[i];
      var tw = RM ? 1 : 0.55 + 0.45 * Math.sin(now * 0.001 * s.tw + s.ph);
      ctx.globalAlpha = s.a * tw;
      ctx.fillStyle = s.warm ? '#f6e4b8' : '#dce9ff';
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.2832); ctx.fill();
    }
    ctx.globalAlpha = 1;

    if (RM) return; /* no shooting stars when reduced motion */

    if (now >= nextComet && comets.length < 2) spawnComet(now);
    for (var j = comets.length - 1; j >= 0; j--){
      var c = comets[j];
      c.life += dt; c.x += c.vx * dt; c.y += c.vy * dt;
      var k = c.life / c.max;
      if (k >= 1 || c.x < -200 || c.x > W + 200 || c.y > H + 200){ comets.splice(j, 1); continue; }
      var fade = Math.sin(Math.min(1, k) * Math.PI); /* in then out */
      var m = Math.hypot(c.vx, c.vy) || 1, ux = c.vx / m, uy = c.vy / m;
      var tx = c.x - ux * c.len, ty = c.y - uy * c.len;
      var g = ctx.createLinearGradient(c.x, c.y, tx, ty);
      var head = c.warm ? 'rgba(255,245,214,' : 'rgba(226,236,255,';
      var mid = c.warm ? 'rgba(246,217,143,' : 'rgba(150,185,255,';
      g.addColorStop(0, head + (0.95 * fade) + ')');
      g.addColorStop(0.35, mid + (0.5 * fade) + ')');
      g.addColorStop(1, 'rgba(10,20,60,0)');
      ctx.strokeStyle = g; ctx.lineWidth = 1.7; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(c.x, c.y); ctx.lineTo(tx, ty); ctx.stroke();
      /* bright head */
      ctx.globalAlpha = fade;
      ctx.fillStyle = head + '1)';
      ctx.beginPath(); ctx.arc(c.x, c.y, 1.6, 0, 6.2832); ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  var ro;
  if ('ResizeObserver' in window){ ro = new ResizeObserver(resize); ro.observe(cv); }
  else window.addEventListener('resize', resize);
  var vio = null;
  if ('IntersectionObserver' in window){
    vio = new IntersectionObserver(function(es){ vis = es[0].isIntersecting; }, { threshold: 0 });
    vio.observe(cv); cv.__starsIO = vio; /* retain */
  }
  resize();
  nextComet = performance.now() + 900;
  last = performance.now();
  requestAnimationFrame(frame);
  requestAnimationFrame(function(){ document.documentElement.classList.add('stars-on'); });
})();
