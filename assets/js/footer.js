/* SHEMIRANI — shutter-glyph footer (vanilla-JS port of the shutter-glyph-footer component,
   re-inked in the site's navy + gold). The brand is drawn across the full width in a
   geometric display alphabet built from rectangles, slants and elliptical bands — no font
   loaded. One letter (A) is a "shutter": three blades meeting at a pivot that follows the
   pointer. Links are mono caps that scramble through noise glyphs on hover, then settle.
   Renders into <footer data-sgf>. */
(function(){
  'use strict';
  var RM = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var CAP = 100, S = 19, B = 17, SHUTTER = 100, K = 21, REST = 77;
  function f(n){ return String(Math.round(n * 100) / 100); }
  function clamp(v, lo, hi){ return v < lo ? lo : v > hi ? hi : v; }
  function rect(x, y, w, h){ return 'M' + f(x) + ' ' + f(y) + 'H' + f(x + w) + 'V' + f(y + h) + 'H' + f(x) + 'Z'; }
  function slant(x1, y1, x2, y2, t){ return 'M' + f(x1) + ' ' + f(y1) + 'H' + f(x1 + t) + 'L' + f(x2 + t) + ' ' + f(y2) + 'H' + f(x2) + 'Z'; }
  function at(cx, cy, rx, ry, deg){ var a = deg * Math.PI / 180; return f(cx + rx * Math.cos(a)) + ' ' + f(cy + ry * Math.sin(a)); }
  function band(cx, cy, rx, ry, tx, ty, a0, a1){
    var large = Math.abs(a1 - a0) > 180 ? 1 : 0, cw = a1 > a0 ? 1 : 0, irx = rx - tx, iry = ry - ty;
    return 'M' + at(cx, cy, rx, ry, a0) + 'A' + f(rx) + ' ' + f(ry) + ' 0 ' + large + ' ' + cw + ' ' + at(cx, cy, rx, ry, a1) +
      'L' + at(cx, cy, irx, iry, a1) + 'A' + f(irx) + ' ' + f(iry) + ' 0 ' + large + ' ' + (1 - cw) + ' ' + at(cx, cy, irx, iry, a0) + 'Z';
  }
  function bowl(x, y, w, h, t, tb){
    var ry = h / 2, rx = Math.min(w - t, ry * 0.95), sx = x + w - rx;
    return 'M' + f(x) + ' ' + f(y) + 'H' + f(sx) + 'A' + f(rx) + ' ' + f(ry) + ' 0 0 1 ' + f(sx) + ' ' + f(y + h) + 'H' + f(x) + 'Z' +
      'M' + f(x + t) + ' ' + f(y + tb) + 'H' + f(sx) + 'A' + f(rx - t) + ' ' + f(ry - tb) + ' 0 0 1 ' + f(sx) + ' ' + f(y + h - tb) + 'H' + f(x + t) + 'Z';
  }
  /* only the glyphs SHEMIRANI needs */
  var G = {
    S: { w: 80, d: [band(40, 29.25, 40, 29.25, S, B, -22, -273), band(40, 70.75, 40, 29.25, S, B, -93, 158)] },
    H: { w: 86, d: [rect(0, 0, S, 100), rect(86 - S, 0, S, 100), rect(0, 42, 86, B)] },
    E: { w: 72, d: [rect(0, 0, S, 100), rect(0, 0, 72, B), rect(0, 41.5, 64, B), rect(0, 100 - B, 72, B)] },
    M: { w: 112, d: [rect(0, 0, S + 3, 100), slant(0, 0, 46, 100, 9), slant(68, 0, 40, 100, 22), rect(112 - S - 3, 0, S + 3, 100)] },
    I: { w: S + 2, d: [rect(0, 0, S + 2, 100)] },
    R: { w: 84, d: [rect(0, 0, S, 100), bowl(0, 0, 82, 58, S, B), slant(34, 50, 62, 100, 22)] },
    A: { w: 96, d: [slant(37, 0, 0, 100, 23), slant(37, 0, 73, 100, 23), rect(18, 60, 60, 16)] },
    N: { w: 88, d: [rect(0, 0, S, 100), rect(88 - S, 0, S, 100), slant(0, 0, 63, 100, 25)] }
  };
  function turn(x, y, turns){ var n = ((turns % 4) + 4) % 4, a = x, b = y; for (var i = 0; i < n; i++){ var t = a; a = SHUTTER - b; b = t; } return [a, b]; }
  function restPivot(t){ return turn(REST, REST, t); }
  function blades(px, py, turns){
    var q = turn(clamp(px, 8, 92), clamp(py, 8, 92), -turns), qx = q[0], qy = q[1];
    var shapes = [[0, 0, K, 0, qx, qy, 0, K], [qx, 0, SHUTTER, 0, SHUTTER, K, qx, qy], [0, qy, qx, qy, K, SHUTTER, 0, SHUTTER]];
    return shapes.map(function(s){ var out = []; for (var i = 0; i < s.length; i += 2){ var p = turn(s[i], s[i + 1], turns); out.push(p[0], p[1]); } return out; });
  }
  function layout(word, shutterAt, gap){
    gap = gap || 12; var items = [], x = 0;
    word.split('').forEach(function(ch, i){
      var shutter = i === shutterAt && ch.trim() !== '';
      var w = shutter ? SHUTTER : (G[ch.toUpperCase()] ? G[ch.toUpperCase()].w : 42);
      items.push({ ch: ch, x: x, w: w, shutter: shutter }); x += w + gap;
    });
    return { items: items, width: Math.max(1, x - (items.length ? gap : 0)) };
  }
  var NOISE = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%&*+=/<>';
  function scramble(text, p, seed){
    var chars = text.split(''), settled = Math.floor(clamp(p, 0, 1) * chars.length);
    return chars.map(function(ch, i){
      if (i < settled || !/[a-z0-9]/i.test(ch)) return ch;
      var r = Math.abs(Math.sin((i + 1) * 12.9898 + seed * 78.233) * 43758.5453) % 1;
      return NOISE[Math.floor(r * NOISE.length)];
    }).join('');
  }
  function approach(from, to, k, dt){ return to + (from - to) * Math.pow(1 - clamp(k, 0, 1), clamp(dt, 0, 0.1) * 60); }

  window.ShemiraniFooter = function(root){
    var SM = window.SM, base = (SM && SM.base) || '';
    var LANG = function(){ return SM ? SM.lang : 'en'; };
    var links = [
      { en: 'Collections', fa: 'مجموعه‌ها', href: base + 'index.html#collections' },
      { en: 'Rings', fa: 'انگشترها', href: base + 'collections/rings/index.html' },
      { en: 'Our story', fa: 'داستان ما', href: base + 'index.html#story' },
      { en: 'Telegram', fa: 'تلگرام', href: 'https://t.me/abbasamrahbari', ext: true }
    ];
    var WORD = 'SHEMIRANI', shutterAt = 6; /* the 'A' */
    var lo = layout(WORD, shutterAt);
    var uid = 'sgf' + Math.random().toString(36).slice(2, 6);

    root.className = (root.className ? root.className + ' ' : '') + 'sgf';
    root.setAttribute('data-in', RM ? 'true' : 'false');
    root.innerHTML =
      '<div class="sgf-top">' +
        '<div class="sgf-brandline sgf-fade">' +
          '<a class="sgf-mono-brand" href="' + base + 'index.html">SHEMIRANI</a>' +
          '<span class="sgf-tag" data-fa="طراحی و ساخت جواهر">Jewellery design &amp; craft</span>' +
        '</div>' +
        '<nav class="sgf-nav sgf-fade" aria-label="Footer"><ul class="sgf-list">' +
          links.map(function(l, i){
            return '<li><a class="sgf-link" data-i="' + i + '" href="' + l.href + '"' + (l.ext ? ' target="_blank" rel="noopener"' : '') + '><span class="sgf-lab" aria-hidden="true"></span>' +
              '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 6h9.2M6.4 2.2 10.2 6l-3.8 3.8" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="square"/></svg></a></li>';
          }).join('') + '</ul></nav>' +
        '<p class="sgf-copy sgf-fade" data-fa="© ۲۰۲۶ SHEMIRANI — طراحی و ساخت، عباس شمیرانی. کرج، ایران.">© 2026 SHEMIRANI — designed &amp; made by Abbas Shemirani. Karaj, Iran.</p>' +
      '</div>' +
      '<div class="sgf-mark"><span class="sr">' + WORD + '</span>' +
        '<svg class="sgf-svg" viewBox="0 0 ' + f(lo.width) + ' ' + CAP + '" style="aspect-ratio:' + lo.width + ' / ' + CAP + '" aria-hidden="true" focusable="false">' +
        '<defs>' +
          '<linearGradient id="' + uid + 'g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff3c8"/><stop offset=".5" stop-color="#e3bd74"/><stop offset="1" stop-color="#a8741a"/></linearGradient>' +
          '<clipPath id="' + uid + 'u" clipPathUnits="userSpaceOnUse"><rect x="-40" y="-200" width="400" height="252.6"/></clipPath>' +
          '<clipPath id="' + uid + 'd" clipPathUnits="userSpaceOnUse"><rect x="-40" y="51.4" width="400" height="250"/></clipPath>' +
        '</defs>' +
        '<g fill="url(#' + uid + 'g)">' + lo.items.map(function(it, i){
          var rise = 'style="--d:' + (200 + i * 90) + 'ms"';
          if (it.shutter){
            var r = restPivot(0);
            return '<g transform="translate(' + f(it.x) + ' 0)"><g class="sgf-rise" ' + rise + '><g class="sgf-g sgf-sh" data-shutter>' +
              '<rect width="' + SHUTTER + '" height="' + CAP + '" fill="transparent"/>' +
              blades(r[0], r[1], 0).map(function(pts){ return '<polygon points="' + pts.map(f).join(' ') + '"/>'; }).join('') +
              '</g></g></g>';
          }
          var g = G[it.ch.toUpperCase()]; if (!g) return '';
          var paths = g.d.map(function(p){ return '<path d="' + p + '" fill-rule="evenodd"/>'; }).join('');
          return '<g transform="translate(' + f(it.x) + ' 0)"><g class="sgf-rise" ' + rise + '><g class="sgf-g sgf-flip">' +
            '<rect width="' + g.w + '" height="' + CAP + '" fill="transparent"/>' +
            '<g clip-path="url(#' + uid + 'u)"><g class="sgf-half sgf-up">' + paths + '</g></g>' +
            '<g clip-path="url(#' + uid + 'd)"><g class="sgf-half sgf-dn">' + paths + '</g></g>' +
            '</g></g></g>';
        }).join('') + '</g></svg></div>';

    /* translate link labels + tag + copy per language */
    var tag = root.querySelector('.sgf-tag'), copy = root.querySelector('.sgf-copy');
    tag.dataset.en = tag.innerHTML; copy.dataset.en = copy.innerHTML;
    var labs = [].slice.call(root.querySelectorAll('.sgf-lab'));
    function applyLang(){
      var fa = LANG() === 'fa';
      labs.forEach(function(el, i){ el.textContent = fa ? links[i].fa : links[i].en; });
      tag.innerHTML = fa ? tag.getAttribute('data-fa') : tag.dataset.en;
      copy.innerHTML = fa ? copy.getAttribute('data-fa') : copy.dataset.en;
    }
    applyLang();
    if (SM && SM.onLang) SM.onLang(applyLang);

    /* scramble links on hover */
    [].slice.call(root.querySelectorAll('.sgf-link')).forEach(function(a){
      var span = a.querySelector('.sgf-lab'), raf = 0;
      a.addEventListener('pointerenter', function(){
        if (RM) return;
        cancelAnimationFrame(raf);
        var text = span.textContent, t0 = performance.now(), seed = Math.random() * 100, n = 0;
        (function step(now){
          var p = (now - t0) / 420;
          if (p >= 1){ span.textContent = text; return; }
          if (n++ % 2 === 0) span.textContent = scramble(text, p, seed + Math.floor(n / 2));
          raf = requestAnimationFrame(step);
        })(t0);
      });
    });

    /* letter flip on click */
    [].slice.call(root.querySelectorAll('.sgf-flip')).forEach(function(g){
      g.addEventListener('click', function(){ if (RM) return; g.classList.remove('is-flip'); void g.getBoundingClientRect(); g.classList.add('is-flip'); });
      g.addEventListener('animationend', function(){ g.classList.remove('is-flip'); });
    });

    /* reveal once on screen (keep a reference to the observer so it is not GC'd before firing) */
    var seen = false, vis = false, svg = root.querySelector('.sgf-svg'), io = null;
    function reveal(){ if (!seen){ seen = true; root.setAttribute('data-in', 'true'); } }
    if ('IntersectionObserver' in window){
      io = new IntersectionObserver(function(es){ vis = es[0].isIntersecting; if (vis) reveal(); }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
      io.observe(root);
      root.__sgfIO = io; /* retain */
    }
    /* fallbacks: already in view, or on first scroll */
    if (root.getBoundingClientRect().top < innerHeight * 1.15){ vis = true; requestAnimationFrame(reveal); }
    window.addEventListener('scroll', function onScroll(){
      if (root.getBoundingClientRect().top < innerHeight){ vis = true; reveal(); window.removeEventListener('scroll', onScroll); }
    }, { passive: true });

    /* the shutter follows the pointer */
    var sh = root.querySelector('[data-shutter]');
    if (sh && !RM){
      var polys = [].slice.call(sh.querySelectorAll('polygon'));
      var shItem = lo.items[shutterAt];
      var turns = 0, piv = restPivot(0), ptr = { x: 0, y: 0, inside: false }, raf = 0, last = performance.now();
      sh.addEventListener('click', function(){ turns++; });
      root.addEventListener('pointermove', move); root.addEventListener('pointerleave', function(){ ptr.inside = false; });
      function move(e){
        var r = svg.getBoundingClientRect(), scale = r.width / lo.width || 1;
        ptr.inside = true; ptr.x = (e.clientX - r.left) / scale - shItem.x; ptr.y = (e.clientY - r.top) / scale;
      }
      function paint(x, y){ blades(x, y, turns).forEach(function(pts, i){ if (polys[i]) polys[i].setAttribute('points', pts.map(f).join(' ')); }); }
      (function tick(now){
        raf = requestAnimationFrame(tick);
        if (!vis || document.hidden) { last = now; return; }
        var dt = Math.min(0.1, (now - last) / 1000); last = now;
        var rest = restPivot(turns);
        var tx = ptr.inside ? clamp(ptr.x, 8, 92) : rest[0], ty = ptr.inside ? clamp(ptr.y, 8, 92) : rest[1];
        piv = [approach(piv[0], tx, 0.12, dt), approach(piv[1], ty, 0.12, dt)];
        paint(piv[0], piv[1]);
      })(last);
    }
  };
})();
