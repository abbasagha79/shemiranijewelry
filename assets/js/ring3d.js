/* SHEMIRANI — ring viewer
   One small WebGL engine for every page: loads a design's metal mesh and its diamonds,
   lights them in a soft jewellery studio, stands the ring on a dark mirror and flies a
   camera between poses. Needs three.js r128 (assets/vendor/three.min.js).

   Usage:
     var v = ShemiraniRing(canvas, { model: 'aurelis', base: 'assets/', drag: true });
     v.go({ az: .6, el: .3, d: 1, ty: 0, spin: false });
*/
(function(){
  'use strict';

  /* ---- design files, by design name ---- */
  var MODELS = {
    aurelis: { metal: 'models/aurelis-metal.bin', gems: 'models/aurelis-gems.json' },
    imperia: { metal: 'models/imperia-metal.bin', gems: 'models/imperia-gems.json' },
    regalia:  { metal: 'models/regalia-metal.bin',  gems: 'models/regalia-gems.json' },
    sovereign: { metal: 'models/sovereign-metal.bin', gems: 'models/sovereign-gems.json' },
    valoria:   { metal: 'models/valoria-metal.bin',   gems: 'models/valoria-gems.json' },
    monarch:   { metal: 'models/monarch-metal.bin',   gems: 'models/monarch-gems.json' },
    royale:    { metal: 'models/royale-metal.bin',    gems: 'models/royale-gems.json' },
    sovrana:   { metal: 'models/sovrana-metal.bin',   gems: 'models/sovrana-gems.json' },
    crownelle: { metal: 'models/crownelle-metal.bin', gems: 'models/crownelle-gems.json' },
    asterion:  { metal: 'models/asterion-metal.bin',  gems: 'models/asterion-gems.json' },
    lumiere:   { metal: 'models/lumiere-metal.bin',   gems: 'models/lumiere-gems.json' },
    imperio:   { metal: 'models/imperio-metal.bin',   gems: 'models/imperio-gems.json' },
    aureve:    { metal: 'models/aureve-metal.bin', gems: 'models/aureve-gems.json' },
    velora:    { metal: 'models/velora-metal.bin', gems: 'models/velora-gems.json' },
    solvera:   { metal: 'models/solvera-metal.bin', gems: 'models/solvera-gems.json' },
    zarelle:   { metal: 'models/zarelle-metal.bin', gems: 'models/zarelle-gems.json' },
    thevora:   { metal: 'models/thevora-metal.bin', gems: 'models/thevora-gems.json' },
    virelune:  { metal: 'models/virelune-metal.bin', gems: 'models/virelune-gems.json' },
    elune:     { metal: 'models/elune-metal.bin', gems: 'models/elune-gems.json' },
    lumeria:   { metal: 'models/lumeria-metal.bin', gems: 'models/lumeria-gems.json' },
    kaverin:   { metal: 'models/kaverin-metal.bin', gems: 'models/kaverin-gems.json' }
  };

  /* 18K yellow gold, measured reflectance (linear RGB, F0) nudged warm the way the renders read */
  var GOLD_18K = [1.0, 0.73, 0.31];

  var RM = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- mesh loaders ---------- */
  function fetchBuf(url, tryGz){
    var ds = tryGz && typeof DecompressionStream !== 'undefined';
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
  function parseMesh(buf){
    var dv = new DataView(buf), nV = dv.getUint32(0, true), nI = dv.getUint32(4, true), flag = dv.getUint32(8, true);
    var g = new THREE.BufferGeometry(), pos, nor, idx, off;
    if (flag === 0x5152){
      /* quantised: int16 positions over the bbox, int8 normals, uint32 indices */
      var mn = [dv.getFloat32(16, true), dv.getFloat32(20, true), dv.getFloat32(24, true)];
      var sc = [dv.getFloat32(28, true), dv.getFloat32(32, true), dv.getFloat32(36, true)];
      var q = new Int16Array(buf, 40, nV * 3);
      pos = new Float32Array(nV * 3);
      for (var i = 0; i < nV * 3; i++) pos[i] = mn[i % 3] + (q[i] + 32768) / 65535 * sc[i % 3];
      off = 40 + nV * 6;
      nor = new Int8Array(buf, off, nV * 3);
      off += nV * 3; off += (4 - (nV * 9) % 4) % 4;
      idx = new Uint32Array(buf.slice(off, off + nI * 4));
    } else {
      /* original format: float32 positions, int8 normals */
      pos = new Float32Array(buf, 16, nV * 3);
      off = 16 + nV * 12;
      nor = new Int8Array(buf, off, nV * 3);
      off += (nV * 3 + 3) & ~3;
      idx = flag ? new Uint32Array(buf, off, nI) : new Uint16Array(buf, off, nI);
    }
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(nor, 3, true));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    return g;
  }

  /* ---------- a round brilliant: 57 facets, girdle at y=0, diameter 1 ---------- */
  function brilliant(){
    var P = [], T = Math.PI * 2;
    function ring(n, r, y, a0){ var o = []; for (var i = 0; i < n; i++){ var a = a0 + i / n * T; o.push([Math.cos(a) * r, y, Math.sin(a) * r]); } return o; }
    var tableR = .285, crownH = .162, pavD = .431, girdle = .012;
    var table = ring(8, tableR, crownH, 0);
    var star  = ring(8, .40, crownH * .55, T / 16);
    var gT    = ring(16, .5, girdle, 0);
    var gB    = ring(16, .5, -girdle, 0);
    var low   = ring(8, .22, -pavD * .62, T / 16);
    var culet = [0, -pavD, 0], top = [0, crownH, 0];
    function tri(a, b, c){ P.push(a, b, c); }
    var i, j;
    for (i = 0; i < 8; i++){ j = (i + 1) % 8; tri(top, table[j], table[i]); }                       /* table */
    for (i = 0; i < 8; i++){ j = (i + 1) % 8; tri(table[i], table[j], star[i]); }                 /* star facets */
    for (i = 0; i < 8; i++){                                                                       /* bezel kites */
      var p = (i + 7) % 8;
      tri(table[i], star[i], gT[2 * i]); tri(table[i], gT[2 * i], star[p]);
    }
    for (i = 0; i < 8; i++){                                                                       /* upper girdle */
      tri(star[i], gT[(2 * i + 1) % 16], gT[2 * i]); tri(star[i], gT[(2 * i + 2) % 16], gT[(2 * i + 1) % 16]);
    }
    for (i = 0; i < 16; i++){ j = (i + 1) % 16; tri(gT[i], gT[j], gB[j]); tri(gT[i], gB[j], gB[i]); } /* girdle */
    for (i = 0; i < 8; i++){                                                                       /* lower girdle + mains */
      tri(gB[2 * i], gB[(2 * i + 1) % 16], low[i]); tri(gB[(2 * i + 1) % 16], gB[(2 * i + 2) % 16], low[i]);
      tri(low[i], gB[(2 * i + 2) % 16], low[(i + 1) % 8]);
      tri(low[i], low[(i + 1) % 8], culet);
    }
    var g = new THREE.BufferGeometry(), f = new Float32Array(P.length * 3);
    P.forEach(function(v, k){ f[k * 3] = v[0]; f[k * 3 + 1] = v[1]; f[k * 3 + 2] = v[2]; });
    g.setAttribute('position', new THREE.BufferAttribute(f, 3));
    g.computeVertexNormals();     /* non-indexed: one flat normal per facet */
    return g;
  }

  /* ---------- the studio ---------- */
  function studio(){
    /* colours are given in sRGB and converted: three r128 reads hex values as linear */
    function C(hex, k){ return new THREE.Color(hex).convertSRGBToLinear().multiplyScalar(k || 1); }
    var s = new THREE.Scene();
    /* a gradient dome instead of a flat dark backdrop: warm and bright overhead, a soft horizon,
       deep underneath. Broad polished surfaces pick up this tone, so the gold reads yellow, not brown */
    (function(){
      var g = new THREE.SphereGeometry(40, 48, 24), n = g.attributes.position.count, col = new Float32Array(n * 3);
      var top = C(0xfff1d6, 1.4), mid = C(0x5e5046, .75), low = C(0x0e0c14, .5), c = new THREE.Color();
      for (var i = 0; i < n; i++){
        var y = g.attributes.position.getY(i) / 40;
        if (y > 0) c.copy(mid).lerp(top, Math.pow(y, .7)); else c.copy(mid).lerp(low, Math.min(1, -y * 2.2));
        col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
      }
      g.setAttribute('color', new THREE.BufferAttribute(col, 3));
      s.add(new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide })));
    })();
    function box(c, k, w, h, p){
      var m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: C(c, k), side: THREE.DoubleSide }));
      m.position.set(p[0], p[1], p[2]); m.lookAt(0, 0, 0); s.add(m); return m;
    }
    /* a jewellery table: big overhead softbox, two tall strips, warm card in front, cool rim behind */
    box(0xfff6e8, 5.0, 10, 10, [2, 9, 3]);
    box(0xfff2e2, 1.5, 22, 22, [0, 12, -2]).rotation.set(Math.PI / 2, 0, 0);   /* a wide ceiling bounce for flat polished plates */
    box(0xffe9cc, 1.6, 14, 6, [0, 4, -10]);
    box(0xfff1de, 4.0, 2.6, 13, [-8, 2, 3]);
    box(0xfff1de, 4.0, 2.6, 13, [8, 2, -1]);
    box(0xffd99c, 2.4, 12, 4, [0, -1.5, 9]);
    box(0xffe2b0, 2.0, 7, 7, [-6, 3, -7]);
    box(0x8fb0ff, 1.2, 7, 7, [6, 2, -8]);
    box(0xffffff, 8.0, 4, 1.4, [5, 5, 6]);
    box(0xfff3dc, 3.0, 3, 8, [-3, 4, 8]);
    box(0xffffff, 6.0, .7, 12, [-5, 3, 7]); box(0xffffff, 6.0, .7, 12, [6.5, 3, 5]);   /* thin strips: crisp highlight lines */
    box(0x4a3a26, 1.0, 30, 30, [0, -9, 0]).rotation.set(-Math.PI / 2, 0, 0);
    return s;
  }

  function starTex(){
    var c = document.createElement('canvas'); c.width = c.height = 128; var x = c.getContext('2d');
    var g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(.14, 'rgba(255,240,200,.5)'); g.addColorStop(1, 'rgba(255,240,200,0)');
    x.fillStyle = g; x.fillRect(0, 0, 128, 128);
    ['h', 'v'].forEach(function(d){
      var l = d === 'h' ? x.createLinearGradient(0, 0, 128, 0) : x.createLinearGradient(0, 0, 0, 128);
      l.addColorStop(0, 'rgba(255,255,255,0)'); l.addColorStop(.5, 'rgba(255,255,255,1)'); l.addColorStop(1, 'rgba(255,255,255,0)');
      x.fillStyle = l; if (d === 'h') x.fillRect(0, 62, 128, 4); else x.fillRect(62, 0, 4, 128);
    });
    return new THREE.CanvasTexture(c);
  }

  window.ShemiraniRing = function(cv, opt){
    opt = opt || {};
    var api = { go: function(){}, resize: function(){}, ready: false };
    var host = opt.host || cv.parentElement;
    function fail(){ host.classList.add('gl-fail'); if (opt.onFail) opt.onFail(); }
    if (typeof THREE === 'undefined'){ fail(); return api; }
    /* small / touch screens: 30fps cap, fewer diamond bounces and a lower starting resolution
       (the adaptive clock below then finds what each device can really hold) */
    var MOB = (Math.min(window.innerWidth, window.innerHeight) < 760) ||
              (window.matchMedia && matchMedia('(pointer:coarse)').matches);
    var R;
    try { R = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true, powerPreference: 'high-performance' }); }
    catch(e){ fail(); return api; }
    /* adaptive sharpness: start sharp (phones at 1.5x, computers at up to 2x) and let the frame
       clock decide. If frames run slow the resolution steps down, a little at a time, until the
       device keeps up; if it has room to spare it steps back up, never past the level that lagged. */
    var DPR = window.devicePixelRatio || 1;
    var PR_MAX = Math.min(DPR, 2), PR_MIN = Math.min(DPR, MOB ? .75 : 1), prCeil = PR_MAX;
    var PR = Math.min(PR_MAX, MOB ? 1.5 : 2);
    R.setPixelRatio(PR);
    R.outputEncoding = THREE.sRGBEncoding;
    R.toneMapping = THREE.ACESFilmicToneMapping; R.toneMappingExposure = opt.exposure || 1.2;

    var scene = new THREE.Scene(), env = studio();
    /* keep the studio in high dynamic range so softboxes stay brighter than white */
    var gl = R.getContext(), HDR = THREE.HalfFloatType;
    if (!(R.capabilities.isWebGL2 ? gl.getExtension('EXT_color_buffer_float') || gl.getExtension('EXT_color_buffer_half_float') : gl.getExtension('OES_texture_half_float') && gl.getExtension('EXT_color_buffer_half_float'))) HDR = THREE.UnsignedByteType;

    /* cube captures of the studios (HDR when the device allows it) */
    function cube(mapping, sc, size){
      var rt = new THREE.WebGLCubeRenderTarget(size || (MOB ? 256 : 512), { format: THREE.RGBAFormat, type: HDR, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter });
      var cc = new THREE.CubeCamera(.1, 100, rt); cc.update(R, sc || env); rt.texture.mapping = mapping; return rt.texture;
    }
    /* the diamonds get their own studio: black velvet all round, hard white cards at many angles,
       so every facet flips between bright and dark the way a real stone does */
    var gemEnv = (function(){
      var g = new THREE.Scene(); g.background = new THREE.Color(.07, .075, .09);
      function card(w, h, k, p, warm){
        var c = warm ? new THREE.Color(1, .8, .45) : new THREE.Color(1, 1, 1);
        var m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: c.multiplyScalar(k), side: THREE.DoubleSide }));
        m.position.set(p[0], p[1], p[2]); m.lookAt(0, 0, 0); g.add(m);
      }
      for (var i = 0; i < 16; i++){
        var a = i / 16 * Math.PI * 2, y = (i % 4 - 1.5) * 3.5;
        card(i % 2 ? 1.6 : 2.8, i % 3 ? 7 : 3, (i % 4 === 1 || i % 5 === 3) ? 9 : 0.01, [Math.cos(a) * 8, y, Math.sin(a) * 8]);   /* black flags, hot cards between */
      }
      card(4, 4, 9, [0, 9, 1]); card(2, 6, 7, [6, -5, 3]); card(2, 6, 7, [-6, -5, -3]);                 /* hot whites */
      card(3, 1.5, 3, [0, -8, 4], true);                                                                 /* a warm kick */
      for (var j = 0; j < 10; j++){ var b = j / 10 * Math.PI * 2 + .3; card(.9, .9, 12, [Math.cos(b) * 7, 5 + (j % 3) * 1.5, Math.sin(b) * 7]); }   /* small hard points: sparkle */
      return g;
    })();
    var metalEnv = cube(THREE.CubeReflectionMapping);

    var key = new THREE.DirectionalLight(0xfff0d8, .35); key.position.set(3, 5, 4); scene.add(key);

    var cam = new THREE.PerspectiveCamera(opt.fov || 30, 1, .05, 200);
    var piv = new THREE.Group(), mir = new THREE.Group(); scene.add(piv); scene.add(mir); mir.scale.y = -1;
    var sparks = [], vis = true, FLOOR = -1, base = opt.base || 'assets/';

    function goldMat(dim){
      var c = new THREE.Color(GOLD_18K[0], GOLD_18K[1], GOLD_18K[2]);
      return new THREE.MeshPhysicalMaterial({ color: c, metalness: 1, roughness: dim ? .25 : .09, envMap: metalEnv,
        envMapIntensity: dim ? .45 : 1, side: THREE.DoubleSide, transparent: !!dim, opacity: dim ? .3 : 1, depthWrite: !dim });
    }

    /* ---------- diamonds: a small ray tracer inside each round brilliant ----------
       Light enters through the facet under the pixel (Fresnel split into reflection and refraction,
       n = 2.42), then bounces inside the stone off the exact facet planes of the cut. Where it can
       leave it is split into red, green and blue at slightly different indices (dispersion: the
       stone's "fire"); where it cannot (total internal reflection) it carries on to the next facet. */
    var GEM = brilliant(), PLANES = (function(g){
      var p = g.attributes.position.array, out = [], a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), n = new THREE.Vector3();
      for (var i = 0; i < p.length; i += 9){
        a.fromArray(p, i); b.fromArray(p, i + 3); c.fromArray(p, i + 6);
        n.subVectors(b, a).cross(c.clone().sub(a)); if (n.lengthSq() < 1e-12) continue; n.normalize();
        var w = n.dot(a); if (w < 0){ n.negate(); w = -w; }
        if (!out.some(function(q){ return q.x * n.x + q.y * n.y + q.z * n.z > .9995 && Math.abs(q.w - w) < 1e-3; })) out.push(new THREE.Vector4(n.x, n.y, n.z, w));
      }
      return out;
    })(GEM);
    var gemCube = cube(THREE.CubeReflectionMapping, gemEnv, 512);   /* diamonds always get the sharp capture: their facets magnify it */
    function diamondMat(dim){
      return new THREE.ShaderMaterial({
        defines: { NPLANES: PLANES.length, BOUNCES: MOB ? 4 : 6 },
        uniforms: { envMap: { value: gemCube }, planes: { value: PLANES }, dim: { value: dim ? .28 : 1 }, gain: { value: 1.32 } },
        transparent: !!dim, depthWrite: !dim, side: THREE.DoubleSide,
        vertexShader: [
          'varying vec3 vP; varying vec3 vN; varying vec3 vCam; varying vec3 vW0; varying vec3 vW1; varying vec3 vW2;',
          'void main(){',
          '  mat4 M = modelMatrix;',
          '  #ifdef USE_INSTANCING',
          '    M = modelMatrix * instanceMatrix;',
          '  #endif',
          '  mat3 R3 = mat3(M); vec3 s2 = vec3(dot(R3[0], R3[0]), dot(R3[1], R3[1]), dot(R3[2], R3[2])); vec3 s = sqrt(s2);',
          '  vec3 d = cameraPosition - M[3].xyz;',
          /* inverse of (rotation x per-axis scale): each column over its own squared length; written
             out for WebGL1. Round stones have equal scales; ovals are stretched along local x. */
          '  vCam = vec3(dot(R3[0], d), dot(R3[1], d), dot(R3[2], d)) / s2;',
          '  vW0 = R3[0] / s.x; vW1 = R3[1] / s.y; vW2 = R3[2] / s.z;',
          '  vP = position; vN = normal;',
          '  gl_Position = projectionMatrix * viewMatrix * M * vec4(position, 1.0);',
          '}'
        ].join('\n'),
        fragmentShader: [
          'uniform samplerCube envMap; uniform vec4 planes[NPLANES]; uniform float dim; uniform float gain;',
          'varying vec3 vP; varying vec3 vN; varying vec3 vCam; varying vec3 vW0; varying vec3 vW1; varying vec3 vW2;',
          'vec3 toWorld(vec3 v){ return normalize(vW0 * v.x + vW1 * v.y + vW2 * v.z); }',
          'vec3 env(vec3 dl){ return textureCube(envMap, toWorld(dl)).rgb; }',
          'float fres(float c, float f0){ return f0 + (1.0 - f0) * pow(1.0 - clamp(c, 0.0, 1.0), 5.0); }',
          'void main(){',
          '  vec3 V = normalize(vP - vCam);',
          '  vec3 N = normalize(vN); if (dot(N, vP) < 0.0) N = -N;',
          '  if (dot(N, V) > 0.0){ discard; }',
          '  float F = fres(dot(-V, N), 0.172);',
          '  vec3 col = env(reflect(V, N)) * F;',
          '  vec3 d = refract(V, N, 1.0 / 2.42); vec3 p = vP; float e = 1.0 - F;',
          '  for (int b = 0; b < BOUNCES; b++){',
          '    float tm = 1e5; vec3 nh = vec3(0.0, 1.0, 0.0);',
          '    for (int i = 0; i < NPLANES; i++){',
          '      vec4 pl = planes[i]; float dn = dot(d, pl.xyz);',
          '      if (dn > 1e-4){ float t = (pl.w - dot(p, pl.xyz)) / dn; if (t > 1e-4 && t < tm){ tm = t; nh = pl.xyz; } }',
          '    }',
          '    p += d * min(tm, 2.0);',
          '    vec3 o = refract(d, -nh, 2.42);',
          '    if (dot(o, o) > 0.0){',
          '      float Fi = fres(dot(o, nh), 0.172);',
          '      vec3 oR = refract(d, -nh, 2.400), oB = refract(d, -nh, 2.460);',
          '      vec3 c = vec3(env(dot(oR, oR) > 0.0 ? oR : o).r, env(o).g, env(dot(oB, oB) > 0.0 ? oB : o).b);',
          '      col += c * e * (1.0 - Fi); e *= Fi;',
          '    }',
          '    d = reflect(d, -nh);',
          '  }',
          '  col += env(d) * e * 0.6;',
          '  col = pow(col, vec3(1.12)) * 1.08;',   /* a touch more contrast: darks deeper, flashes brighter */
          '  col *= vec3(0.985, 0.99, 1.0) * gain * dim;',
          '  gl_FragColor = vec4(col, dim < 1.0 ? 0.55 : 1.0);',
          '  #include <tonemapping_fragment>',
          '  #include <encodings_fragment>',
          '}'
        ].join('\n')
      });
    }

    /* ---------- models: loaded once, swapped in place ---------- */
    var cache = {}, current = null;
    function loadModel(id){
      if (cache[id]) return cache[id];
      var spec = MODELS[id] || MODELS.aurelis;
      cache[id] = Promise.all([
        fetchBuf(base + spec.metal, true).then(parseMesh),
        fetch(base + spec.gems).then(function(r){ if (!r.ok) throw new Error(spec.gems); return r.json(); })
      ]).then(function(res){ return { metal: res[0], gems: res[1] }; });
      return cache[id];
    }
    function build(m, dim){
      var g = new THREE.Group();
      g.add(new THREE.Mesh(m.metal, goldMat(dim)));
      var im = new THREE.InstancedMesh(GEM, diamondMat(dim), m.gems.length), M = new THREE.Matrix4(), Q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), n = new THREE.Vector3();
      m.gems.forEach(function(st, k){
        n.set(st.n[0], st.n[1], st.n[2]).normalize();
        if (st.L && st.u){
          /* oval: local y = the table's facing, local x = the stone's length */
          var X = new THREE.Vector3(st.u[0], st.u[1], st.u[2]); X.addScaledVector(n, -X.dot(n)).normalize();
          var Z = new THREE.Vector3().crossVectors(X, n);
          Q.setFromRotationMatrix(new THREE.Matrix4().makeBasis(X, n, Z));
          M.compose(new THREE.Vector3(st.c[0], st.c[1], st.c[2]), Q, new THREE.Vector3(st.L, st.d, st.d));
        } else {
          Q.setFromUnitVectors(up, n);
          M.compose(new THREE.Vector3(st.c[0], st.c[1], st.c[2]), Q, new THREE.Vector3(st.d, st.d, st.d));
        }
        im.setMatrixAt(k, M);
      });
      if (dim) im.renderOrder = 1;
      g.add(im);
      g.rotation.x = -Math.PI / 2;          /* design files: Z up, Y along the finger */
      var h = new THREE.Group(); h.add(g); return { h: h, g: g };
    }
    function clear(group){
      for (var i = group.children.length - 1; i >= 0; i--){
        var o = group.children[i]; group.remove(o);
        o.traverse(function(x){ if (x.material && x.material.dispose) x.material.dispose(); });
      }
    }
    function mount(m){
      clear(piv); clear(mir); sparks = [];
      var A = build(m, false);
      A.h.updateMatrixWorld(true);
      var box = new THREE.Box3().setFromObject(A.g.children[0]);
      var ctr = box.getCenter(new THREE.Vector3()), size = box.getSize(new THREE.Vector3());
      var s = 2 / Math.max(size.x, size.y, size.z);
      A.h.position.copy(ctr).multiplyScalar(-s); A.h.scale.setScalar(s);
      FLOOR = (box.min.y - ctr.y) * s;
      piv.add(A.h);
      if (opt.mirror !== false){ var B = build(m, true); B.h.position.copy(A.h.position); B.h.scale.copy(A.h.scale); mir.add(B.h); }
      /* glints on the largest stone and a few on the top */
      A.h.updateMatrixWorld(true);
      var big = m.gems.slice().sort(function(a, b){ return b.d - a.d; })[0];
      var top = [big].concat(m.gems.filter(function(x){ return x !== big && x.n[2] > .8; }).filter(function(_, i){ return i % 4 === 1; }).slice(0, 4));
      var st = starTex(), w = new THREE.Vector3();
      top.forEach(function(x, k){
        var sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: st, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false }));
        w.set(x.c[0] + x.n[0] * x.d * .17, x.c[1] + x.n[1] * x.d * .17, x.c[2] + x.n[2] * x.d * .17);
        A.g.localToWorld(w); piv.worldToLocal(w);
        sp.position.copy(w); sp.userData.k = k; sp.userData.big = k === 0; piv.add(sp); sparks.push(sp);
      });
    }
    var swapping = 0;
    api.setModel = function(id){
      if (id === current) return Promise.resolve();
      var first = !current; current = id; var token = ++swapping;
      cv.style.transition = 'opacity .45s ease';
      if (!first) cv.style.opacity = '0';
      return Promise.all([loadModel(id), new Promise(function(r){ setTimeout(r, first ? 0 : 460); })]).then(function(res){
        if (token !== swapping) return;
        mount(res[0]);
        api.ready = true; api.resize();
        host.classList.add('gl-on'); cv.style.opacity = '';
        if (first && opt.onReady) opt.onReady();
      }).catch(function(e){ if (window.console) console.warn('ring viewer:', e); if (first) fail(); else cv.style.opacity = ''; });
    };
    api.preload = function(id){ loadModel(id).catch(function(){}); };
    api.setModel(opt.model || 'aurelis');

    /* ---------- camera rig ---------- */
    var p0 = opt.pose || { az: .62, el: .3, d: 1, ty: 0 };
    var cur = { az: p0.az + .35, el: p0.el + .2, d: (p0.d || 1) * 1.3, ty: p0.ty || 0 }, tgt = { az: p0.az, el: p0.el, d: p0.d || 1, ty: p0.ty || 0 };
    var spin = !!p0.spin, spinA = 0, swayT = 0, dragAz = 0, dragEl = 0, drag = null, idle = 0;
    api.go = function(p){ tgt.az = p.az; tgt.el = p.el; tgt.d = p.d || 1; tgt.ty = p.ty || 0; spin = !!p.spin; dragAz *= .3; dragEl *= .3; };

    var W = 1, H = 1, fitR = 8, offY = 0;
    api.resize = function(){
      W = cv.clientWidth; H = cv.clientHeight; if (!W || !H) return;
      R.setSize(W, H, false);
      var a = W / H, f = opt.fill || .5;            /* share of the frame height the ring takes */
      fitR = Math.max(3.8 / f, 3.1 / f / a);
      offY = typeof opt.offset === 'function' ? opt.offset(W, H) : (opt.offset || 0);
      cam.aspect = a;
      if (offY) cam.setViewOffset(W, H, 0, H * offY, W, H); else cam.clearViewOffset();
      cam.updateProjectionMatrix();
      if (opt.onResize) opt.onResize(offY);
    };
    api.resize();
    if (window.ResizeObserver) new ResizeObserver(api.resize).observe(cv); else addEventListener('resize', api.resize);
    if ('IntersectionObserver' in window) new IntersectionObserver(function(es){ vis = es[0].isIntersecting; }, { rootMargin: '60px' }).observe(cv);

    if (opt.drag){
      cv.style.cursor = 'grab'; cv.style.touchAction = 'pan-y';
      cv.addEventListener('pointerdown', function(e){ drag = { x: e.clientX, y: e.clientY }; cv.style.cursor = 'grabbing'; try { cv.setPointerCapture(e.pointerId); } catch(_){} });
      cv.addEventListener('pointermove', function(e){
        if (!drag) return;
        dragAz -= (e.clientX - drag.x) * .009; dragEl = Math.max(-.5, Math.min(1.1, dragEl + (e.clientY - drag.y) * .006));
        drag.x = e.clientX; drag.y = e.clientY; idle = performance.now();
      });
      ['pointerup', 'pointercancel'].forEach(function(n){ cv.addEventListener(n, function(){ drag = null; cv.style.cursor = 'grab'; idle = performance.now(); }); });
      cv.addEventListener('wheel', function(e){ if (!e.ctrlKey && !e.metaKey) return; e.preventDefault(); tgt.d = Math.max(.45, Math.min(1.5, tgt.d * (1 + e.deltaY * .001))); }, { passive: false });
    }

    function wrap(a){ return Math.atan2(Math.sin(a), Math.cos(a)); }
    var last = performance.now(), lastFrame = 0, FRAME_MS = MOB ? 32 : 0;
    function tick(now){
      requestAnimationFrame(tick);
      if (now - lastFrame < FRAME_MS) return;   /* ~30fps cap on mobile */
      lastFrame = now;
      var dt = Math.min((now - last) / 1000, .05); last = now;
      if (!api.ready || !vis || document.hidden || api.manual){ idleGap = true; return; }
      var k = RM ? 1 : 1 - Math.exp(-dt * 2.0);
      cur.az += wrap(tgt.az - cur.az) * k; cur.el += (tgt.el - cur.el) * k; cur.d += (tgt.d - cur.d) * k; cur.ty += (tgt.ty - cur.ty) * k;

      var still = RM || api.paused || (drag !== null) || (now - idle < 2500);
      if (!still){ swayT += dt; if (spin) spinA += dt * .42; }
      var want = spin ? spinA : Math.sin(swayT * .3) * .18;
      if (!spin) spinA = piv.rotation.y;
      piv.rotation.y += wrap(want - piv.rotation.y) * (spin ? 1 : Math.min(1, dt * 1.6));
      mir.rotation.y = piv.rotation.y; mir.position.y = 2 * FLOOR;

      var el = Math.max(.02, Math.min(1.42, cur.el + dragEl)), r = fitR * cur.d, az = cur.az + dragAz;
      cam.position.set(r * Math.cos(el) * Math.sin(az), cur.ty + r * Math.sin(el), r * Math.cos(el) * Math.cos(az));
      cam.lookAt(0, cur.ty, 0);
      mir.visible = el < 1.0;

      var sec = now / 1000;
      sparks.forEach(function(sp){
        var p = Math.max(0, Math.sin(sec * 1.4 + sp.userData.k * 2.1)); p = p * p * p;
        sp.material.opacity = p * (sp.userData.big ? 1 : .8); sp.material.rotation = sec * .2 + sp.userData.k;
        var z = (sp.userData.big ? .09 : .05) + (sp.userData.big ? .2 : .11) * p; sp.scale.set(z, z, z);
      });
      R.render(scene, cam);
      adapt(now);
    }
    /* frame clock for the adaptive sharpness: an average of the real time between drawn frames */
    var BUDGET = MOB ? 44 : 24, avg = 0, lastDraw = 0, checkAt = 0, goodSince = 0, idleGap = true;
    function adapt(now){
      var gap = Math.min(now - lastDraw, 1000); lastDraw = now;
      if (idleGap){ idleGap = false; avg = 0; checkAt = now + 1200; return; }   /* resumed after a pause: start over */
      avg = avg ? avg * .9 + gap * .1 : gap;
      if (now < checkAt) return;
      checkAt = now + 1000;
      if (avg > BUDGET && PR > PR_MIN){
        prCeil = PR * .95;                                           /* never climb back to a level that lagged */
        setPR(Math.max(PR_MIN, PR * .8)); goodSince = 0; checkAt = now + 1500;
      } else if (avg < BUDGET * .75 && PR < prCeil){
        if (!goodSince) goodSince = now;
        else if (now - goodSince > 6000){ setPR(Math.min(prCeil, PR * 1.15)); goodSince = 0; }
      } else goodSince = 0;
    }
    function setPR(v){ if (Math.abs(v - PR) < .02) return; PR = v; R.setPixelRatio(PR); api.resize(); }
    api.quality = function(){ return { pixelRatio: PR, frameMs: Math.round(avg) }; };
    requestAnimationFrame(tick);
    /* render one still at a given turn (used to make turntable films offline) */
    api.still = function(rotY, pose){
      if (pose){ cur.az = tgt.az = pose.az; cur.el = tgt.el = pose.el; cur.d = tgt.d = pose.d || 1; cur.ty = tgt.ty = pose.ty || 0; }
      piv.rotation.y = mir.rotation.y = rotY; mir.position.y = 2 * FLOOR;
      var r = fitR * cur.d;
      cam.position.set(r * Math.cos(cur.el) * Math.sin(cur.az), cur.ty + r * Math.sin(cur.el), r * Math.cos(cur.el) * Math.cos(cur.az));
      cam.lookAt(0, cur.ty, 0); mir.visible = cur.el < 1.0;
      sparks.forEach(function(sp){ sp.material.opacity = 0; });
      R.render(scene, cam);
      return cv.toDataURL('image/png');
    };
    return api;
  };
})();
