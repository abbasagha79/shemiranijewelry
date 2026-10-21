/* SHEMIRANI — works wheel (plain-JS port of the WorksWheel component).
   At rest the designs sit in a ring around a label, each card tangent to the circle.
   The first notch of scroll opens the ring into a vertical drum: the card at the front
   lies flat and full size, its neighbours rotate away into perspective. Keep turning and
   the drum brings the next design round. Everything is one number, `turn`, read by one
   rAF pass that writes transforms straight to the DOM.

   ShemiraniWheel(section, items, { label, action, hint, axis: 'y' | 'x', beam })
     items: [{ title, sub, href, video, poster, image, html }]
     axis 'x' turns the drum left to right instead of top to bottom: cards rotate about a
     vertical axis, the arc's bow moves above the strip, and scroll, drag and arrows all turn it sideways.
*/
(function(){
  'use strict';
  /* geometry, tuned together (see the original component) */
  var CARD_H = 0.46, CARD_MAX_W = 0.40, CARD_RATIO = 1.45, STEP = 40, DRUM = 2.22, LENS = 2.7, RING_R = 1.14, BOW = 1.82;
  var TITLE = 0.15, INDEX = 0.055, CULL = 1.6, WHEEL_UNITS = 900, DRAG_UNITS = 420, SETTLE = 140, EASE = 0.12;
  function clamp(v, lo, hi){ return Math.min(hi, Math.max(lo, v)); }
  function lerp(a, b, t){ return a + (b - a) * t; }
  function rad(d){ return d * Math.PI / 180; }
  function bowAt(drumDeg, bow){ return -bow * (1 - Math.cos(rad(drumDeg))); }
  function place(ringDeg, drumDeg, ringR, drumR, bow, m, horiz){
    return (horiz ? 'translateY(' : 'translateX(') + (m * bowAt(drumDeg, bow)) + 'px)' +
      ' rotateZ(' + ((1 - m) * ringDeg) + 'deg) translateY(' + (-(1 - m) * ringR) + 'px)' +
      (horiz ? ' rotateY(' + (m * drumDeg) + 'deg)' : ' rotateX(' + (m * drumDeg) + 'deg)') + ' translateZ(' + (m * drumR) + 'px)';
  }
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  window.ShemiraniWheel = function(section, items, opt){
    opt = opt || {};
    var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var count = items.length, last = Math.max(count - 1, 0);
    var uid = 'ww' + Math.random().toString(36).slice(2, 7), H = opt.axis === 'x';
    /* a full circle needs enough cards to close; a short list fans out over the top of the ring instead */
    var arc = Math.min(360, count * 60);
    function ringDegFor(i, d){ return arc >= 360 ? d * (360 / count) : (i - (count - 1) / 2) * (arc / count) - (i - d) * (arc / count); }

    section.classList.add('wheel'); if (H) section.classList.add('wheel-x'); if (opt.feature) section.classList.add('wheel-feat');
    section.innerHTML = '<div class="wheel-pin">' +
      '<div class="wheel-stage" tabindex="0" role="listbox" aria-label="' + esc(opt.label) + '">' +
        '<div class="wheel-drum">' + items.map(function(it, i){
          var media = it.html ? it.html : it.video
            ? '<video muted loop playsinline preload="metadata" ' + (it.poster ? 'poster="' + esc(it.poster) + '" ' : '') + 'src="' + esc(it.video) + '"></video>'
            : '<img src="' + esc(it.image) + '" alt="" draggable="false" loading="lazy" decoding="async">';
          return '<a class="wheel-card" id="' + uid + '-' + i + '" role="option" aria-selected="false" aria-label="' + esc(it.title) + '"' + (it.href ? ' href="' + esc(it.href) + '"' : '') + ' draggable="false">' +
            '<span class="wheel-face">' + media +
              (opt.action && it.href ? '<span class="wheel-act"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 9 9 3M4 3h5v5"/></svg><span>' + esc(opt.action) + '</span></span>' : '') +
            '</span></a>';
        }).join('') + '</div>' +
      '</div>' +
      '<div class="wheel-label" aria-hidden="true">' + esc(opt.label) + '</div>' +
      (opt.feature
        ? '<div class="wheel-title wheel-feature"><span class="wf-eyebrow"></span><b></b><p class="wf-desc"></p><div class="wf-stats"></div>' +
          '<a class="wf-cta"><span></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6"/></svg></a></div>'
        : '<div class="wheel-title" aria-hidden="true"><b></b><small></small></div>') +
      '<ol class="wheel-index">' + items.map(function(it, i){ return '<li><button type="button" data-i="' + i + '">' + esc(it.title) + '</button></li>'; }).join('') + '</ol>' +
      '<div class="wheel-hint" aria-hidden="true">' + esc(opt.hint || '') + '</div>' +
    '</div>';

    var stageEl = section.querySelector('.wheel-stage'), drumEl = section.querySelector('.wheel-drum');
    var cards = [].slice.call(section.querySelectorAll('.wheel-card'));
    var faces = cards.map(function(c){ return c.firstElementChild; });
    var labelEl = section.querySelector('.wheel-label'), titleEl = section.querySelector('.wheel-title');
    var titleB = titleEl.querySelector('b'), titleS = titleEl.querySelector('small');
    var wfEye = titleEl.querySelector('.wf-eyebrow'), wfDesc = titleEl.querySelector('.wf-desc'),
        wfStats = titleEl.querySelector('.wf-stats'), wfCta = titleEl.querySelector('.wf-cta'),
        wfCtaSpan = wfCta ? wfCta.querySelector('span') : null;
    var idxBtns = [].slice.call(section.querySelectorAll('.wheel-index button'));
    var videos = [].slice.call(section.querySelectorAll('video'));
    var hint = section.querySelector('.wheel-hint');
    if (opt.beam && window.SM && SM.beam) faces.forEach(function(f, i){ SM.beam(f, { length: 14, thickness: 1.5, speed: 7, delay: -i * 1.2 }); });

    var turn = 0, target = 0, active = -1, M = {}, vis = true, settling = 0, dirty = true;

    function measure(){
      var w = stageEl.clientWidth, h = stageEl.clientHeight;
      var cardW = Math.min(h * CARD_H * CARD_RATIO, w * (w < 700 ? .72 : CARD_MAX_W)), cardH = cardW / CARD_RATIO;
      var ringR = Math.min(cardH * RING_R, w * .3);   /* the ring also has to fit a narrow screen */
      var ringScale = count ? clamp((((2 * Math.PI * ringR) / Math.max(count, 360 / Math.max(arc / count, 1))) * 0.82) / (cardW || 1), 0.16, 1) : 1;
      if (arc < 360) ringScale = Math.min(ringScale, w < 700 ? .46 : .62);
      else if (w < 700) ringScale = Math.min(ringScale, .4);   /* keep a full ring inside a phone's width */
      M = { cardW: cardW, cardH: cardH, ringR: ringR, ringScale: ringScale, drumR: cardH * DRUM, bow: cardH * BOW, depth: cardH * LENS, title: cardH * TITLE, index: cardH * INDEX };
      stageEl.style.perspective = M.depth + 'px';
      cards.forEach(function(c){ c.style.width = cardW + 'px'; c.style.height = cardH + 'px'; c.style.marginLeft = (-cardW / 2) + 'px'; c.style.marginTop = (-cardH / 2) + 'px'; });
      labelEl.style.fontSize = Math.max(26, M.title) + 'px';
      /* the feature panel sizes its own name via CSS; only the simple title is scaled here */
      if (titleS){ titleB.style.fontSize = Math.max(22, M.title * .62) + 'px'; titleS.style.fontSize = Math.max(11, M.title * .17) + 'px'; }
      section.querySelector('.wheel-index').style.fontSize = Math.max(11, M.index) + 'px';
      dirty = true;
    }
    measure();
    if (window.ResizeObserver) new ResizeObserver(measure).observe(stageEl); else addEventListener('resize', measure);

    /* only the front-facing card's film plays — several videos at once is the main
       source of jank on phones */
    function syncVideos(){
      if (!videos.length) return;
      cards.forEach(function(c, i){
        var v = c.querySelector('video'); if (!v) return;
        if (vis && i === active){ var p = v.play(); if (p && p.catch) p.catch(function(){}); }
        else if (!v.paused) v.pause();
      });
    }

    function setActive(n){
      if (n === active) return; active = n;
      cards.forEach(function(c, i){ c.setAttribute('aria-selected', String(i === n)); });
      stageEl.setAttribute('aria-activedescendant', uid + '-' + n);
      idxBtns.forEach(function(b, i){ b.classList.toggle('on', i === n); });
      paintTitle(n);
      syncVideos();
    }

    /* fill the title / featured-design panel for item n */
    function paintTitle(n){
      var it = items[n] || {};
      titleB.textContent = it.title || '';
      if (titleS) titleS.textContent = it.sub || '';
      if (!wfCta) return;                         /* not a feature wheel */
      if (wfEye) wfEye.textContent = it.eyebrow || '';
      if (wfDesc) wfDesc.textContent = it.desc || '';
      if (wfStats) wfStats.innerHTML = (it.stats || []).map(function(s){ return '<span>' + esc(s) + '</span>'; }).join('');
      if (wfCtaSpan) wfCtaSpan.textContent = opt.action || 'View';
      if (it.href){ wfCta.setAttribute('href', it.href); wfCta.removeAttribute('aria-hidden'); }
      else { wfCta.removeAttribute('href'); }
    }

    var lastDraw = 0;
    function draw(now){
      requestAnimationFrame(draw);
      /* time-based easing: the same feel at 60fps or on a phone managing 20fps (frame-count easing
         made a slow phone trail well behind the finger) */
      var dt = lastDraw ? Math.min(0.1, (now - lastDraw) / 1000) : 1 / 60; lastDraw = now;
      if (!vis || !M.cardH) return;
      var gap = target - turn;
      if (Math.abs(gap) < 0.0005){ if (turn === target && !dirty) return; turn = target; }
      else turn += gap * (reduced ? 1 : 1 - Math.pow(1 - (SCROLLY ? 0.2 : EASE), dt * 60));
      dirty = false;
      var t = turn, m = clamp(t, 0, 1), pos = Math.max(0, t - 1);
      /* a short list fans over the top of the ring; lower it so the fan sits inside the frame */
      drumEl.style.transform = 'translateY(' + ((1 - m) * (arc < 360 ? M.ringR * .62 : 0)) + 'px) translateZ(' + (-m * M.drumR) + 'px)';
      for (var i = 0; i < count; i++){
        var d = i - pos, drumDeg = d * STEP, c = cards[i];
        c.style.transform = place(ringDegFor(i, d), drumDeg, M.ringR, M.drumR, M.bow, m, H);
        c.style.opacity = m > 0.5 && Math.abs(d) > CULL ? '0' : '1';
        c.style.zIndex = String(Math.round(100 - Math.abs(d) * 2));
        faces[i].style.transform = 'scale(' + lerp(M.ringScale, 1, m) + ')';
      }
      labelEl.style.opacity = String(1 - m);
      titleEl.style.opacity = String(m);
      if (wfCta) wfCta.style.pointerEvents = m > 0.9 ? 'auto' : 'none';
      if (hint) hint.style.opacity = String(Math.max(0, 1 - m * 3));
      setActive(clamp(Math.round(pos), 0, last));
    }
    requestAnimationFrame(draw);

    function to(n){ target = clamp(n, 0, last + 1); }

    /* touch screens: the page scroll itself turns the wheel. The section becomes a tall track and
       the wheel pins to the screen while you scroll through it, so an ordinary vertical swipe brings
       each card to the front in turn (a phone has no mouse wheel, and sideways drags felt hidden). */
    var SCROLLY = !!(window.matchMedia && matchMedia('(pointer: coarse)').matches);
    var pinEl = section.querySelector('.wheel-pin'), TRACK_STEP = 0.6, trackW = 0;
    function travel(){ return Math.max(1, section.offsetHeight - pinEl.offsetHeight); }
    function layoutTrack(){
      if (innerWidth === trackW) return;          /* ignore the iOS address bar resizing the height */
      trackW = innerWidth;
      section.style.height = Math.round(pinEl.offsetHeight * (1 + TRACK_STEP * (last + 1))) + 'px';
    }
    function fromScroll(){
      var p = clamp(-section.getBoundingClientRect().top / travel(), 0, 1), t = p * (last + 1), f = t - Math.floor(t);
      /* each card holds the front for part of the swipe before the next one turns in */
      f = f < .2 ? 0 : f > .8 ? 1 : (f - .2) / .6; f = f * f * (3 - 2 * f);
      to(Math.floor(t) + f);
    }
    function go(n){
      if (!SCROLLY){ to(n); rest = target; return; }
      var y = scrollY + section.getBoundingClientRect().top + travel() * (clamp(n, 0, last + 1) + (n <= last ? .05 : 0)) / (last + 1);
      window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
    }
    if (SCROLLY){
      section.classList.add('wheel-scrolly');
      layoutTrack(); fromScroll();
      addEventListener('scroll', fromScroll, { passive: true });
      addEventListener('resize', function(){ layoutTrack(); fromScroll(); });
    }

    /* wheel: cancelled only while the drum still has somewhere to go, so the page scrolls on at either end.
       Listened for on the whole section: browsers latch a scroll gesture's later events onto the
       section itself, so a listener on the inner stage would only ever see the first notch. */
    section.addEventListener('wheel', function(e){
      if (SCROLLY) return;
      var next = target + (e.deltaY + (H ? e.deltaX : 0)) / WHEEL_UNITS;
      if (next > 0 && next < last + 1) e.preventDefault();
      to(next);
      clearTimeout(settling);
      settling = setTimeout(settle, SETTLE);
    }, { passive: false });
    /* when a scroll gesture ends, land on an item. A slow mouse wheel sends one notch at a time,
       each worth only a fraction of an item, so a deliberate nudge steps one whole item in its
       direction instead of rounding back to where it started. */
    var rest = 0;
    function settle(){
      var diff = target - rest;
      if (Math.abs(diff) < 0.06) to(rest);
      else to(rest + (diff > 0 ? 1 : -1) * Math.max(1, Math.round(Math.abs(diff))));
      rest = target;
    }

    /* drag: up/down with a mouse; sideways on touch, so a vertical swipe still scrolls the page */
    var drag = null, moved = 0;
    stageEl.addEventListener('pointerdown', function(e){ moved = 0; if (SCROLLY) return; drag = { x: e.clientX, y: e.clientY, id: e.pointerId, touch: e.pointerType === 'touch' }; });
    stageEl.addEventListener('pointermove', function(e){
      if (!drag) return;
      var dv = (drag.touch || H) ? (drag.x - e.clientX) : (drag.y - e.clientY);
      moved += Math.abs(dv);
      if (moved > 6 && !drag.cap){ drag.cap = true; try { stageEl.setPointerCapture(drag.id); } catch(_){} stageEl.classList.add('dragging'); }
      if (drag.cap) to(target + dv / DRAG_UNITS * (drag.touch ? 1.4 : 1));
      drag.x = e.clientX; drag.y = e.clientY;
    });
    function up(){ if (drag && drag.cap){ to(Math.round(target)); rest = target; } drag = null; setTimeout(function(){ stageEl.classList.remove('dragging'); }, 0); }
    stageEl.addEventListener('pointerup', up); stageEl.addEventListener('pointercancel', up);
    /* a drag that moved must not open the card it ended on */
    cards.forEach(function(c, i){
      c.addEventListener('click', function(e){
        if (moved > 6){ e.preventDefault(); return; }
        if (Math.round(turn) !== i + 1){ e.preventDefault(); go(i + 1); }   /* first tap brings a card to the front */
      });
    });
    stageEl.addEventListener('keydown', function(e){
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { to(Math.round(target) + 1); rest = target; }
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { to(Math.round(target) - 1); rest = target; }
      else if (e.key === 'Enter' && turn >= 1){ var a = cards[active]; if (a && a.href) location.href = a.href; }
      else return;
      e.preventDefault();
    });
    idxBtns.forEach(function(b){ b.addEventListener('click', function(){ go(+b.getAttribute('data-i') + 1); }); });

    /* films play only while the wheel is on screen, and only the front card's */
    if ('IntersectionObserver' in window){
      var vio = new IntersectionObserver(function(es){
        vis = es[0].isIntersecting;
        if (vis) syncVideos(); else videos.forEach(function(v){ v.pause(); });
      }, { threshold: SCROLLY ? 0 : .15 });
      vio.observe(section); section.__wheelIO = vio;   /* retain */
    } else { vis = true; syncVideos(); }

    /* language switch: new label, card captions and action text without rebuilding the wheel */
    function update(o){
      if (o.label != null){ labelEl.textContent = o.label; stageEl.setAttribute('aria-label', o.label); }
      if (o.hint != null && hint) hint.textContent = o.hint;
      if (o.items) o.items.forEach(function(it, i){
        if (!items[i]) return;
        if (it.sub != null) items[i].sub = it.sub;
        if (it.desc != null) items[i].desc = it.desc;
        if (it.stats != null) items[i].stats = it.stats;
        if (it.eyebrow != null) items[i].eyebrow = it.eyebrow;
        if (it.title != null){ items[i].title = it.title; if (idxBtns[i]) idxBtns[i].textContent = it.title; cards[i].setAttribute('aria-label', it.title); }
        if (it.html != null){ var f = faces[i], keep = f.querySelector('.wheel-act'), ring = f.querySelector('.beam-ring'); f.innerHTML = it.html; if (keep) f.appendChild(keep); if (ring) f.appendChild(ring); }
      });
      if (o.action != null){ opt.action = o.action; [].forEach.call(section.querySelectorAll('.wheel-act span'), function(sp){ sp.textContent = o.action; }); }
      var a = active; active = -1; setActive(a < 0 ? 0 : a);
    }
    return { to: to, update: update };
  };
})();
