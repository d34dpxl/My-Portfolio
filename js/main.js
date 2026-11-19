(() => {
  "use strict";

  const SITE = window.SITE;
  if (!SITE) {
    console.warn("[SJK/OS] data.js missing or window.SITE undefined.");
    return;
  }

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const pad = n => String(n).padStart(2, "0");

  /* ==================================================================
   *  1. ICONS  (inline SVG, no external assets)
   * ================================================================== */

  const ICON = {
    welcome: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="5" width="26" height="18" fill="#C0C0C0" stroke="#000"/>
    <rect x="5" y="7" width="22" height="14" fill="#2A4A6B"/>
    <rect x="6" y="8" width="20" height="2" fill="#5A7A8F"/>
    <rect x="6" y="11" width="12" height="1" fill="#A8C8C7"/>
    <rect x="6" y="13" width="16" height="1" fill="#A8C8C7"/>
    <rect x="6" y="15" width="9"  height="1" fill="#A8C8C7"/>
    <rect x="12" y="23" width="8" height="3" fill="#808080" stroke="#000"/>
    <rect x="8"  y="26" width="16" height="2" fill="#C0C0C0" stroke="#000"/>
    </svg>`,

    projects: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 7 H12 L14 10 H29 V26 H3 Z" fill="#E6C55A" stroke="#000"/>
    <path d="M3 11 H29 V26 H3 Z" fill="#F0D77B" stroke="#000"/>
    <path d="M3 11 H29" stroke="#000"/>
    </svg>`,

    about: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="16" cy="11" r="5.5" fill="#E8D5B7" stroke="#000"/>
    <path d="M4 28 C4 21 9 17 16 17 C23 17 28 21 28 28 Z" fill="#4A6478" stroke="#000"/>
    </svg>`,

    contact: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="8" width="26" height="16" fill="#F2F2E0" stroke="#000"/>
    <path d="M3 8 L16 18 L29 8" fill="none" stroke="#000"/>
    <path d="M3 24 L12 17 M29 24 L20 17" fill="none" stroke="#000" stroke-width=".8"/>
    </svg>`,

    system: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="16" cy="16" r="13" fill="#4A6478" stroke="#000"/>
    <rect x="15" y="8" width="2" height="4" fill="#fff"/>
    <rect x="15" y="14" width="2" height="9" fill="#fff"/>
    </svg>`,

    folderSmall: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 7 H12 L14 10 H29 V26 H3 Z" fill="#E6C55A" stroke="#000"/>
    <path d="M3 11 H29 V26 H3 Z" fill="#F0D77B" stroke="#000"/>
    </svg>`,
  };

  /* ==================================================================
   *  2. WINDOW CONTENT RENDERERS
   * ================================================================== */

  const renderWelcome = () => {
    const mast = SITE.hero.titleLines.join(" ");
    const cta = SITE.hero.cta
    .map(c => {
      const target = c.href.replace(/^#/, "");
      return `<button class="btn ${c.variant === "primary" ? "primary" : "ghost"}"
      type="button" data-open="${target}">${c.label}</button>`;
    })
    .join("");

    const links = SITE.hero.links
    .map(l => `<a href="${l.href}"${l.rel ? ` rel="${l.rel}"` : ""}>${l.label}</a>`)
    .join("");

    return `
    <div class="welcome">
    <h1 class="w-name" data-slot="hero-title">${SITE.meta.name}</h1>
    <div class="w-role">${SITE.meta.role}</div>
    <div class="w-edu">BCA · Chandigarh University · 2023–2026</div>
    <blockquote class="w-mast">“${mast}”</blockquote>
    <p class="w-lede">${SITE.hero.lede}</p>
    <div class="w-cta">${cta}</div>
    <div class="w-status"><span class="dot"></span>${SITE.hero.status}</div>
    <div class="w-links">${links}</div>
    </div>
    `;
  };

  const renderProjects = () => {
    const items = SITE.projectsSection.items;
    const rows = items.map(p => `
    <article class="fm-item">
    <div class="fm-ico">${ICON.folderSmall}</div>
    <div class="fm-main">
    <h3 class="fm-title">${p.title}</h3>
    <div class="fm-meta">${p.meta}</div>
    <p class="fm-desc">${p.description}</p>
    <ul class="fm-tags">${p.tags.map(t => `<li>${t}</li>`).join("")}</ul>
    <div class="fm-actions">
    <a class="btn" href="${p.actions.live.href}" target="_blank" rel="noopener">${p.actions.live.label}</a>
    <a class="btn ghost" href="${p.actions.code.href}" target="_blank" rel="noopener">${p.actions.code.label}</a>
    </div>
    </div>
    </article>
    `).join("");

    return `
    <div class="fm">
    <div class="fm-menubar" aria-hidden="true">
    <span>File</span><span>Edit</span><span>View</span><span>Help</span>
    </div>
    <div class="fm-path">C:\\SJK\\Projects\\</div>
    <div class="fm-list" data-slot="project-list">${rows}</div>
    </div>
    `;
  };

  const renderAbout = () => {
    const a = SITE.about;
    return `
    <div class="sysinfo">
    <div class="group">
    <div class="group-label">Personal</div>
    <p class="lead" data-slot="about-lead">${a.lead}</p>
    </div>

    <div class="group">
    <div class="group-label">${a.highlightsHeading}</div>
    <ul class="kv">
    ${a.highlights.map(h => `<li>${h}</li>`).join("")}
    </ul>
    </div>

    <div class="group">
    <div class="group-label">${a.toolsHeading}</div>
    <ul class="tags">
    ${a.tools.map(t => `<li>${t}</li>`).join("")}
    </ul>
    </div>
    </div>
    `;
  };

  const renderContact = () => {
    const links = SITE.contact.links
    .map(l => `<a class="btn" href="${l.href}" target="_blank" rel="${l.rel || "noopener"}">${l.label}</a>`)
    .join("");

    return `
    <div class="mail">
    <div class="mail-toolbar">
    <a class="btn primary" href="mailto:${SITE.contact.email}">Send…</a>
    <span class="mail-toolbar-label">New Message</span>
    </div>

    <div class="mail-header">
    <div class="mail-field">
    <span class="lbl">From:</span>
    <span class="val">${SITE.meta.name}</span>
    </div>
    <div class="mail-field">
    <span class="lbl">To:</span>
    <span class="val"><a href="mailto:${SITE.contact.email}" data-slot="contact-email">${SITE.contact.email}</a></span>
    </div>
    <div class="mail-field">
    <span class="lbl">Subject:</span>
    <span class="val">${SITE.contact.heading}</span>
    </div>
    </div>

    <div class="mail-body">
    <p>Hi Saurav,</p>
    <p>I came across your portfolio and would like to get in touch.</p>
    <p>—</p>
    </div>

    <div class="mail-links">
    <span class="mail-links-label">Elsewhere:</span>
    ${links}
    </div>
    </div>
    `;
  };

  const renderSystem = () => {
    return `
    <div class="sysinfo">
    <div class="sys-hero">
    <div class="sys-logo-big">${SITE.brand.label}/OS</div>
    <div class="sys-version">v1.0</div>
    </div>

    <div class="group">
    <div class="group-label">Machine</div>
    <dl class="kv-grid">
    <dt>System</dt><dd>${SITE.brand.label}/OS 1.0</dd>
    <dt>Machine</dt><dd>SJK Personal Workstation</dd>
    <dt>Processor</dt><dd>Pentium-class</dd>
    <dt>Memory</dt><dd>4.0 MB</dd>
    <dt>Display</dt><dd>1024×768 · 16 colors</dd>
    <dt>Kernel</dt><dd>Vanilla JavaScript</dd>
    </dl>
    </div>

    <div class="group">
    <div class="group-label">Owner</div>
    <dl class="kv-grid">
    <dt>Name</dt><dd data-slot="footer-name">${SITE.footer.copyrightName}</dd>
    <dt>Field</dt><dd>${SITE.meta.role}</dd>
    <dt>Status</dt><dd>${SITE.hero.status}</dd>
    </dl>
    </div>

    <div class="group">
    <div class="group-label">Source</div>
    <a class="btn" href="${SITE.footer.sourceLink.href}" target="_blank" rel="${SITE.footer.sourceLink.rel || "noopener"}">
    ${SITE.footer.sourceLink.label}
    </a>
    </div>

    <p class="fineprint">This panel is a decorative mock-up.</p>
    </div>
    `;
  };

  /* ==================================================================
   *  3. WINDOW DEFINITIONS
   * ================================================================== */

  const WINDOWS = {
    welcome: {
      title: "Welcome — SJK/OS",
      w: 660, h: 500, x: 90, y: 60,
      status: "Press Ctrl+Alt+Del to log on",
      render: renderWelcome,
    },
    projects: {
      title: "Projects — File Manager",
      w: 660, h: 520, x: 200, y: 90,
      status: "1 object(s) · 0 bytes used",
 render: renderProjects,
    },
    about: {
      title: "About the Developer",
      w: 560, h: 500, x: 260, y: 70,
      status: "System information",
      render: renderAbout,
    },
    contact: {
      title: "Mail — Compose",
      w: 560, h: 480, x: 320, y: 110,
      status: "Ready · 0 unsent",
      render: renderContact,
    },
    system: {
      title: "System Information",
      w: 520, h: 500, x: 360, y: 60,
      status: "SJK/OS 1.0 · build 1997.11",
      render: renderSystem,
    },
  };

  const START_ITEMS = [
    { label: "Welcome",  id: "welcome" },
    { label: "Projects", id: "projects" },
    { label: "About",    id: "about" },
    { label: "Contact",  id: "contact" },
    { label: "System Information", id: "system" },
    { sep: true },
    { label: "Shut Down…", action: closeAllWindows },
  ];

  const DESK_ICONS = [
    { id: "welcome",  label: "Welcome" },
    { id: "projects", label: "Projects" },
    { id: "about",    label: "About" },
    { id: "contact",  label: "Contact" },
    { id: "system",   label: "System" },
  ];

  /* ==================================================================
   *  4. WINDOW MANAGER
   * ================================================================== */

  const desktop = $("#main");
  const windowsLayer = $("#windows");
  let zTop = 100;

  const isMobile = () => matchMedia("(max-width: 767px)").matches;

  function focusWindow(id) {
    const el = $(`.window[data-win="${id}"]`);
    if (!el || el.classList.contains("is-minimized")) return;
    zTop += 1;
    el.style.zIndex = String(zTop);
    $$(".window.is-active").forEach(w => w.classList.remove("is-active"));
    el.classList.add("is-active");
    renderTaskbar();
  }

  function focusTopWindow() {
    const wins = $$(".window:not(.is-minimized)");
    if (!wins.length) { renderTaskbar(); return; }
    wins.sort((a, b) => (+b.style.zIndex || 0) - (+a.style.zIndex || 0));
    focusWindow(wins[0].dataset.win);
  }

  function placeWindow(el, def) {
    const desk = desktop.getBoundingClientRect();
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const maxX = Math.max(0, desk.width - w);
    const maxY = Math.max(0, desk.height - h);
    const x = Math.min(maxX, Math.max(0, def.x ?? (desk.width - w) / 2));
    const y = Math.min(maxY, Math.max(0, def.y ?? (desk.height - h) / 2));
    el.style.left = x + "px";
    el.style.top  = y + "px";
  }

  function wireWindow(el, id) {
    const titlebar = $(".titlebar", el);
    const minBtn   = $('[data-act="min"]', el);
    const closeBtn = $('[data-act="close"]', el);

    minBtn.addEventListener("click", () => minimizeWindow(id));
    closeBtn.addEventListener("click", () => closeWindow(id));

    el.addEventListener("pointerdown", () => focusWindow(id), { passive: true });

    /* drag */
    let drag = null;
    titlebar.addEventListener("pointerdown", e => {
      if (e.button !== 0) return;
      if (e.pointerType === "touch") return;
      if (isMobile()) return;
      if (e.target.closest(".win-btn")) return;

      focusWindow(id);
      const rect = el.getBoundingClientRect();
      const desk = desktop.getBoundingClientRect();
      drag = {
        ox: e.clientX - rect.left,
        oy: e.clientY - rect.top,
        deskW: desk.width,
        deskH: desk.height,
        w: el.offsetWidth,
        h: el.offsetHeight,
      };
      titlebar.setPointerCapture(e.pointerId);
      document.body.classList.add("is-dragging");
      e.preventDefault();
    });

    titlebar.addEventListener("pointermove", e => {
      if (!drag) return;
      const desk = desktop.getBoundingClientRect();
      let nx = e.clientX - desk.left - drag.ox;
      let ny = e.clientY - desk.top  - drag.oy;
      nx = Math.max(0, Math.min(drag.deskW - drag.w, nx));
      ny = Math.max(0, Math.min(drag.deskH - drag.h, ny));
      el.style.left = nx + "px";
      el.style.top  = ny + "px";
    });

    const endDrag = () => {
      if (!drag) return;
      drag = null;
      document.body.classList.remove("is-dragging");
    };
    titlebar.addEventListener("pointerup", endDrag);
    titlebar.addEventListener("pointercancel", endDrag);

    /* internal navigation buttons */
    $$("[data-open]", el).forEach(btn => {
      btn.addEventListener("click", () => openWindow(btn.dataset.open));
    });
  }

  function openWindow(id) {
    const def = WINDOWS[id];
    if (!def) return;

    let el = $(`.window[data-win="${id}"]`);
    if (el) {
      el.classList.remove("is-minimized");
      focusWindow(id);
      return;
    }

    el = document.createElement("div");
    el.className = "window";
    el.dataset.win = id;
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "false");
    el.setAttribute("aria-label", def.title);
    el.style.width  = def.w + "px";
    el.style.height = def.h + "px";
    el.innerHTML = `
    <div class="titlebar">
    <span class="title">${def.title}</span>
    <div class="win-controls">
    <button class="win-btn" type="button" data-act="min" aria-label="Minimize window" title="Minimize">
    <svg viewBox="0 0 8 8" aria-hidden="true"><rect x="2" y="5" width="4" height="1" fill="currentColor"/></svg>
    </button>
    <button class="win-btn" type="button" data-act="close" aria-label="Close window" title="Close">
    <svg viewBox="0 0 8 8" aria-hidden="true"><path d="M2 2 L6 6 M6 2 L2 6" stroke="currentColor" stroke-width="1.1" fill="none"/></svg>
    </button>
    </div>
    </div>
    <div class="win-body">${def.render()}</div>
    ${def.status ? `<div class="win-status"><span>${def.status}</span></div>` : ""}
    `;

    windowsLayer.appendChild(el);
    placeWindow(el, def);
    wireWindow(el, id);
    focusWindow(id);
  }

  function minimizeWindow(id) {
    const el = $(`.window[data-win="${id}"]`);
    if (!el) return;
    el.classList.remove("is-active");
    el.classList.add("is-minimized");
    focusTopWindow();
  }

  function closeWindow(id) {
    const el = $(`.window[data-win="${id}"]`);
    if (!el) return;
    el.remove();
    focusTopWindow();
  }

  function closeAllWindows() {
    $$(".window").forEach(el => el.remove());
    renderTaskbar();
  }

  /* ==================================================================
   *  5. TASKBAR
   * ================================================================== */

  function renderTaskbar() {
    const bar = $("#taskbar");
    bar.innerHTML = "";
    $$(".window").forEach(el => {
      const id = el.dataset.win;
      const def = WINDOWS[id];
      if (!def) return;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "task-btn";
      btn.textContent = def.title;
      btn.title = def.title;

      if (el.classList.contains("is-minimized")) btn.classList.add("is-min");
      if (el.classList.contains("is-active") && !el.classList.contains("is-minimized")) {
        btn.classList.add("is-active");
      }

      btn.addEventListener("click", () => {
        if (el.classList.contains("is-minimized")) {
          el.classList.remove("is-minimized");
          focusWindow(id);
        } else if (el.classList.contains("is-active")) {
          minimizeWindow(id);
        } else {
          focusWindow(id);
        }
      });

      bar.appendChild(btn);
    });
  }

  /* ==================================================================
   *  6. DESKTOP ICONS
   * ================================================================== */

  function renderDesktopIcons() {
    const ul = $("#desk-icons");
    ul.innerHTML = "";
    DESK_ICONS.forEach(({ id, label }) => {
      const li = document.createElement("li");
      li.className = "desk-icon";
      li.tabIndex = 0;
      li.setAttribute("role", "button");
      li.setAttribute("aria-label", `Open ${label}`);
      li.innerHTML = `<div class="ico">${ICON[id]}</div><div class="lbl">${label}</div>`;

      li.addEventListener("click", () => openWindow(id));
      li.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openWindow(id);
        }
      });

      ul.appendChild(li);
    });
  }

  /* ==================================================================
   *  7. START MENU
   * ================================================================== */

  function initStartMenu() {
    const btn  = $("#start-btn");
    const menu = $("#start-menu");

    const close = () => {
      menu.hidden = true;
      btn.setAttribute("aria-expanded", "false");
    };

    START_ITEMS.forEach(item => {
      if (item.sep) {
        const sep = document.createElement("div");
        sep.className = "menu-sep";
        menu.appendChild(sep);
        return;
      }
      const row = document.createElement("button");
      row.type = "button";
      row.className = "menu-row";
      row.setAttribute("role", "menuitem");
      row.textContent = item.label;
      row.addEventListener("click", () => {
        close();
        if (item.action) item.action();
        else if (item.id) openWindow(item.id);
      });
        menu.appendChild(row);
    });

    btn.addEventListener("click", e => {
      e.stopPropagation();
      const isOpen = menu.hidden;
      menu.hidden = !isOpen;
      btn.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("pointerdown", e => {
      if (menu.hidden) return;
      if (menu.contains(e.target) || btn.contains(e.target)) return;
      close();
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && !menu.hidden) close();
    });
  }

  /* ==================================================================
   *  8. CONTEXT MENU
   * ================================================================== */

  function initContextMenu() {
    const menu = $("#context-menu");

    const items = [
      { label: "Refresh Desktop", action: refreshDesktop },
      { label: "Arrange Icons",   action: arrangeIcons },
      { sep: true },
      { label: "Open Projects",       action: () => openWindow("projects") },
 { label: "System Information",  action: () => openWindow("system") },
 { label: "About SJK/OS",        action: () => openWindow("about") },
    ];

    const close = () => { menu.hidden = true; };

    function build(x, y) {
      menu.innerHTML = "";
      items.forEach(item => {
        if (item.sep) {
          const sep = document.createElement("div");
          sep.className = "menu-sep";
          menu.appendChild(sep);
          return;
        }
        const row = document.createElement("button");
        row.type = "button";
        row.className = "menu-row";
        row.setAttribute("role", "menuitem");
        row.textContent = item.label;
        row.addEventListener("click", () => {
          close();
          item.action();
        });
        menu.appendChild(row);
      });

      menu.hidden = false;
      const mw = menu.offsetWidth;
      const mh = menu.offsetHeight;
      menu.style.left = Math.min(x, innerWidth  - mw - 4) + "px";
      menu.style.top  = Math.min(y, innerHeight - mh - 4) + "px";
    }

    desktop.addEventListener("contextmenu", e => {
      if (e.target.closest(".window, .desk-icon")) return;
      e.preventDefault();
      build(e.clientX, e.clientY);
    });

    document.addEventListener("pointerdown", e => {
      if (menu.hidden) return;
      if (menu.contains(e.target)) return;
      close();
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && !menu.hidden) close();
    });
  }

  function refreshDesktop() {
    const desk = desktop;
    desk.style.transition = "filter .08s";
    desk.style.filter = "brightness(1.08)";
    setTimeout(() => {
      desk.style.filter = "";
      renderDesktopIcons();
      setTimeout(() => { desk.style.transition = ""; }, 120);
    }, 80);
    if (typeof window.__regenerateWallpaper === "function") {
      window.__regenerateWallpaper();
    }
  }

  function arrangeIcons() {
    const ul = $("#desk-icons");
    ul.classList.toggle("is-grid");
  }

  /* ==================================================================
   *  9. CLOCK
   * ================================================================== */

  function initClock() {
    const el = $("#clock");
    const tick = () => {
      const d = new Date();
      el.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
      el.title = d.toLocaleString();
    };
    tick();
    setInterval(tick, 10_000);
  }

  /* ==================================================================
   * 10. SHOW DESKTOP + RESIZE SAFETY
   * ================================================================== */

  function initShowDesktop() {
    $("#show-desktop").addEventListener("click", () => {
      $$(".window").forEach(el => {
        el.classList.remove("is-active");
        el.classList.add("is-minimized");
      });
      renderTaskbar();
    });
  }

  function initResizeClamp() {
    addEventListener("resize", () => {
      if (isMobile()) return;
      const desk = desktop.getBoundingClientRect();
      $$(".window").forEach(el => {
        const w = el.offsetWidth;
        const h = el.offsetHeight;
        const x = parseFloat(el.style.left) || 0;
        const y = parseFloat(el.style.top)  || 0;
        el.style.left = Math.max(0, Math.min(desk.width  - w, x)) + "px";
        el.style.top  = Math.max(0, Math.min(desk.height - h, y)) + "px";
      });
    }, { passive: true });
  }

  /* ==================================================================
   * 11. PROCEDURAL WALLPAPER
   *     Seeded, dithered desktop texture. Pure canvas 2D, no deps.
   * ================================================================== */

  const WALLPAPER_SEED_KEY = "sjk.wallpaper.seed";

  /* mulberry32 — small, fast, good-enough 32-bit PRNG. */
  function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /* Bilinear value noise: random values on an integer lattice, smoothstepped
   *between them. Not Perlin — no gradients needed for this look. */
  function makeValueNoise(rng, freq) {
    const size = freq + 2;
    const lattice = new Float32Array(size * size);
    for (let i = 0; i < lattice.length; i++) lattice[i] = rng();

    return function (x, y) {
      const fx = x * freq, fy = y * freq;
      const x0 = Math.floor(fx), y0 = Math.floor(fy);
      const tx = fx - x0, ty = fy - y0;
      const sx = tx * tx * (3 - 2 * tx);
      const sy = ty * ty * (3 - 2 * ty);
      const v00 = lattice[y0 * size + x0];
      const v10 = lattice[y0 * size + x0 + 1];
      const v01 = lattice[(y0 + 1) * size + x0];
      const v11 = lattice[(y0 + 1) * size + x0 + 1];
      const a = v00 + (v10 - v00) * sx;
      const b = v01 + (v11 - v01) * sx;
      return a + (b - a) * sy;
    };
  }

  /* 2-3 octaves of value noise, normalized back to [0, 1]. */
  function makeField(rng) {
    const layers = [
      { noise: makeValueNoise(rng, 4),  amp: 0.55 },
 { noise: makeValueNoise(rng, 8),  amp: 0.30 },
 { noise: makeValueNoise(rng, 16), amp: 0.15 },
    ];
    const totalAmp = layers.reduce((sum, l) => sum + l.amp, 0);
    return function (x, y) {
      let v = 0;
      for (const l of layers) v += l.noise(x, y) * l.amp;
      return v / totalAmp;
    };
  }

  /* Classic 4x4 Bayer matrix, normalized to [0, 1). Gives the dither its
   *structured — not staticky — clustering. */
  const BAYER4 = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5],
  ].map(row => row.map(v => (v + 0.5) / 16));

  /* Lighten a "#rrggbb" string toward white by pct% (no color-mix() dependency). */
  function lightenHex(hex, pct) {
    const n = parseInt(hex.replace("#", ""), 16);
    const mix = c => Math.min(255, Math.round(c + (255 - c) * (pct / 100)));
    const r = mix((n >> 16) & 255), g = mix((n >> 8) & 255), b = mix(n & 255);
    return `rgb(${r}, ${g}, ${b})`;
  }

  /* Read the theme palette from CSS once and cache it — never per cell. */
  let wallpaperPalette = null;
  function getWallpaperPalette() {
    if (wallpaperPalette) return wallpaperPalette;
    const cs = getComputedStyle(document.documentElement);
    const desk   = cs.getPropertyValue("--desk").trim()    || "#A8C8C7";
    const deskDk = cs.getPropertyValue("--desk-dk").trim() || "#8FB3B2";
    const greyLt = cs.getPropertyValue("--grey-lt").trim() || "#DFDFDF";
    wallpaperPalette = [deskDk, desk, lightenHex(desk, 22), greyLt];
    return wallpaperPalette;
  }

  /* px = size of one wallpaper "pixel" in CSS px, clamped so cols*rows
   *stays bounded on very large/high-density screens. */
  function computeWallpaperGrid() {
    let px = Math.max(4, Math.min(10, Math.round(Math.min(innerWidth, innerHeight) / 180)));
    let cols = Math.ceil(innerWidth / px);
    let rows = Math.ceil(innerHeight / px);

    const MAX_CELLS = 250_000;
    if (cols * rows > MAX_CELLS) {
      px = Math.ceil(px * Math.sqrt((cols * rows) / MAX_CELLS));
      cols = Math.ceil(innerWidth / px);
      rows = Math.ceil(innerHeight / px);
    }
    return { cols, rows };
  }

  let wallpaperSeed = null;

  function loadWallpaperSeed() {
    try {
      const stored = Number(sessionStorage.getItem(WALLPAPER_SEED_KEY));
      if (stored) return stored >>> 0;
    } catch { /* storage unavailable (private mode, etc.) — fall through */ }
    const fresh = (Math.random() * 0xFFFFFFFF) >>> 0;
    try { sessionStorage.setItem(WALLPAPER_SEED_KEY, String(fresh)); } catch {}
    return fresh;
  }

  function saveWallpaperSeed(seed) {
    try { sessionStorage.setItem(WALLPAPER_SEED_KEY, String(seed)); } catch {}
  }

  /* Build the full dithered texture into an offscreen canvas, then blit it
   * onto the visible canvas in one go — the visible canvas is only ever
   * resized and painted back-to-back, so there's no empty-frame flash. */
  function paintWallpaper(seed) {
    const canvas = $("#wallpaper-canvas");
    if (!canvas) return;
    wallpaperSeed = seed;

    const t0 = performance.now();
    const { cols, rows } = computeWallpaperGrid();
    const palette = getWallpaperPalette();
    const field = makeField(mulberry32(seed));
    const DITHER = 0.18;
    const STEPS = 3; // desk-dk / desk / lightened-desk

    const off = document.createElement("canvas");
    off.width = cols;
    off.height = rows;
    const octx = off.getContext("2d");

    for (let y = 0; y < rows; y++) {
      let runColor = null, runStart = 0;
      for (let x = 0; x <= cols; x++) {
        let color = null;
        if (x < cols) {
          const f = field(x / cols, y / rows);
          const b = BAYER4[y & 3][x & 3];
          const d = Math.min(1, Math.max(0, f + (b - 0.5) * DITHER));
          let band = Math.min(STEPS - 1, Math.floor(d * STEPS));
          /* sparse "dust" highlight in the lightest band, ~3% of those cells */
          if (band === STEPS - 1) {
            const hash = ((x * 2654435761 + y * 40503 + seed) >>> 0);
            if ((hash & 31) === 0) band = 3;
          }
          color = palette[band];
        }
        if (color !== runColor) {
          if (runColor !== null) {
            octx.fillStyle = runColor;
            octx.fillRect(runStart, y, x - runStart, 1);
          }
          runColor = color;
          runStart = x;
        }
      }
    }

    /* faint CRT scanlines, never more than ~8% alpha */
    octx.fillStyle = "rgba(0,0,0,0.06)";
    for (let y = 0; y < rows; y += 3) octx.fillRect(0, y, cols, 1);

    canvas.width = cols;
    canvas.height = rows;
    canvas.getContext("2d").drawImage(off, 0, 0);

    if (performance.now() - t0 > 8) {
      console.debug(`[SJK/OS] wallpaper draw exceeded budget: ${(performance.now() - t0).toFixed(1)}ms`);
    }
  }

  function scheduleWallpaperPaint(seed) {
    requestAnimationFrame(() => paintWallpaper(seed));
  }

  /* Debug/menu hooks — defined up front so they exist long before boot()
   *is called. "Refresh Desktop" in the context menu uses the first one. */
  window.__regenerateWallpaper = function () {
    const seed = (Math.random() * 0xFFFFFFFF) >>> 0;
    saveWallpaperSeed(seed);
    scheduleWallpaperPaint(seed);
  };
  window.__setWallpaperSeed = function (n) {
    const seed = (Number(n) >>> 0) || 0;
    saveWallpaperSeed(seed);
    scheduleWallpaperPaint(seed);
  };

  function initWallpaper() {
    wallpaperSeed = loadWallpaperSeed();
    scheduleWallpaperPaint(wallpaperSeed);

    let resizeTimer = null;
    const onViewportChange = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => scheduleWallpaperPaint(wallpaperSeed), 150);
    };
    addEventListener("resize", onViewportChange, { passive: true });
    addEventListener("orientationchange", onViewportChange, { passive: true });

    /* Wallpaper never animates on its own, so prefers-reduced-motion needs
     *  no extra handling here — the static frame above is already the
     *  reduced-motion output. This stays true only as long as nothing below
     *  starts a draw loop; gate any future animation on that media query. */
  }

  /* ==================================================================
   * 12. BOOT
   * ================================================================== */

  function boot() {
    renderDesktopIcons();
    renderTaskbar();
    initStartMenu();
    initContextMenu();
    initClock();
    initShowDesktop();
    initResizeClamp();
    initWallpaper();

    /* open the hero window as the primary application */
    openWindow("welcome");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
