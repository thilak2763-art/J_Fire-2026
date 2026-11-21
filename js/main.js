/* =====================================================================
   J FIRE SAFETY SYSTEM · MAIN SCRIPT
   Menu, preloader, scroll, dots, counters, contact form, page content.
   Change links, images and text in config.js, not here.
   ===================================================================== */
(function () {
  "use strict";
  var S = SITE, page = document.body.dataset.page;
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function u(p) { return /^(https?:|data:)/.test(p) ? p : S.BASE + p; }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }

  /* ---------- Lucide icons (outline) ---------- */
  var IC = {
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
    briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    package: '<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="m7.5 4.27 9 5.15"/>',
    mail: '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    arrow: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>'
  };
  function ico(n) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + IC[n] + '</svg>'; }
  var BRANDS = {"Instagram": "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z", "Facebook": "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", "LinkedIn": "M4 9h4v12H4zM6 3a2.2 2.2 0 1 1 0 4.4A2.2 2.2 0 0 1 6 3zm5 6h3.8v1.7c.6-1 1.9-2 3.9-2 4 0 4.3 2.6 4.3 6V21h-4v-5.5c0-1.4 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4z", "X": "M17.5 3h3.2l-7 8 8.3 10h-6.5l-5-6.3L4.800 21H1.600l7.500-8.600L1.200 3h6.600l4.600 5.800zm-1.100 16h1.800L7.500 4.900H5.600z", "WhatsApp": "M12 2a10 10 0 0 0-8.600 15L2 22l5.200-1.400A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.200 14.800l-.4-.2-3 .8.8-2.900-.2-.4A8 8 0 0 1 12 4zm-3 3.500c-.3 0-.7.1-1 .5-.4.500-1 1.300-1 2.600 0 1.400 1 2.700 1.200 2.900.2.200 2 3.200 5 4.300 2.500.9 3 .7 3.500.7.600-.1 1.800-.8 2-1.500.3-.7.3-1.300.2-1.500-.1-.1-.3-.2-.7-.4l-1.700-.8c-.3-.1-.5-.1-.7.2l-.8 1c-.1.200-.3.200-.6.100-.9-.4-1.700-.9-2.400-1.600-.6-.6-1.100-1.300-1.400-1.900-.1-.3 0-.4.200-.6l.5-.6.300-.5c.1-.2 0-.4 0-.5l-.8-2c-.2-.5-.4-.5-.6-.5H9z", "YouTube": "M21.600 7.200a2.500 2.500 0 0 0-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800zM10 15V9l5.200 3z"};

  /* ---------- Shared components: header, side menu, contact form, footer ---------- */
  function navLink(n, cls) {
    return '<a class="' + cls + '" data-id="' + n.id + '" href="' + n.href + '"' + (n.blank ? ' target="_blank" rel="noopener"' : '') +
      (n.action ? ' data-action="' + n.action + '"' : '') + (cls === "ric" ? ' aria-label="' + n.label + '" title="' + n.label + '"' : '') + '>' +
      ico(n.icon) + (cls === "mi" ? '<span>' + n.label + '</span>' : '') + '</a>';
  }
  function byId(id) { return S.NAV.filter(function (n) { return n.id === id; })[0]; }
  function headerHTML() {
    var tl = ["about", "products", "projects", "clients"].map(function (id) {
      var n = byId(id); return '<a data-top="' + id + '" href="' + n.href + '"' + (n.blank ? ' target="_blank" rel="noopener"' : '') + '>' + n.label + '</a>';
    }).join("");
    return '<header id="hd"><div class="top"><span>Fire &amp; safety equipment and services</span><span>Installation · Servicing · Supply</span></div>' +
      '<nav class="mn" aria-label="Top"><div class="nl">' + tl + '</div>' +
      '<a class="nc" href="index.html" aria-label="J Fire Safety System home"><img class="brand" alt="J Fire Safety System" src="' + u(S.IMG.logo) + '"></a>' +
      '<button class="mt" id="mt" aria-expanded="false" aria-controls="sb" aria-label="Open menu">' + ico("menu") + '<span>Menu</span></button></nav></header>';
  }
  function sideHTML() {
    return '<div id="ov"></div><aside id="sb" aria-label="Site menu" aria-hidden="true"><div class="rail">' +
      '<a class="rl" href="index.html" aria-label="Home"><img alt="" src="' + u(S.IMG.mark) + '"></a><div class="ri">' +
      S.NAV.map(function (n) { return navLink(n, "ric"); }).join("") + '</div></div>' +
      '<div class="pan"><div class="ph2"><img class="pl" alt="J Fire Safety System" src="' + u(S.IMG.logoWhite) + '"><span class="mh">MENU</span>' +
      '<button class="cl" id="cl" aria-label="Close menu">' + ico("x") + '</button></div>' +
      '<nav aria-label="Main">' + S.NAV.map(function (n) { return navLink(n, "mi"); }).join("") + '</nav></div></aside>';
  }
  function contactHTML() {
    return '<div class="cm" id="cm" aria-hidden="true"><div class="cb" role="dialog" aria-modal="true" aria-labelledby="ct">' +
      '<button class="cl" id="cc" aria-label="Close contact form">' + ico("x") + '</button>' +
      '<h2 class="h2" id="ct">Contact us</h2><p class="cp">Leave your details and we will call you back.</p>' +
      '<form id="cf" novalidate><label>Name<input name="name" required autocomplete="name"></label>' +
      '<label>Phone number<input name="phone" type="tel" required inputmode="tel" autocomplete="tel"></label>' +
      '<label>Email (optional)<input name="email" type="email" autocomplete="email"></label>' +
      '<input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">' +
      '<button class="btn" type="submit">Submit</button><p id="cs" role="status"></p></form>' + quickLinks() + '</div></div>';
  }
  function wa(n) { return "https://wa.me/" + n.number; }
  function quickLinks() {
    return '<div class="ql">' + S.WHATSAPP.map(function (n) { return '<a href="' + wa(n) + '" target="_blank" rel="noopener">WhatsApp ' + esc(n.label) + '</a>'; }).join("") +
      '<a href="' + S.JUSTDIAL + '" target="_blank" rel="noopener">Justdial</a></div>';
  }
  function footerHTML() {
    var s = S.SOCIAL, L = [["Instagram", s.instagram, "#E4405F"], ["Facebook", s.facebook, "#1877F2"], ["LinkedIn", s.linkedin, "#0A66C2"],
      ["X", s.x, "#000000"], ["YouTube", s.youtube, "#FF0000"]];
    return '<footer class="ft" id="contact"><img class="fm" alt="J Fire Safety System" src="' + u(S.IMG.logo) + '">' +
      '<div class="soc">' + L.map(function (x) {
        return '<a href="' + x[1] + '" target="_blank" rel="noopener" aria-label="' + x[0] + '"><svg viewBox="0 0 24 24" fill="' + x[2] + '"><path d="' + BRANDS[x[0]] + '"/></svg></a>';
      }).join("") + '<a class="jd" href="' + S.JUSTDIAL + '" target="_blank" rel="noopener" aria-label="Justdial"><img alt="Justdial" src="' + u(S.IMG.justdial) + '" onerror="var b=document.createElement(\'b\');b.textContent=\'jd\';this.replaceWith(b)"></a></div>' +
      '<div class="was">' + S.WHATSAPP.map(function (n) {
        return '<a class="wa" href="' + wa(n) + '" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="#25D366"><path d="' + BRANDS.WhatsApp + '"/></svg>' + esc(n.label) + '</a>';
      }).join("") + '</div><div class="fb"><p class="copy">© 2021 J Fire Safety System</p>' +
      '<a class="map" href="' + S.MAP_URL + '" target="_blank" rel="noopener" aria-label="Open our location in Google Maps">' + ico("pin") + '<span>Google Maps</span>' +
      '<img alt="" src="' + u(S.IMG.map) + '" onerror="this.remove()"></a></div></footer>';
  }
  document.body.insertAdjacentHTML("afterbegin", headerHTML() + sideHTML() + contactHTML());
  document.body.insertAdjacentHTML("beforeend", footerHTML());

  /* ---------- Preloader ---------- */
  var pre = $("#pre");
  if (pre) {
    $("img", pre).src = u(S.IMG.logo);
    var hide = function () { pre.classList.add("out"); };
    window.addEventListener("load", function () { setTimeout(hide, 500); });
    setTimeout(hide, 4000);
  }

  /* ---------- Header: solid on scroll ---------- */
  var hd = $("#hd");
  function onScroll() { hd.classList.toggle("solid", window.scrollY > 40); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  /* keep page content clear of the fixed header, whatever its height */
  var root = document.documentElement;
  function setHdr() { if (!hd.classList.contains("solid")) root.style.setProperty("--hdr", hd.offsetHeight + "px"); }
  setHdr(); window.addEventListener("resize", setHdr); window.addEventListener("load", setHdr);

  /* ---------- Active state (rail + panel stay in sync) ---------- */
  var current = page === "about" || page === "projects" || page === "products" || page === "clients" ? page : "";
  function setActive(id) {
    $$("[data-id]").forEach(function (a) {
      var on = a.dataset.id === id; a.classList.toggle("on", on);
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
    $$("[data-top]").forEach(function (a) { a.classList.toggle("on", a.dataset.top === id); });
  }
  setActive(current);
  if (page === "index" && "IntersectionObserver" in window) {
    var vis = {};
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) { vis[e.target.id] = e.isIntersecting; });
      setActive(vis.vision ? "vision" : "");
    }, { rootMargin: "-40% 0px -40% 0px" });
    ["vision"].forEach(function (id) { var el = document.getElementById(id); if (el) so.observe(el); });
  }

  /* ---------- Side menu open / close ---------- */
  var sb = $("#sb"), ov = $("#ov"), mt = $("#mt");
  function openMenu() {
    sb.classList.add("open"); ov.classList.add("open"); sb.setAttribute("aria-hidden", "false");
    mt.setAttribute("aria-expanded", "true"); document.body.style.overflow = "hidden";
    setTimeout(function () { $("#cl").focus(); }, 60);
  }
  function closeMenu(refocus) {
    sb.classList.remove("open"); ov.classList.remove("open"); sb.setAttribute("aria-hidden", "true");
    mt.setAttribute("aria-expanded", "false"); document.body.style.overflow = "";
    if (refocus) mt.focus();
  }
  mt.addEventListener("click", openMenu);
  $("#cl").addEventListener("click", function () { closeMenu(true); });
  ov.addEventListener("click", function () { closeMenu(false); });

  /* ---------- Contact form ---------- */
  var cm = $("#cm"), cs = $("#cs");
  function openContact() { cm.classList.add("open"); cm.setAttribute("aria-hidden", "false"); setActive("contact"); setTimeout(function () { $("#cf input").focus(); }, 60); }
  function closeContact() {
    cm.classList.remove("open"); cm.setAttribute("aria-hidden", "true");
    var cur = current; if (page === "index") cur = ""; setActive(cur);
  }
  $("#cc").addEventListener("click", closeContact);
  cm.addEventListener("click", function (e) { if (e.target === cm) closeContact(); });
  $("#cf").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target, name = f.name.value.trim(), phone = f.phone.value.trim();
    if (f.website.value) return;
    if (name.length < 2) { cs.textContent = "Please enter your name."; return; }
    if (!/^[0-9+\-() ]{7,16}$/.test(phone)) { cs.textContent = "Please enter a valid phone number."; return; }
    if (/PASTE_YOUR/.test(S.SHEET_URL)) { cs.textContent = "The form is not connected yet. Add the Google Sheet link in config.js."; return; }
    cs.textContent = "Sending...";
    fetch(S.SHEET_URL, { method: "POST", mode: "no-cors", body: new URLSearchParams({ name: name, phone: phone, email: f.email.value.trim() }) })
      .then(function () { cs.textContent = "Thank you. We will contact you soon."; f.reset(); })
      .catch(function () { cs.textContent = "Could not send. Please try again."; });
  });

  /* ---------- Clicks: contact buttons, same-page scroll, close menu ---------- */
  document.addEventListener("click", function (e) {
    var c = e.target.closest('[data-action="contact"]');
    if (c) { e.preventDefault(); closeMenu(false); openContact(); return; }
    var a = e.target.closest("#sb a[href]");
    if (!a) return;
    var h = a.getAttribute("href");
    if (page === "index" && h.indexOf("index.html#") === 0) {
      e.preventDefault(); closeMenu(false);
      var t = document.getElementById(h.split("#")[1]); if (t) t.scrollIntoView({ behavior: "smooth" });
    } else { closeMenu(false); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { if (cm.classList.contains("open")) closeContact(); else if (sb.classList.contains("open")) closeMenu(true); }
    if (e.key === "Tab" && sb.classList.contains("open")) {
      var f = $$("#sb a, #sb button").filter(function (x) { return x.offsetParent !== null; });
      if (!f.length) return; var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- Backgrounds (images + videos) ---------- */
  $$("[data-bg]").forEach(function (el) { el.style.backgroundImage = "url('" + u(S.IMG[el.dataset.bg]) + "')"; });
  $$("[data-video]").forEach(function (el) {
    var v = document.createElement("video"); v.autoplay = v.muted = v.loop = v.playsInline = true; v.setAttribute("muted", ""); v.preload = "metadata";
    var s = document.createElement("source"); s.src = u(S.VIDEO[el.dataset.video]); s.type = "video/mp4";
    s.addEventListener("error", function () { v.remove(); }); v.appendChild(s); el.appendChild(v);
  });
  var hl = $("#heroLogo");
  if (hl) { hl.onerror = function () { hl.parentNode.remove(); }; hl.src = u(S.IMG.heroLogo); }
  $$("[data-contact]").forEach(function (el) { el.textContent = S.CONTACT[el.dataset.contact]; });

  /* ---------- Page content built from config.js ---------- */
  var pt = $("#pt");
  if (pt) pt.innerHTML = PROJECTS.map(function (p) {
    return '<a class="pc" href="projects.html#' + p.id + '"><div class="pi" style="background-image:url(\'' + u(p.img) + '\')"></div><b>' + esc(p.name) + '</b><span>' + esc(p.tag) + '</span></a>';
  }).join("");
  var pg = $("#pg");
  if (pg) pg.innerHTML = PRODUCTS.map(function (p) {
    return '<a class="pc" href="products.html#' + p.id + '"><div class="pi" style="background-image:url(\'' + u(p.img) + '\')"></div><b>' + esc(p.name) + '</b><span>' + esc(p.desc.split(".")[0]) + '.</span><em>View details</em></a>';
  }).join("");
  var mq = $("#mq");
  if (mq) {
    var set = S.VENDORS.map(function (c) {
      return '<div class="ct"><img alt="' + esc(c[0]) + '" src="' + u("Media/Image/Vendors/" + c[1] + ".png") + '" onerror="var s=document.createElement(\'span\');s.textContent=this.alt;this.replaceWith(s)"></div>';
    }).join("");
    mq.innerHTML = set + set.replace(/<div class="ct">/g, '<div class="ct" aria-hidden="true">');
  }
  var tm = $("#tm");
  if (tm) tm.innerHTML = S.TEAM.map(function (t, i) {
    return '<div class="tm"><div class="ph" data-img="' + u(t.img) + '">' + String.fromCharCode(65 + i) + '</div><b class="lab" style="font-weight:600">' + esc(t.name) + '</b><span style="display:block;font-size:13px;opacity:.6">' + esc(t.role) + '</span></div>';
  }).join("");
  var ctrack = $("#ctrack");
  if (ctrack) {
    ctrack.innerHTML = CLIENT_LIST.map(function (c, i) {
      return '<div class="cc"><div class="cim" data-img="' + u(c.img || "Media/Image/Clients/client" + (i + 1) + ".png") + '">' + esc(c.name.charAt(0)) + '</div><b>' + esc(c.name) + '</b><span>' + esc(c.sector) + '</span><p>' + esc(c.work) + '</p></div>';
    }).join("");
    var cc = $("#ccount"); if (cc) cc.textContent = ("0" + CLIENT_LIST.length).slice(-2);
  }
  $$(".ph[data-img],.cim[data-img]").forEach(function (p) {
    var im = new Image(); im.onload = function () { p.style.backgroundImage = "url('" + p.dataset.img + "')"; p.textContent = ""; }; im.src = p.dataset.img;
  });

  /* ---------- Scroll bars: dots + centred start ---------- */
  $$(".track[data-dots]").forEach(function (t) {
    var box = document.getElementById(t.dataset.dots), cs2 = t.children, d = [];
    Array.prototype.forEach.call(cs2, function (c, i) {
      var s = document.createElement("i"); s.setAttribute("role", "button"); s.setAttribute("aria-label", "Go to item " + (i + 1));
      s.onclick = function () { c.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" }); }; box.appendChild(s); d.push(s);
    });
    function up() {
      var mid = t.scrollLeft + t.clientWidth / 2, k = 0, m = 1e9;
      Array.prototype.forEach.call(cs2, function (c, i) { var x = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid); if (x < m) { m = x; k = i; } });
      d.forEach(function (s, i) { s.className = i === k ? "on" : ""; });
    }
    t.addEventListener("scroll", up, { passive: true });
    if (t.hasAttribute("data-center")) { var mid0 = (t.scrollWidth - t.clientWidth) / 2; if (t.scrollTo) t.scrollTo({ left: mid0, behavior: "instant" }); else t.scrollLeft = mid0; }
    up();
  });

  /* ---------- Counters ---------- */
  var ns = $$("[data-n]");
  function run(el) {
    var t = +el.dataset.n, n = 0, st = Math.max(1, Math.ceil(t / 60));
    var id = setInterval(function () { n += st; if (n >= t) { n = t; clearInterval(id); } el.textContent = n.toLocaleString() + "+"; }, 25);
  }
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { run(x.target); io.unobserve(x.target); } }); }, { threshold: 0.5 });
    ns.forEach(function (n) { io.observe(n); });
  } else { ns.forEach(run); }

  /* ---------- Detail pages (products.html and projects.html) ---------- */
  function renderDetail(D, onList) {
    var id = location.hash.slice(1), p = D.filter(function (x) { return x.id === id; })[0];
    if (!p && onList) { onList(); return; }
    p = p || D[0];
    if (onList) { $("#plist").hidden = true; $("#dview").hidden = false; }
    $("#cname").textContent = p.name; $("#ptitle").textContent = p.name; $("#pdesc").textContent = p.desc;
    var im = $("#pim"); im.innerHTML = "";
    var g = document.createElement("img"); g.alt = p.name;
    g.onerror = function () { im.innerHTML = ""; im.textContent = p.name; }; g.src = u(p.img); im.appendChild(g);
    $("#pspec").innerHTML = p.spec.map(function (r) { return "<dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd>"; }).join("");
    var lists = p.lists || [["Key features", p.feat]];
    $("#plists").innerHTML = lists.map(function (l) {
      return '<h2 class="lab sh">' + esc(l[0]) + '</h2><ul class="f">' + l[1].map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>";
    }).join("");
    $("#ol").innerHTML = D.map(function (q) { return '<a href="#' + q.id + '"' + (q === p ? ' class="on" aria-current="page"' : "") + ">" + esc(q.name) + "</a>"; }).join("");
    document.title = p.name + " – J Fire Safety System";
  }
  function projectList() {
    $("#plist").hidden = false; $("#dview").hidden = true; document.title = "Projects – J Fire Safety System";
    var P = PROJECTS, tags = P.map(function (p) { return p.tag; }).filter(function (t, i, a) { return a.indexOf(t) === i; });
    $("#ptabs").innerHTML = '<button class="on" data-f="all">All</button>' + tags.map(function (t) { return '<button data-f="' + esc(t) + '">' + esc(t) + "</button>"; }).join("");
    function A(p, cls, inner) { return '<a class="pj ' + cls + '" href="projects.html#' + p.id + '" data-cat="' + esc(p.tag) + '">' + inner + "</a>"; }
    function bgi(p) { return "background-image:url('" + u(p.img) + "')"; }
    function meta(p) { return '<div class="meta"><div><small>Industry</small><b>' + esc(p.industry) + '</b></div><div><small>Type</small><b>' + esc(p.type) + "</b></div></div>"; }
    var a = P[0];
    $("#pl").innerHTML =
      A(a, "feat", '<div class="fi" style="' + bgi(a) + '"></div><div class="fc"><h3>' + esc(a.name) + '</h3><span class="pill">' + esc(a.tag) + '</span></div><i class="arr">' + ico("arrow") + "</i>") +
      P.slice(1, 3).map(function (p) { return A(p, "row2", "<div><h3>" + esc(p.name) + '</h3><span class="pill">' + esc(p.tag) + "</span>" + meta(p) + '</div><div class="ri2" style="' + bgi(p) + '"></div>'); }).join("") +
      '<div class="g2">' + P.slice(3).map(function (p) { return A(p, "", '<div class="gi" style="' + bgi(p) + '"></div><h3>' + esc(p.name) + '</h3><span class="pill">' + esc(p.tag) + "</span>" + meta(p)); }).join("") + "</div>";
    $$("#ptabs button").forEach(function (b) {
      b.onclick = function () {
        $$("#ptabs button").forEach(function (x) { x.classList.toggle("on", x === b); });
        $$("#pl .pj").forEach(function (j) { j.hidden = b.dataset.f !== "all" && j.dataset.cat !== b.dataset.f; });
      };
    });
  }
  if (page === "products") { renderDetail(PRODUCTS); window.addEventListener("hashchange", function () { renderDetail(PRODUCTS); window.scrollTo({ top: 0, behavior: "smooth" }); }); }
  if (page === "projects") { renderDetail(PROJECTS, projectList); window.addEventListener("hashchange", function () { renderDetail(PROJECTS, projectList); window.scrollTo({ top: 0, behavior: "smooth" }); }); }
})();
