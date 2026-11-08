/* SHEMIRANI — action-figure viewer
   Loads a figure's web model (tools/convert_figure.py), paints it with a colour combo
   (a gradient from the base to the top, plus a finish: metal, gloss or satin), lights it in a
   soft studio and lets you turn it. Needs three.js r128 (assets/vendor/three.min.js).

     var v = ShemiraniFigure(canvas, { url: 'assets/models/catball.bin', host: el, rot: [0,0,0], combo: combo });
     v.setCombo(combo);
*/
(function(){
  'use strict';

  function fetchBuf(url){
    var ds = typeof DecompressionStream !== 'undefined';
    var get = ds
      ? fetch(url + '.gz').then(function(r){
          if (!r.ok) throw 0;
          return new Response(r.body.pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();
        }).catch(function(){ return null; })
      : Promise.resolve(null);
    return get.then(function(b){
      if (b) return b;
      return fetch(url).then(function(r){ if (!r.ok) throw new Error(url); return r.arrayBuffer(); });
    });
  }

  /* quantised layout written by tools/convert_figure.py */
  function parse(buf){
    var dv = new DataView(buf), nV = dv.getUint32(0, true), nI = dv.getUint32(4, true);
    var mn = [dv.getFloat32(16, true), dv.getFloat32(20, true), dv.getFloat32(24, true)];
    var sc = [dv.getFloat32(28, true), dv.getFloat32(32, true), dv.getFloat32(36, true)];
    var q = new Int16Array(buf, 40, nV * 3), pos = new Float32Array(nV * 3), i;
    for (i = 0; i < nV * 3; i++) pos[i] = mn[i % 3] + (q[i] + 32768) / 65535 * sc[i % 3];
    var off = 40 + nV * 6, n8 = new Int8Array(buf, off, nV * 3), nor = new Float32Array(nV * 3);
    for (i = 0; i < nV * 3; i++) nor[i] = n8[i] / 127;     /* floats: three r128 would flatten int8 normals when the geometry is rotated or scaled */
    off += nV * 3; off += (4 - (nV * 9) % 4) % 4;
    var idx = new Uint32Array(buf.slice(off, off + nI * 4));
    var g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    return g;
  }

  window.ShemiraniFigure = function(canvas, opt){
    opt = opt || {};
    var host = opt.host || canvas.parentNode, api = { paused: false, ready: false };
    var RM = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch (e){ host.classList.add('gl-fail'); return api; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    var scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(28, 1, .1, 100);

    /* studio: soft boxes baked into an environment map, so metal and gloss have something to reflect */
    (function(){
      var es = new THREE.Scene();
      es.add(new THREE.Mesh(new THREE.SphereGeometry(40, 32, 16), new THREE.MeshBasicMaterial({ color: 0x0b0f1c, side: THREE.BackSide })));
      function box(w, h, x, y, z, rgb){
        var m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }));
        m.material.color.setRGB(rgb[0], rgb[1], rgb[2]); m.position.set(x, y, z); m.lookAt(0, 0, 0); es.add(m);
      }
      box(26, 14, 0, 22, 6, [7, 7, 7]);          /* big top softbox */
      box(7, 22, -20, 4, 8, [4.5, 4.2, 3.6]);    /* warm key strip */
      box(7, 22, 20, 4, 4, [2.6, 3.4, 5]);       /* cool fill strip */
      box(18, 5, 0, -3, -22, [5, 5, 5]);         /* rim from behind */
      box(30, 4, 0, -16, 10, [.9, .9, 1.1]);     /* faint floor bounce */
      var pm = new THREE.PMREMGenerator(renderer);
      scene.environment = pm.fromScene(es, 0.03).texture;
      pm.dispose();
    })();
    var key = new THREE.DirectionalLight(0xffffff, .55); key.position.set(3, 5, 4); scene.add(key);

    var pivot = new THREE.Group(); scene.add(pivot);
    var mat = new THREE.MeshPhysicalMaterial({ vertexColors: true, metalness: 0, roughness: .4, envMapIntensity: 1.15 });
    var mesh = null, ymin = 0, ymax = 1, radius = 1;

    /* soft glow on the floor under the figure, tinted by the combo */
    var glowTex = (function(){
      var c = document.createElement('canvas'); c.width = c.height = 128;
      var x = c.getContext('2d'), g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
      g.addColorStop(0, 'rgba(255,255,255,.9)'); g.addColorStop(.45, 'rgba(255,255,255,.25)'); g.addColorStop(1, 'rgba(255,255,255,0)');
      x.fillStyle = g; x.fillRect(0, 0, 128, 128);
      return new THREE.CanvasTexture(c);
    })();
    var glow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, depthWrite: false, opacity: .55 }));
    glow.rotation.x = -Math.PI / 2; scene.add(glow);

    function lin(hex){ return new THREE.Color(hex).convertSRGBToLinear(); }
    function paint(combo){
      if (!combo) return;
      mat.metalness = combo.metal; mat.roughness = combo.rough;
      mat.clearcoat = combo.clear; mat.clearcoatRoughness = .08;
      if (combo.bg) host.style.background = 'radial-gradient(ellipse at 50% 38%, ' + combo.bg[0] + ' 0%, ' + combo.bg[1] + ' 72%)';
      glow.material.color.set(combo.glow || '#e3bd74'); glow.material.color.convertSRGBToLinear();
      if (!mesh) return;
      var P = mesh.geometry.attributes.position, n = P.count, col = new Float32Array(n * 3);
      var st = combo.stops.map(lin), k = st.length - 1, c = new THREE.Color(), i;
      for (i = 0; i < n; i++){
        var t = Math.max(0, Math.min(1, (P.getY(i) - ymin) / (ymax - ymin)));
        t = t * t * (3 - 2 * t) * .35 + t * .65;            /* a little ease so the middle colour has room */
        var f = t * k, a = Math.min(k - 1, Math.floor(f)), u = f - a;
        c.copy(st[a]).lerp(st[a + 1], u);
        col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
      }
      mesh.geometry.setAttribute('color', new THREE.BufferAttribute(col, 3));
      mat.needsUpdate = true;
    }
    api.setCombo = function(c){ opt.combo = c; paint(c); };

    /* camera: orbit by dragging, a slow spin when left alone */
    var az = opt.view ? opt.view[0] : .6, el = opt.view ? opt.view[1] : .22, dist = 4, zoom = 1, vaz = 0, vel = 0, drag = false, lx = 0, ly = 0, idle = 0;
    function place(){
      var d = dist * zoom;
      camera.position.set(Math.sin(az) * Math.cos(el) * d, Math.sin(el) * d + radius * .05, Math.cos(az) * Math.cos(el) * d);
      camera.lookAt(0, radius * .02, 0);
    }
    canvas.style.touchAction = 'pan-y'; canvas.style.cursor = 'grab';
    canvas.addEventListener('pointerdown', function(e){ drag = true; lx = e.clientX; ly = e.clientY; vaz = 0; canvas.setPointerCapture(e.pointerId); canvas.style.cursor = 'grabbing'; });
    canvas.addEventListener('pointermove', function(e){
      if (!drag) return;
      var dx = e.clientX - lx, dy = e.clientY - ly; lx = e.clientX; ly = e.clientY;
      az -= dx * .0085; vaz = -dx * .0085; el = Math.max(-.2, Math.min(1.1, el + dy * .006)); idle = 0;
    });
    function up(){ drag = false; canvas.style.cursor = 'grab'; idle = 0; }
    canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
    canvas.addEventListener('wheel', function(e){
      if (!e.ctrlKey && !e.shiftKey) return;           /* plain scroll keeps scrolling the page */
      e.preventDefault(); zoom = Math.max(.55, Math.min(1.5, zoom * (1 + e.deltaY * .001)));
    }, { passive: false });

    function size(){
      var w = host.clientWidth || 300, h = host.clientHeight || w;
      renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
      var fov = camera.fov * Math.PI / 180, fit = radius / Math.sin(Math.min(fov, 2 * Math.atan(Math.tan(fov / 2) * camera.aspect)) / 2);
      dist = fit * 1.12;
    }
    api.resize = size;
    if (window.ResizeObserver) new ResizeObserver(size).observe(host); else addEventListener('resize', size);

    var visible = true;
    if (window.IntersectionObserver) new IntersectionObserver(function(en){ visible = en[0].isIntersecting; }).observe(host);
    var last = performance.now();
    function frame(now){
      requestAnimationFrame(frame);
      var dt = Math.min(.05, (now - last) / 1000); last = now;
      if (!visible || api.paused || document.hidden || !mesh) return;
      if (!drag){
        if (Math.abs(vaz) > .0004){ az += vaz; vaz *= .93; }
        else if (!RM){ idle += dt; if (idle > 1.2) az += dt * .28; }
      }
      pivot.rotation.y = 0; place(); renderer.render(scene, camera);
    }

    fetchBuf(opt.url).then(parse).then(function(g){
      var r = opt.rot || [0, 0, 0], D = Math.PI / 180;
      g.rotateX(r[0] * D); g.rotateY(r[1] * D); g.rotateZ(r[2] * D);
      g.computeBoundingBox();
      var b = g.boundingBox, ctr = b.getCenter(new THREE.Vector3()), sz = b.getSize(new THREE.Vector3());
      g.translate(-ctr.x, -b.min.y, -ctr.z);               /* stand on the floor, centred */
      var s = 2 / Math.max(sz.x, sz.y, sz.z);              /* normalise to ~2 units */
      g.scale(s, s, s); g.computeBoundingBox();
      ymin = 0; ymax = g.boundingBox.max.y;
      var bs = new THREE.Sphere(); g.boundingBox.getBoundingSphere(bs);
      radius = bs.radius;
      mesh = new THREE.Mesh(g, mat); pivot.add(mesh);
      mesh.position.y = -ymax / 2;                          /* centre vertically around the origin */
      glow.position.y = -ymax / 2 + .005; glow.scale.setScalar(radius * 3.1);
      paint(opt.combo); size(); api.ready = true;
      host.classList.add('gl-on');
      if (opt.onReady) opt.onReady();
    }).catch(function(e){ if (window.console) console.warn('figure viewer:', e); host.classList.add('gl-fail'); });
    requestAnimationFrame(frame);
    api.setView = function(a, e){ az = a; el = e; idle = -99; };
    return api;
  };
})();
