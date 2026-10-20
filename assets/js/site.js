/* SHEMIRANI — shared page behaviour: language (English / Persian), label decode,
   and the site sidebar (built from assets/js/designs.js, opened by the MENU pill or ⌘K / Ctrl+K). */
(function(){
  'use strict';
  var root = document.documentElement;
  var BASE = root.getAttribute('data-base') || '';
  var RM = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var KEY = 'shemirani-lang';
  var CHARS = { en: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', fa: 'ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی' };
  function store(k, v){ try { localStorage.setItem(k, v); } catch(e){} }
  function load(k){ try { return localStorage.getItem(k); } catch(e){ return null; } }

  var SM = window.SM = {
    base: BASE, RM: RM,
    lang: root.lang === 'fa' ? 'fa' : 'en',
    designs: window.SHEMIRANI_DESIGNS || [], collections: window.SHEMIRANI_COLLECTIONS || [],
    t: function(o){ return o ? (typeof o === 'string' ? o : (o[SM.lang] || o.en)) : ''; },
    url: function(p){ return BASE + p; },
    design: function(id){ return SM.designs.filter(function(d){ return d.id === id; })[0]; },
    inCollection: function(c){ return SM.designs.filter(function(d){ return d.collection === c; }); },
    listeners: [], onLang: function(f){ SM.listeners.push(f); },
    esc: function(s){ return String(s).replace(/[&<>"]/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  };

  /* ---------- decoding labels (.t) ---------- */
  var labels = [];
  function txt(el){ return (SM.lang === 'fa' && el.hasAttribute('data-fa')) ? el.getAttribute('data-fa') : el.dataset.en; }
  SM.collectLabels = function(){
    [].forEach.call(document.querySelectorAll('.t'), function(el){
      if (labels.indexOf(el) > -1) return;
      el.dataset.en = el.dataset.en || el.textContent; el.dataset.text = txt(el); el.textContent = el.dataset.text; labels.push(el);
      var host = el.closest('a, button');
      if (host && !host._dec){ host._dec = 1; host.addEventListener('pointerenter', function(){ SM.decode(el); }); }
    });
  };
  SM.labels = labels;
  SM.reserve = function(){
    var w = [];
    labels.forEach(function(el){ el.style.width = ''; });
    labels.forEach(function(el){ w.push(el.getBoundingClientRect().width); });
    labels.forEach(function(el, i){ if (w[i]) el.style.width = (Math.ceil(w[i] * 100) / 100) + 'px'; });
  };
  SM.settle = function(el){
    if (el._raf){ cancelAnimationFrame(el._raf); el._raf = 0; }
    if (el._t){ clearTimeout(el._t); el._t = 0; }
    el.textContent = el.dataset.text;
  };
  SM.decode = function(el, dur){
    var text = el.dataset.text || '', n = text.length, set = CHARS[SM.lang];
    SM.settle(el); if (RM) return;
    var D = dur || 400, t0 = performance.now(), lastRoll = 0, rand = new Array(n);
    function roll(){ for (var i = 0; i < n; i++) rand[i] = set.charAt((Math.random() * set.length) | 0); }
    roll();
    function step(now){
      var p = Math.min(1, (now - t0) / D), front = p * n, out = '', i;
      if (now - lastRoll > 45){ roll(); lastRoll = now; }
      for (i = 0; i < n; i++){
        var c = text.charAt(i);
        if (i < front) out += c; else if (i < front + 3.6) out += (c === ' ' ? ' ' : rand[i]); else break;
      }
      el.textContent = out;
      if (p < 1) el._raf = requestAnimationFrame(step); else SM.settle(el);
    }
    el._raf = requestAnimationFrame(step);
    el._t = setTimeout(function(){ SM.settle(el); }, D + 500);
  };
  SM.relabel = function(el, en, fa){
    el.dataset.en = en; el.setAttribute('data-fa', fa); el.dataset.text = txt(el);
    SM.settle(el); el.style.width = '';
    el.style.width = Math.ceil(el.getBoundingClientRect().width * 100) / 100 + 'px';
    SM.decode(el);
  };

  /* ---------- toast ---------- */
  var toast, toastT;
  SM.notify = function(msg){
    if (!toast){ toast = document.createElement('div'); toast.className = 'sb-toast'; toast.setAttribute('role', 'status'); toast.innerHTML = '<i></i><span></span>'; document.body.appendChild(toast); }
    toast.querySelector('span').textContent = msg; toast.classList.add('visible');
    clearTimeout(toastT); toastT = setTimeout(function(){ toast.classList.remove('visible'); }, 2700);
  };

  /* ---------- sidebar ---------- */
  var ICON = {
    home: '<svg viewBox="0 0 24 24" class="solid"><path d="m12 2 11 9h-3v11h-6v-7h-4v7H4V11H1Z"/></svg>',
    gem: '<svg viewBox="0 0 24 24"><path d="M6 3h12l4 5-10 13L2 8Z"/><path d="M2 8h20M9 3 7.5 8 12 21 16.5 8 15 3"/></svg>',
    story: '<svg viewBox="0 0 24 24"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5Z"/><path d="M4 21.5A2.5 2.5 0 0 1 6.5 19H20v3H6.5"/><path d="M9 7h7M9 11h5"/></svg>'
  };
  function sidebarHTML(){
    var here = root.getAttribute('data-page') || 'home', h = '';
    function item(id, href, en, fa, icon, extra, group){
      return '<a class="nav-item' + (id === here ? ' active' : '') + '" data-id="' + id + '" data-group="' + group + '" href="' + href + '" data-l-en="' + SM.esc(en) + '" data-l-fa="' + SM.esc(fa) + '">' + icon +
        '<span class="item-label"></span>' + (extra || '') + '<span class="tooltip"></span></a>';
    }
    h += '<div class="menu-caption" data-group="site" data-fa="منو">Menu</div>';
    h += item('home', SM.url('index.html'), 'Home', 'خانه', ICON.home, '', 'site');
    SM.designs.forEach(function(d){
      h += item('design-' + d.id, SM.url('designs/' + d.id + '/index.html'), d.name, d.name, ICON.gem, d.isNew ? '<span class="badge" data-fa="جدید">New</span>' : '', 'site');
    });
    h += item('story', SM.url('index.html#story'), 'Our story', 'داستان ما', ICON.story, '', 'site');
    h += '<div class="menu-caption" data-group="col" data-fa="مجموعه‌ها">Collections</div>';
    SM.collections.forEach(function(c){
      var n = SM.inCollection(c.id).length;
      var badge = n ? '<span class="badge">' + n + '</span>' : '<span class="badge soon" data-fa="به‌زودی">Soon</span>';
      h += item('col-' + c.id, SM.url('collections/' + c.id + '/index.html'), c.en, c.fa, '<svg viewBox="0 0 100 100" class="v100">' + c.icon + '</svg>', badge, 'col');
    });
    return '<div class="sb-scrim" aria-hidden="true"></div>' +
      '<aside class="sidebar" id="sidebar" aria-label="Site menu" aria-hidden="true">' +
      '<button class="sb-close" type="button" aria-label="Close menu"><span>ESC</span><b>×</b></button>' +
      '<button class="collapse-toggle" type="button" aria-expanded="true" aria-label="Collapse menu"><svg viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg></button>' +
      '<a class="sb-brand" href="' + SM.url('index.html') + '" aria-label="SHEMIRANI, home"><span class="sb-mark"><img src="' + SM.url('assets/img/brand/sm-monogram.png') + '" alt=""></span><span class="sb-name"><b>SHEMIRANI</b><small data-fa="طراحی و ساخت جواهر">Jewelry design &amp; craft</small></span></a>' +
      '<div class="search-box"><svg viewBox="0 0 24 24"><circle cx="10.7" cy="10.7" r="7.3"/><path d="m16 16 4.6 4.6"/></svg><input id="sb-search" type="search" aria-label="Search the menu" autocomplete="off"><kbd>⌘ K</kbd></div>' +
      '<div class="sb-scroll"><nav class="navigation" aria-label="Pages"><div class="active-track" aria-hidden="true"></div>' + h + '</nav><p class="no-results" hidden data-fa="موردی پیدا نشد">Nothing found</p></div>' +
      '<div class="sidebar-footer">' +
        '<a class="footer-item inquire" href="https://t.me/abbasamrahbari" target="_blank" rel="noopener"><span class="gold-icon"><svg viewBox="0 0 24 24"><path d="M21.5 3.5 2.5 10.8l6.1 2.1 2.2 6.6 3-4 4.8 3.5z"/><path d="M8.6 12.9 21.5 3.5"/></svg></span><span class="item-label" data-fa="درخواست و پرسش در تلگرام">Inquire on Telegram</span><svg class="footer-arrow" viewBox="0 0 24 24"><path d="M20 12H4m6-6-6 6 6 6"/></svg><span class="tooltip">@abbasamrahbari</span></a>' +
        '<button class="footer-item langbtn" type="button" data-setlang><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg><span class="item-label" data-fa="English · تغییر زبان">فارسی · Change language</span><span class="tooltip" data-fa="English">فارسی</span></button>' +
      '</div></aside>';
  }

  var sb, track, items, caps, search, toggle, menuBtns;
  function updateTrack(){
    if (!track) return;
    var c = items.filter(function(i){ return i.classList.contains('active') && !i.hidden; })[0];
    track.style.opacity = c ? '1' : '0';
    if (c){ track.style.height = c.offsetHeight + 'px'; track.style.transform = 'translateY(' + c.offsetTop + 'px)'; }
  }
  SM.updateTrack = updateTrack;
  function sbLabels(){
    if (!sb) return;
    items.forEach(function(i){
      var l = i.getAttribute(SM.lang === 'fa' ? 'data-l-fa' : 'data-l-en');
      i.querySelector('.item-label').textContent = l;
      var b = i.querySelector('.badge:not(.soon)');
      i.querySelector('.tooltip').textContent = b ? l + ' · ' + b.textContent : l;
    });
    search.placeholder = SM.lang === 'fa' ? 'جست‌وجو' : 'Search';
    sb.setAttribute('aria-label', SM.lang === 'fa' ? 'منوی سایت' : 'Site menu');
  }
  function setOpen(open){
    root.classList.toggle('sb-open', open);
    sb.setAttribute('aria-hidden', String(!open));
    menuBtns.forEach(function(m){
      m.setAttribute('aria-expanded', String(open));
      var t = m.querySelector('.t'); if (t) SM.relabel(t, open ? 'CLOSE' : 'MENU', open ? 'بستن' : 'منو');
    });
    if (open){ requestAnimationFrame(updateTrack); setTimeout(function(){ var a = sb.querySelector('.nav-item.active') || items[0]; try { a.focus({ preventScroll: true }); } catch(e){} }, 120); }
    else { search.value = ''; filter(); }
  }
  SM.openMenu = function(){ setOpen(true); };
  function setCollapsed(c){
    sb.classList.toggle('collapsed', c);
    toggle.setAttribute('aria-expanded', String(!c));
    var l = c ? (SM.lang === 'fa' ? 'باز کردن منو' : 'Expand menu') : (SM.lang === 'fa' ? 'جمع کردن منو' : 'Collapse menu');
    toggle.setAttribute('aria-label', l); toggle.title = l;
    store('shemirani-sidebar-collapsed', String(c));
    if (c){ search.value = ''; filter(); search.blur(); }
    setTimeout(updateTrack, 760);
  }
  function norm(s){ return (s || '').replace(/ي/g, 'ی').replace(/ك/g, 'ک').replace(/‌/g, '').toLowerCase(); }
  function filter(){
    var q = norm(search.value.trim());
    items.forEach(function(i){
      var hit = !q || norm(i.getAttribute('data-l-en')).indexOf(q) > -1 || norm(i.getAttribute('data-l-fa')).indexOf(q) > -1;
      i.hidden = !hit; i.style.display = hit ? '' : 'none';
    });
    caps.forEach(function(c){ var g = c.getAttribute('data-group'); c.hidden = !items.some(function(i){ return !i.hidden && i.getAttribute('data-group') === g; }); });
    sb.querySelector('.no-results').hidden = items.some(function(i){ return !i.hidden; });
    updateTrack();
  }
  function buildSidebar(){
    var wrap = document.createElement('div'); wrap.innerHTML = sidebarHTML();
    while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
    sb = document.getElementById('sidebar'); track = sb.querySelector('.active-track');
    items = [].slice.call(sb.querySelectorAll('.nav-item')); caps = [].slice.call(sb.querySelectorAll('.menu-caption'));
    search = document.getElementById('sb-search'); toggle = sb.querySelector('.collapse-toggle');
    menuBtns = [].slice.call(document.querySelectorAll('[data-menu]'));
    menuBtns.forEach(function(m){ m.setAttribute('aria-controls', 'sidebar'); m.setAttribute('aria-expanded', 'false');
      m.addEventListener('click', function(e){ e.stopPropagation(); setOpen(!root.classList.contains('sb-open')); }); });
    document.querySelector('.sb-scrim').addEventListener('click', function(){ setOpen(false); });
    sb.querySelector('.sb-close').addEventListener('click', function(){ setOpen(false); if (menuBtns[0]) menuBtns[0].focus(); });
    toggle.addEventListener('click', function(){ setCollapsed(!sb.classList.contains('collapsed')); });
    search.addEventListener('input', filter);
    sb.querySelector('.search-box').addEventListener('click', function(){ if (sb.classList.contains('collapsed')){ setCollapsed(false); setTimeout(function(){ search.focus(); }, 350); } });
    search.addEventListener('keydown', function(e){ if (e.key === 'Enter'){ var f = items.filter(function(i){ return !i.hidden; })[0]; if (f){ e.preventDefault(); f.click(); } } });
    items.forEach(function(a){
      a.addEventListener('click', function(e){
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        items.forEach(function(b){ b.classList.toggle('active', b === a); });
        updateTrack();
        var href = a.getAttribute('href');
        setTimeout(function(){
          setOpen(false);
          var hash = href.split('#')[1], samePage = href.split('#')[0] === SM.url('index.html') && root.getAttribute('data-page') === 'home';
          if (hash && samePage){ var el = document.getElementById(hash); if (el) el.scrollIntoView({ behavior: RM ? 'auto' : 'smooth' }); }
          else if (!hash && samePage) window.scrollTo({ top: 0, behavior: RM ? 'auto' : 'smooth' });
          else location.href = href;
        }, RM ? 0 : 380);
      });
    });
    document.addEventListener('keydown', function(e){
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'){ e.preventDefault(); if (!root.classList.contains('sb-open')) setOpen(true); setCollapsed(false); setTimeout(function(){ search.focus(); }, 200); }
      if (e.key === 'Escape' && root.classList.contains('sb-open')){
        if (document.activeElement === search && search.value){ search.value = ''; filter(); return; }
        setOpen(false); if (menuBtns[0]) menuBtns[0].focus();
      }
    });
    sb.querySelector('.navigation').addEventListener('keydown', function(e){
      if (['ArrowDown', 'ArrowUp', 'Home', 'End'].indexOf(e.key) < 0) return;
      var vis = items.filter(function(i){ return !i.hidden; }), ix = vis.indexOf(document.activeElement);
      if (ix < 0) return; e.preventDefault();
      var n = e.key === 'Home' ? 0 : e.key === 'End' ? vis.length - 1 : (ix + (e.key === 'ArrowDown' ? 1 : -1) + vis.length) % vis.length;
      vis[n].focus();
    });
    if (window.ResizeObserver) new ResizeObserver(updateTrack).observe(sb.querySelector('.navigation'));
    setCollapsed(load('shemirani-sidebar-collapsed') === 'true');
  }

  /* ---------- language ---------- */
  var tr = [];
  function applyText(){
    [].forEach.call(document.querySelectorAll('[data-fa]:not(.t)'), function(el){
      if (tr.indexOf(el) < 0){ el.setAttribute('data-en', el.innerHTML); tr.push(el); }
    });
    tr.forEach(function(el){ if (el.isConnected) el.innerHTML = el.getAttribute(SM.lang === 'fa' ? 'data-fa' : 'data-en'); });
    labels.forEach(function(el){ el.dataset.text = txt(el); SM.settle(el); });
    sbLabels();
  }
  SM.applyText = applyText;
  SM.setLang = function(l, animate){
    SM.lang = l; root.lang = l; root.dir = l === 'fa' ? 'rtl' : 'ltr';
    store(KEY, l);
    SM.listeners.forEach(function(f){ f(l); });
    applyText(); SM.reserve(); updateTrack();
    if (animate){
      labels.forEach(function(el, i){ setTimeout(function(){ SM.decode(el); }, i * 20); });
      SM.notify(l === 'fa' ? 'زبان سایت فارسی شد' : 'Site language: English');
    }
  };
  document.addEventListener('click', function(e){
    var b = e.target.closest('[data-setlang]'); if (!b) return;
    e.preventDefault(); SM.setLang(SM.lang === 'fa' ? 'en' : 'fa', true);
  });

  /* ---------- boot (call SM.start() once the page has rendered its own content) ---------- */
  SM.start = function(opts){
    opts = opts || {};
    buildSidebar();
    SM.collectLabels();
    SM.listeners.forEach(function(f){ f(SM.lang); });
    applyText();
    function ready(){ SM.reserve(); updateTrack(); if (opts.onFonts) opts.onFonts(); }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(ready); else addEventListener('load', ready);
    var rt; addEventListener('resize', function(){ clearTimeout(rt); rt = setTimeout(function(){ SM.reserve(); updateTrack(); }, 160); });
  };
})();
