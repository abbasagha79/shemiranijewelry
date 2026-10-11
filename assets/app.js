
(function () {
  'use strict';
  var KEY = 'shemirani-lang';
  var doc = document.documentElement;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- language (English default, Persian on demand) ---------- */
  var tr = [].slice.call(document.querySelectorAll('[data-fa]'));
  tr.forEach(function (el) { el.setAttribute('data-en', el.innerHTML); });
  var btn = document.getElementById('lang');
  function setLang(l) {
    doc.lang = l; doc.dir = l === 'fa' ? 'rtl' : 'ltr';
    tr.forEach(function (el) { el.innerHTML = el.getAttribute(l === 'fa' ? 'data-fa' : 'data-en'); });
    if (btn) btn.textContent = l === 'fa' ? 'EN' : 'فارسی';
    try { localStorage.setItem(KEY, l); } catch (e) {}
  }
  var saved = 'en';
  try { saved = localStorage.getItem(KEY) || 'en'; } catch (e) {}
  setLang(saved === 'fa' ? 'fa' : 'en');
  if (btn) btn.addEventListener('click', function () { setLang(doc.lang === 'fa' ? 'en' : 'fa'); });

  /* ---------- header + reveal ---------- */
  var hdr = document.querySelector('header');
  function onScroll() { if (hdr) hdr.classList.toggle('solid', window.scrollY > 40); }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  var rv = [].slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    rv.forEach(function (el) { io.observe(el); });
  } else { rv.forEach(function (el) { el.classList.add('in'); }); }

  /* ---------- card tilt ---------- */
  [].slice.call(document.querySelectorAll('.card')).forEach(function (c) {
    c.addEventListener('pointermove', function (e) {
      var b = c.getBoundingClientRect();
      var x = (e.clientX - b.left) / b.width - 0.5, y = (e.clientY - b.top) / b.height - 0.5;
      c.style.setProperty('--ry', (x * 10) + 'deg'); c.style.setProperty('--rx', (-y * 10) + 'deg');
    });
    c.addEventListener('pointerleave', function () { c.style.setProperty('--ry', '0deg'); c.style.setProperty('--rx', '0deg'); });
  });

  /* ---------- gold sparkles ---------- */
  var sp = document.getElementById('sparkles'), spx = sp && sp.getContext && sp.getContext('2d');
  var parts = [], spVis = true, W = 0, H = 0;
  function spSize() { var r = sp.parentElement.getBoundingClientRect(); W = sp.width = r.width; H = sp.height = r.height; }
  if (spx && !reduce) {
    spSize(); addEventListener('resize', spSize);
    for (var i = 0; i < 70; i++) parts.push({ x: Math.random(), y: Math.random(), r: Math.random() * 1.8 + 0.6, v: Math.random() * 0.3 + 0.05, tw: Math.random() * 2 + 1, ph: Math.random() * 6.28 });
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { spVis = es[0].isIntersecting; }).observe(sp);
  }
  function drawSparkles(t) {
    if (!spx || reduce || !spVis) return;
    spx.clearRect(0, 0, W, H);
    parts.forEach(function (p) {
      p.y -= p.v * 0.003; if (p.y < -0.02) { p.y = 1.02; p.x = Math.random(); }
      var a = 0.25 + 0.75 * Math.abs(Math.sin(t / 1000 * p.tw + p.ph));
      spx.beginPath(); spx.fillStyle = 'rgba(255,226,140,' + a.toFixed(2) + ')';
      spx.shadowBlur = 8; spx.shadowColor = 'rgba(255,200,80,.9)';
      spx.arc(p.x * W, p.y * H, p.r, 0, 6.283); spx.fill();
    });
  }

  /* ---------- 3D jewelry (three.js) ---------- */
  var inst = [];
  var COL = { diamond: 0xffffff, rings: 0xffffff, earrings: 0xb98cff, bracelets: 0x3ff0e0, bangles: 0xff4d78, necklaces: 0x35e8a0, pendants: 0xffb02e };
  var gemGeo = null;

  function makeEnv(r) {
    var s = new THREE.Scene(); s.background = new THREE.Color(0x0a1a4f);
    function panel(c, k, w, h, p) {
      var m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(k), side: THREE.DoubleSide }));
      m.position.set(p[0], p[1], p[2]); m.lookAt(0, 0, 0); s.add(m);
    }
    panel(0xffffff, 7, 6, 6, [5, 6, 5]); panel(0xffe2a0, 5, 4, 8, [-6, 2, 3]);
    panel(0x6fa8ff, 4, 5, 5, [0, -4, 6]); panel(0xffffff, 6, 8, 2, [0, 7, -6]); panel(0xffd27a, 4, 3, 6, [7, -1, -4]);
    var pm = new THREE.PMREMGenerator(r); var t = pm.fromScene(s, 0.02).texture; pm.dispose(); return t;
  }
  function G() {
    if (!gemGeo) {
      var pts = [[0, -0.9], [1, 0], [0.78, 0.2], [0.56, 0.36], [0, 0.36]].map(function (a) { return new THREE.Vector2(a[0], a[1]); });
      gemGeo = new THREE.LatheGeometry(pts, 8);
    }
    return gemGeo;
  }
  function goldMat() { return new THREE.MeshStandardMaterial({ color: 0xf5c04a, metalness: 1, roughness: 0.2 }); }
  function gemMat(c) { return new THREE.MeshStandardMaterial({ color: c, metalness: 0.85, roughness: 0.04, flatShading: true, side: THREE.DoubleSide, envMapIntensity: 1.5 }); }
  function gem(c, s) { var m = new THREE.Mesh(G(), gemMat(c)); m.scale.set(s, s, s); return m; }
  function torus(R, r, seg) { return new THREE.Mesh(new THREE.TorusGeometry(R, r, 18, seg || 72), goldMat()); }
  function tube(pts, r) {
    var c = new THREE.CatmullRomCurve3(pts.map(function (p) { return new THREE.Vector3(p[0], p[1], p[2]); }));
    return { curve: c, mesh: new THREE.Mesh(new THREE.TubeGeometry(c, 100, r, 8, false), goldMat()) };
  }
  function drop(c, x) {
    var g = new THREE.Group();
    var hoop = torus(0.45, 0.06, 64); hoop.position.y = 0.9; g.add(hoop);
    var stem = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.5, 8), goldMat()); stem.position.y = 0.25; g.add(stem);
    var e = gem(c, 0.5); e.scale.set(0.5, 0.7, 0.5); e.position.y = -0.25; g.add(e);
    g.position.x = x; return g;
  }

  var BUILD = {
    diamond: function (c) { var g = new THREE.Group(); g.add(gem(c, 1)); g.rotation.x = 0.35; return g; },
    rings: function (c) {
      var g = new THREE.Group(); g.add(torus(1, 0.16, 96));
      var e = gem(c, 0.5); e.position.y = 1.47; g.add(e);
      for (var i = 0; i < 4; i++) {
        var a = i * Math.PI / 2 + Math.PI / 4;
        var p = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.04, 0.4, 8), goldMat());
        p.position.set(Math.cos(a) * 0.47, 1.35, Math.sin(a) * 0.47); g.add(p);
      }
      g.rotation.x = 0.25; return g;
    },
    earrings: function (c) { var g = new THREE.Group(); g.add(drop(c, -1)); g.add(drop(c, 1)); return g; },
    bracelets: function (c) {
      var g = new THREE.Group(), N = 22, R = 1.3, lg = new THREE.TorusGeometry(0.2, 0.045, 12, 24);
      for (var i = 0; i < N; i++) {
        var th = i / N * Math.PI * 2, m = new THREE.Mesh(lg, goldMat());
        m.position.set(R * Math.cos(th), 0, R * Math.sin(th)); m.rotation.y = -th - Math.PI / 2; m.scale.set(1.5, 1, 1);
        if (i % 2) m.rotateX(Math.PI / 2); g.add(m);
      }
      var e = gem(c, 0.35); e.position.set(R + 0.12, 0.05, 0); e.rotation.z = -Math.PI / 2; g.add(e);
      g.rotation.x = 0.9; return g;
    },
    bangles: function (c) {
      var g = new THREE.Group(), R = 1.15, ys = [-0.32, 0, 0.32];
      ys.forEach(function (y, k) { var t = torus(R, k === 1 ? 0.12 : 0.08, 100); t.rotation.x = Math.PI / 2; t.position.y = y; g.add(t); });
      for (var i = 0; i < 18; i++) {
        var th = i / 18 * Math.PI * 2, e = gem(c, 0.11);
        e.position.set((R + 0.1) * Math.cos(th), 0, (R + 0.1) * Math.sin(th)); e.rotation.set(0, -th, -Math.PI / 2); g.add(e);
      }
      g.rotation.x = 0.6; return g;
    },
    necklaces: function (c) {
      var g = new THREE.Group();
      var t = tube([[-1.7, 1.2, 0], [-1.2, 0.1, 0.1], [-0.5, -0.55, 0.15], [0, -0.75, 0.15], [0.5, -0.55, 0.15], [1.2, 0.1, 0.1], [1.7, 1.2, 0]], 0.04); g.add(t.mesh);
      [0.3, 0.38, 0.46, 0.54, 0.62, 0.7].forEach(function (u) {
        var p = t.curve.getPoint(u), e = gem(c, 0.09); e.position.copy(p); e.rotation.x = Math.PI / 2; g.add(e);
      });
      var bail = torus(0.08, 0.025, 24); bail.position.set(0, -0.82, 0.15); g.add(bail);
      var pg = new THREE.Group(), e2 = gem(c, 0.9); e2.rotation.x = Math.PI / 2; pg.add(e2);
      pg.scale.set(0.55, 0.8, 0.55); pg.position.set(0, -1.5, 0.15); g.add(pg);
      return g;
    },
    pendants: function (c) {
      var g = new THREE.Group();
      var t = tube([[-1, 1.9, 0], [-0.5, 1.1, 0], [0, 0.55, 0], [0.5, 1.1, 0], [1, 1.9, 0]], 0.035); g.add(t.mesh);
      var bail = torus(0.1, 0.03, 24); bail.position.set(0, 0.5, 0); g.add(bail);
      var og = new THREE.Group(), e = gem(c, 1); e.rotation.x = Math.PI / 2; og.add(e);
      var bezel = torus(1.02, 0.07, 64); og.add(bezel);
      og.scale.set(0.8, 1.05, 0.8); og.position.y = -0.55; g.add(og);
      return g;
    }
  };

  function init(cv) {
    var kind = cv.getAttribute('data-gem'); if (!BUILD[kind]) return;
    var r;
    try { r = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true }); } catch (e) { return; }
    try {
      r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      r.outputEncoding = THREE.sRGBEncoding; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.15;
      var scene = new THREE.Scene(); scene.environment = makeEnv(r);
      var l = new THREE.DirectionalLight(0xffffff, 1.1); l.position.set(3, 5, 4); scene.add(l);
      var cam = new THREE.PerspectiveCamera(30, 1, 0.1, 50); cam.position.set(0, 0.2, 8.6);
      var obj = BUILD[kind](COL[kind] || 0xffffff);
      var box = new THREE.Box3().setFromObject(obj), size = box.getSize(new THREE.Vector3()), ctr = box.getCenter(new THREE.Vector3());
      obj.position.sub(ctr);
      var inner = new THREE.Group(); inner.add(obj); inner.scale.setScalar(2.9 / Math.max(size.x, size.y, size.z));
      var piv = new THREE.Group(); piv.add(inner); scene.add(piv);
      var o = { r: r, scene: scene, cam: cam, piv: piv, vis: true, spd: 1, ty: 0, s: 1 };
      var rs = function () {
        var w = cv.clientWidth, h = cv.clientHeight; if (!w || !h) return;
        r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix();
      };
      rs();
      if (window.ResizeObserver) new ResizeObserver(rs).observe(cv); else addEventListener('resize', rs);
      if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { o.vis = es[0].isIntersecting; }, { rootMargin: '120px' }).observe(cv);
      var host = cv.closest('.card') || cv.closest('.stage');
      if (host) {
        host.addEventListener('pointerenter', function () { o.spd = 2.6; o.s = 1.07; });
        host.addEventListener('pointerleave', function () { o.spd = 1; o.s = 1; o.ty = 0; });
        host.addEventListener('pointermove', function (e) { var b = host.getBoundingClientRect(); o.ty = (e.clientY - b.top) / b.height - 0.5; });
      }
      o.seed = inst.length * 1.7; inst.push(o);
      (cv.parentElement || cv).classList.add('gl');
    } catch (err) { try { r.dispose(); } catch (e) {} }
  }

  if (typeof THREE !== 'undefined') {
    [].slice.call(document.querySelectorAll('canvas[data-gem]')).forEach(init);
  }

  var last = 0;
  function tick(t) {
    requestAnimationFrame(tick);
    var dt = Math.min((t - last) / 1000, 0.05); last = t;
    inst.forEach(function (o) {
      if (!o.vis) return;
      var sp = reduce ? 0 : o.spd;
      o.piv.rotation.y += dt * 0.7 * sp;
      o.piv.rotation.x += (o.ty * 0.7 - o.piv.rotation.x) * 0.08;
      o.piv.position.y = reduce ? 0 : Math.sin(t / 1000 * 1.2 + o.seed) * 0.08;
      var k = o.piv.scale.x + (o.s - o.piv.scale.x) * 0.1; o.piv.scale.set(k, k, k);
      o.r.render(o.scene, o.cam);
    });
    drawSparkles(t);
  }
  requestAnimationFrame(tick);
})();
