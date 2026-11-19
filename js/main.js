/* ============================================================
 *  DATA  (window.SITE)
 * ============================================================ */
window.SITE = {
  meta: {
    name: "Saurav Jyoti Kalita",
    role: "Computing and Artificial Intelligence",
    description: "Portfolio of Saurav Jyoti Kalita, a BCA student at Chandigarh University focused on Computing and AI — building lightweight, offline-first tools in C, C++, and Python.",
    themeColor: "#6B9B9A",
  },
  brand: { label: "SJK", href: "#top" },
  nav: [
    { label: "About",    href: "#about"    },
    { label: "Projects", href: "#projects" },
    { label: "Contact",  href: "#contact"  },
  ],
  hero: {
    titleLines: ["I build fast,", "offline-first", "tools for", "the edge."],
    lede: "Hi, I'm Saurav — a BCA student at Chandigarh University working in Computing and AI. I work primarily in C, C++, and Python, with a deep interest in deployment tooling, edge devices, and offline-first infrastructure.",
    cta: [
      { label: "Contact me",      href: "#contact",  variant: "primary" },
      { label: "See my projects", href: "#projects", variant: "ghost"   },
    ],
    status: "Open to opportunities",
    links: [
      { label: "sauravjyotikalita56@gmail.com", href: "mailto:sauravjyotikalita56@gmail.com" },
      { label: "GitHub",   href: "https://github.com/gauranga18",             rel: "noopener" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/saurav-jyoti/", rel: "noopener" },
    ],
  },
  projectsSection: {
    heading: "Selected projects",
    items: [
      {
        id: "forge",
        title: "Forge",
        meta: "C  ·  ~100 KB  ·  Zero-dependency deployment tool",
        description: "A minimal, zero-dependency deployment tool written in C that clones Git repositories, builds Docker images, and runs containers — all from a single 100KB static binary. Designed for edge devices and offline environments where every kilobyte matters.",
        tags: ["C", "Docker", "Linux", "Edge"],
        actions: {
          live: { label: "View on GitHub",   href: "https://github.com/gauranga18/forge"         },
          code: { label: "Read the README",  href: "https://github.com/gauranga18/forge#readme"  },
        },
      },
    ],
  },
  about: {
    heading: "About me",
    lead: "I'm a BCA student at Chandigarh University (2023–2026), focused on Computing and AI. I work primarily in C, C++, and Python, with a deep interest in deployment tooling, edge devices, and offline-first infrastructure. I built Forge — a 70KB C binary that deploys Docker containers from Git repos with zero runtime dependencies.",
    highlightsHeading: "Highlights",
    highlights: [
      "BCA — Chandigarh University, 2023–2026",
      "Built Forge: a 100KB zero-dependency deployment tool in C",
      "Focus: Computing and AI",
      "Location: Punjab, India",
      "Status: Open to opportunities",
    ],
    toolsHeading: "Tools I work with",
    tools: ["C", "C++", "Python", "Docker", "Git", "Linux"],
  },
  contact: {
    heading: "Let's build something together.",
    email: "sauravjyotikalita56@gmail.com",
    links: [
      { label: "GitHub",   href: "https://github.com/gauranga18",             rel: "noopener" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/saurav-jyoti/", rel: "noopener" },
    ],
  },
  footer: {
    copyrightName: "Saurav Jyoti Kalita",
    sourceLink: {
      label: "View this site's source on GitHub",
      href:  "https://github.com/gauranga18/My-Portfolio",
      rel:   "noopener",
    },
  },
};

/* ============================================================
 *  MAIN
 * ============================================================ */
(() => {
  "use strict";
    const SITE = window.SITE;
    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
    const pad = n => String(n).padStart(2, "0");

    /* ----------------------------------------------------------
     *  ICONS
     * ---------------------------------------------------------- */
    const ICON = {
      welcome: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="4" width="28" height="20" rx="0" fill="#C8C8C8" stroke="#080808"/>
      <rect x="4" y="6" width="24" height="16" fill="#2A4A6B"/>
      <rect x="5" y="7" width="22" height="3"  fill="#3D6080" opacity=".8"/>
      <rect x="5" y="11" width="14" height="1.5" fill="#A8D0CF"/>
      <rect x="5" y="14" width="18" height="1.5" fill="#A8D0CF"/>
      <rect x="5" y="17" width="11" height="1.5" fill="#A8D0CF"/>
      <rect x="13" y="24" width="6" height="3" fill="#888" stroke="#080808"/>
      <rect x="7"  y="27" width="18" height="2" fill="#C8C8C8" stroke="#080808"/>
      </svg>`,

      projects: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2 8 H11 L14 12 H30 V28 H2 Z" fill="#D4A820" stroke="#080808"/>
      <path d="M2 13 H30 V28 H2 Z" fill="#F0CC55" stroke="#080808"/>
      <path d="M2 13 H30" stroke="#080808" stroke-width=".8"/>
      <rect x="6" y="17" width="8" height="6" fill="#D4A820" opacity=".5" stroke="#080808" stroke-width=".5"/>
      <rect x="17" y="17" width="8" height="6" fill="#D4A820" opacity=".5" stroke="#080808" stroke-width=".5"/>
      </svg>`,

      about: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="11" r="6" fill="#E8D5B7" stroke="#080808"/>
      <path d="M4 29 C4 21 9 17 16 17 C23 17 28 21 28 29 Z" fill="#3D5A73" stroke="#080808"/>
      </svg>`,

      contact: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="8" width="28" height="17" fill="#F5F4EA" stroke="#080808"/>
      <path d="M2 8 L16 19 L30 8" fill="none" stroke="#080808" stroke-width="1.2"/>
      <path d="M2 25 L12 18 M30 25 L20 18" fill="none" stroke="#080808" stroke-width=".9"/>
      </svg>`,

      system: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="16" r="13" fill="#3D5A73" stroke="#080808"/>
      <rect x="15" y="8"  width="2" height="5" fill="#fff"/>
      <rect x="15" y="15" width="2" height="8" fill="#fff"/>
      </svg>`,

      folderSmall: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2 8 H11 L14 12 H30 V28 H2 Z" fill="#D4A820" stroke="#080808"/>
      <path d="M2 13 H30 V28 H2 Z" fill="#F0CC55" stroke="#080808"/>
      </svg>`,
    };

    /* ----------------------------------------------------------
     *  CONTENT RENDERERS
     * ---------------------------------------------------------- */
    const renderWelcome = () => {
      const mast = SITE.hero.titleLines.join(" ");
      const cta = SITE.hero.cta.map(c =>
      `<button class="btn ${c.variant === "primary" ? "primary" : "ghost"}"
      type="button" data-open="${c.href.replace(/^#/, "")}">${c.label}</button>`
      ).join("");
      const links = SITE.hero.links.map(l =>
      `<a href="${l.href}"${l.rel ? ` rel="${l.rel}"` : ""}>${l.label}</a>`
      ).join("");

      return `<div class="welcome">
      <div class="w-eyebrow">
      <span class="w-status-pill">
      <span class="dot" aria-hidden="true"></span>${SITE.hero.status}
      </span>
      <span style="font-family:var(--mono);font-size:9px;color:var(--ink-4);letter-spacing:.04em">
      BCA · Chandigarh University · 2023–2026
      </span>
      </div>
      <h1 class="w-name">${SITE.meta.name}</h1>
      <div class="w-role">${SITE.meta.role}</div>
      <blockquote class="w-mast">"${mast}"</blockquote>
      <p class="w-lede">${SITE.hero.lede}</p>
      <div class="w-cta">${cta}</div>
      <div class="w-links">${links}</div>
      </div>`;
    };

    const renderProjects = () => {
      const rows = SITE.projectsSection.items.map(p => `
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
      </article>`).join("");

      return `<div class="fm">
      <div class="fm-toolbar" aria-hidden="true">
      <button class="fm-toolbar-btn" type="button">File</button>
      <button class="fm-toolbar-btn" type="button">Edit</button>
      <button class="fm-toolbar-btn" type="button">View</button>
      <button class="fm-toolbar-btn" type="button">Help</button>
      </div>
      <div class="fm-addr">
      <span class="fm-addr-label">Path:</span>
      <div class="fm-addr-bar">C:\\SJK\\Projects\\</div>
      </div>
      <div class="fm-list">${rows}</div>
      </div>`;
    };

    const renderAbout = () => {
      const a = SITE.about;
      return `<div class="sysinfo">
      <div class="group">
      <div class="group-label">Personal</div>
      <p class="lead">${a.lead}</p>
      </div>
      <div class="group">
      <div class="group-label">${a.highlightsHeading}</div>
      <ul class="kv">${a.highlights.map(h => `<li>${h}</li>`).join("")}</ul>
      </div>
      <div class="group">
      <div class="group-label">${a.toolsHeading}</div>
      <ul class="tags">${a.tools.map(t => `<li>${t}</li>`).join("")}</ul>
      </div>
      </div>`;
    };

    const renderContact = () => {
      const links = SITE.contact.links.map(l =>
      `<a class="btn" href="${l.href}" target="_blank" rel="${l.rel || "noopener"}">${l.label}</a>`
      ).join("");
      return `<div class="mail">
      <div class="mail-toolbar">
      <a class="btn primary" href="mailto:${SITE.contact.email}">✉ Compose</a>
      <span class="mail-toolbar-label">New Message</span>
      </div>
      <div class="mail-header">
      <div class="mail-field">
      <span class="lbl">From</span>
      <span class="val">${SITE.meta.name}</span>
      </div>
      <div class="mail-field">
      <span class="lbl">To</span>
      <span class="val"><a href="mailto:${SITE.contact.email}">${SITE.contact.email}</a></span>
      </div>
      <div class="mail-field">
      <span class="lbl">Subject</span>
      <span class="val">${SITE.contact.heading}</span>
      </div>
      </div>
      <div class="mail-body">
      <p>Hi Saurav,</p>
      <p>I came across your portfolio and would like to get in touch.</p>
      <p>—</p>
      </div>
      <div class="mail-links">
      <span class="mail-links-label">Find me on:</span>
      ${links}
      </div>
      </div>`;
    };

    const renderSystem = () => `<div class="sysinfo">
    <div class="sys-hero">
    <div class="sys-logo-big">${SITE.brand.label}/OS</div>
    <div class="sys-version">Version 1.0  —  build 1997.11</div>
    </div>
    <div class="group">
    <div class="group-label">Machine</div>
    <dl class="kv-grid">
    <dt>System</dt><dd>${SITE.brand.label}/OS 1.0</dd>
    <dt>Machine</dt><dd>SJK Personal Workstation</dd>
    <dt>Processor</dt><dd>Pentium-class</dd>
    <dt>Memory</dt><dd>4.0 MB conventional</dd>
    <dt>Display</dt><dd>1024×768 · 16 colors</dd>
    <dt>Kernel</dt><dd>Vanilla JavaScript</dd>
    </dl>
    </div>
    <div class="group">
    <div class="group-label">Owner</div>
    <dl class="kv-grid">
    <dt>Name</dt><dd>${SITE.footer.copyrightName}</dd>
    <dt>Field</dt><dd>${SITE.meta.role}</dd>
    <dt>Status</dt><dd>${SITE.hero.status}</dd>
    </dl>
    </div>
    <div class="group">
    <div class="group-label">Source</div>
    <a class="btn" href="${SITE.footer.sourceLink.href}" target="_blank"
    rel="${SITE.footer.sourceLink.rel || "noopener"}">${SITE.footer.sourceLink.label}</a>
    </div>
    <p class="fineprint">This panel is a decorative mock-up.</p>
    </div>`;

    /* ----------------------------------------------------------
     *  WINDOW DEFINITIONS
     * ---------------------------------------------------------- */
    const WINDOWS = {
      welcome:  { title: "Welcome — SJK/OS",        w: 680, h: 520, x:  80, y: 55,  status: "Press Ctrl+Alt+Del to log on", render: renderWelcome  },
 projects: { title: "Projects — File Manager",  w: 680, h: 540, x: 190, y: 85,  status: "1 object(s)  ·  0 bytes used",  render: renderProjects },
 about:    { title: "About the Developer",       w: 580, h: 520, x: 240, y: 65,  status: "System information",             render: renderAbout    },
 contact:  { title: "Mail — Compose",            w: 580, h: 500, x: 300, y: 100, status: "Ready  ·  0 unsent",             render: renderContact  },
 system:   { title: "System Information",        w: 540, h: 520, x: 350, y: 55,  status: "SJK/OS 1.0  ·  build 1997.11",  render: renderSystem   },
    };

    const START_ITEMS = [
      { label: "Welcome",            id: "welcome"  },
      { label: "Projects",           id: "projects" },
      { label: "About",              id: "about"    },
      { label: "Contact",            id: "contact"  },
      { label: "System Information", id: "system"   },
      { sep: true },
      { label: "Shut Down…",         action: closeAllWindows },
    ];

    const DESK_ICONS = [
      { id: "welcome",  label: "Welcome"  },
      { id: "projects", label: "Projects" },
      { id: "about",    label: "About"    },
      { id: "contact",  label: "Contact"  },
      { id: "system",   label: "System"   },
    ];

    /* ----------------------------------------------------------
     *  WINDOW MANAGER
     * ---------------------------------------------------------- */
    const desktop = $("#main");
    const winLayer = $("#windows");
    let zTop = 100;

    const isMobile = () => matchMedia("(max-width: 767px)").matches;

    function focusWindow(id) {
      const el = $(`.window[data-win="${id}"]`);
      if (!el || el.classList.contains("is-minimized")) return;
      zTop++;
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
      const dr = desktop.getBoundingClientRect();
      const w = el.offsetWidth, h = el.offsetHeight;
      const x = Math.min(Math.max(0, def.x ?? (dr.width  - w) / 2), dr.width  - w);
      const y = Math.min(Math.max(0, def.y ?? (dr.height - h) / 2), dr.height - h);
      el.style.left = x + "px";
      el.style.top  = y + "px";
    }

    function wireWindow(el, id) {
      const tb  = $(".titlebar", el);
      const min = $('[data-act="min"]', el);
      const cls = $('[data-act="close"]', el);

      min.addEventListener("click", () => minimizeWindow(id));
      cls.addEventListener("click", () => closeWindow(id));
      el.addEventListener("pointerdown", () => focusWindow(id), { passive: true });

      let drag = null;
      tb.addEventListener("pointerdown", e => {
        if (e.button !== 0 || e.pointerType === "touch" || isMobile()) return;
        if (e.target.closest(".win-btn")) return;
        focusWindow(id);
        const r  = el.getBoundingClientRect();
        const dr = desktop.getBoundingClientRect();
        drag = { ox: e.clientX - r.left, oy: e.clientY - r.top,
          dW: dr.width, dH: dr.height, w: el.offsetWidth, h: el.offsetHeight };
          tb.setPointerCapture(e.pointerId);
          document.body.classList.add("is-dragging");
          e.preventDefault();
      });
      tb.addEventListener("pointermove", e => {
        if (!drag) return;
        const dr = desktop.getBoundingClientRect();
        let nx = Math.max(0, Math.min(drag.dW - drag.w, e.clientX - dr.left - drag.ox));
        let ny = Math.max(0, Math.min(drag.dH - drag.h, e.clientY - dr.top  - drag.oy));
        el.style.left = nx + "px";
        el.style.top  = ny + "px";
      });
      const endDrag = () => { if (!drag) return; drag = null; document.body.classList.remove("is-dragging"); };
      tb.addEventListener("pointerup",     endDrag);
      tb.addEventListener("pointercancel", endDrag);

      $$("[data-open]", el).forEach(btn =>
      btn.addEventListener("click", () => openWindow(btn.dataset.open))
      );
    }

    function openWindow(id) {
      const def = WINDOWS[id];
      if (!def) return;
      let el = $(`.window[data-win="${id}"]`);
      if (el) { el.classList.remove("is-minimized"); focusWindow(id); return; }

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
      <button class="win-btn" type="button" data-act="min"   aria-label="Minimize" title="Minimize">
      <svg viewBox="0 0 9 9" aria-hidden="true"><rect x="1" y="6" width="6" height="1.5" fill="currentColor"/></svg>
      </button>
      <button class="win-btn" type="button" data-act="close" aria-label="Close"    title="Close">
      <svg viewBox="0 0 9 9" aria-hidden="true">
      <line x1="1.5" y1="1.5" x2="7.5" y2="7.5" stroke="currentColor" stroke-width="1.5"/>
      <line x1="7.5" y1="1.5" x2="1.5" y2="7.5" stroke="currentColor" stroke-width="1.5"/>
      </svg>
      </button>
      </div>
      </div>
      <div class="win-body">${def.render()}</div>
      ${def.status ? `<div class="win-status"><span>${def.status}</span></div>` : ""}`;

      winLayer.appendChild(el);
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

    /* ----------------------------------------------------------
     *  TASKBAR
     * ---------------------------------------------------------- */
    function renderTaskbar() {
      const bar = $("#taskbar");
      bar.innerHTML = "";
      $$(".window").forEach(el => {
        const id  = el.dataset.win;
        const def = WINDOWS[id];
        if (!def) return;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "task-btn";
        btn.textContent = def.title;
        btn.title = def.title;
        if (el.classList.contains("is-minimized"))                                      btn.classList.add("is-min");
        if (el.classList.contains("is-active") && !el.classList.contains("is-minimized")) btn.classList.add("is-active");
        btn.addEventListener("click", () => {
          if (el.classList.contains("is-minimized")) { el.classList.remove("is-minimized"); focusWindow(id); }
          else if (el.classList.contains("is-active")) minimizeWindow(id);
          else focusWindow(id);
        });
          bar.appendChild(btn);
      });
    }

    /* ----------------------------------------------------------
     *  DESKTOP ICONS
     * ---------------------------------------------------------- */
    function renderDesktopIcons() {
      const ul = $("#desk-icons");
      ul.innerHTML = "";
      DESK_ICONS.forEach(({ id, label }) => {
        const li = document.createElement("li");
        li.className = "desk-icon";
        li.tabIndex  = 0;
        li.setAttribute("role", "button");
        li.setAttribute("aria-label", `Open ${label}`);
        li.innerHTML = `<div class="ico">${ICON[id]}</div><div class="lbl">${label}</div>`;
        li.addEventListener("click", () => openWindow(id));
        li.addEventListener("keydown", e => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openWindow(id); }
        });
        ul.appendChild(li);
      });
    }

    /* ----------------------------------------------------------
     *  START MENU
     * ---------------------------------------------------------- */
    function initStartMenu() {
      const btn  = $("#start-btn");
      const menu = $("#start-menu");
      const close = () => { menu.hidden = true; btn.setAttribute("aria-expanded", "false"); };

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
        row.addEventListener("click", () => { close(); if (item.action) item.action(); else if (item.id) openWindow(item.id); });
        menu.appendChild(row);
      });

      btn.addEventListener("click", e => {
        e.stopPropagation();
        const isOpen = menu.hidden;
        menu.hidden = !isOpen;
        btn.setAttribute("aria-expanded", String(isOpen));
      });
      document.addEventListener("pointerdown", e => {
        if (menu.hidden || menu.contains(e.target) || btn.contains(e.target)) return;
        close();
      });
      document.addEventListener("keydown", e => { if (e.key === "Escape" && !menu.hidden) close(); });
    }

    /* ----------------------------------------------------------
     *  CONTEXT MENU
     * ---------------------------------------------------------- */
    function initContextMenu() {
      const menu = $("#context-menu");
      const items = [
        { label: "Refresh Desktop",      action: refreshDesktop            },
 { label: "Arrange Icons",         action: arrangeIcons              },
 { sep: true },
 { label: "Open Projects",         action: () => openWindow("projects") },
 { label: "System Information",    action: () => openWindow("system")   },
 { label: "About Developer",       action: () => openWindow("about")    },
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
          row.addEventListener("click", () => { close(); item.action(); });
          menu.appendChild(row);
        });
        menu.hidden = false;
        menu.style.left = Math.min(x, innerWidth  - menu.offsetWidth  - 4) + "px";
        menu.style.top  = Math.min(y, innerHeight - menu.offsetHeight - 4) + "px";
      }

      desktop.addEventListener("contextmenu", e => {
        if (e.target.closest(".window, .desk-icon")) return;
        e.preventDefault();
        build(e.clientX, e.clientY);
      });
      document.addEventListener("pointerdown", e => {
        if (menu.hidden || menu.contains(e.target)) return;
        close();
      });
      document.addEventListener("keydown", e => { if (e.key === "Escape" && !menu.hidden) close(); });
    }

    function refreshDesktop() {
      desktop.style.transition = "filter .07s";
      desktop.style.filter = "brightness(1.06)";
      setTimeout(() => {
        desktop.style.filter = "";
        renderDesktopIcons();
        setTimeout(() => { desktop.style.transition = ""; }, 100);
      }, 70);
      if (typeof window.__regenerateWallpaper === "function") window.__regenerateWallpaper();
    }

    function arrangeIcons() { $("#desk-icons").classList.toggle("is-grid"); }

    /* ----------------------------------------------------------
     *  CLOCK
     * ---------------------------------------------------------- */
    function initClock() {
      const el = $("#clock");
      const tick = () => { const d = new Date(); el.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}`; el.title = d.toLocaleString(); };
      tick();
      setInterval(tick, 10000);
    }

    /* ----------------------------------------------------------
     *  SHOW DESKTOP + RESIZE SAFETY
     * ---------------------------------------------------------- */
    function initShowDesktop() {
      $("#show-desktop").addEventListener("click", () => {
        $$(".window").forEach(el => { el.classList.remove("is-active"); el.classList.add("is-minimized"); });
        renderTaskbar();
      });
    }

    function initResizeClamp() {
      addEventListener("resize", () => {
        if (isMobile()) return;
        const dr = desktop.getBoundingClientRect();
        $$(".window").forEach(el => {
          el.style.left = Math.max(0, Math.min(dr.width  - el.offsetWidth,  parseFloat(el.style.left) || 0)) + "px";
          el.style.top  = Math.max(0, Math.min(dr.height - el.offsetHeight, parseFloat(el.style.top)  || 0)) + "px";
        });
      }, { passive: true });
    }

    /* ----------------------------------------------------------
     *  PROCEDURAL WALLPAPER
     *  Richer 4-level dithered teal texture with more contrast
     * ---------------------------------------------------------- */
    const WALLPAPER_SEED_KEY = "sjk.wallpaper.seed2";

    function mulberry32(seed) {
      let a = seed >>> 0;
      return () => {
        a = (a + 0x6D2B79F5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }

    function makeValueNoise(rng, freq) {
      const size = freq + 2;
      const lat  = new Float32Array(size * size);
      for (let i = 0; i < lat.length; i++) lat[i] = rng();
      return (x, y) => {
        const fx = x * freq, fy = y * freq;
        const x0 = Math.floor(fx), y0 = Math.floor(fy);
        const sx = (t => t * t * (3 - 2 * t))(fx - x0);
        const sy = (t => t * t * (3 - 2 * t))(fy - y0);
        const a = lat[y0 * size + x0] + (lat[y0 * size + x0 + 1] - lat[y0 * size + x0]) * sx;
        const b = lat[(y0+1)*size+x0] + (lat[(y0+1)*size+x0+1]   - lat[(y0+1)*size+x0]) * sx;
        return a + (b - a) * sy;
      };
    }

    function makeField(rng) {
      const layers = [
        { n: makeValueNoise(rng, 4),  a: 0.55 },
 { n: makeValueNoise(rng, 8),  a: 0.30 },
 { n: makeValueNoise(rng, 16), a: 0.15 },
      ];
      const tot = layers.reduce((s, l) => s + l.a, 0);
      return (x, y) => layers.reduce((v, l) => v + l.n(x, y) * l.a, 0) / tot;
    }

    /* 4×4 Bayer ordered dither */
    const BAYER4 = [
      [0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5],
    ].map(r => r.map(v => (v + 0.5) / 16));

    function parseHex(hex) {
      const n = parseInt(hex.replace("#",""), 16);
      return [(n>>16)&255, (n>>8)&255, n&255];
    }
    function blendColor(c1, c2, t) {
      return `rgb(${Math.round(c1[0]+(c2[0]-c1[0])*t)},${Math.round(c1[1]+(c2[1]-c1[1])*t)},${Math.round(c1[2]+(c2[2]-c1[2])*t)})`;
    }

    let cachedPalette = null;
    function getPalette() {
      if (cachedPalette) return cachedPalette;
      const cs = getComputedStyle(document.documentElement);
      const dk   = parseHex((cs.getPropertyValue("--desk-dk").trim()  || "#5E9290"));
      const mid  = parseHex((cs.getPropertyValue("--desk").trim()     || "#7AAEAC"));
      const lt   = parseHex((cs.getPropertyValue("--desk-lt").trim()  || "#9DCAC8"));
      const xlt  = parseHex((cs.getPropertyValue("--desk-xlt").trim() || "#BDD9D8"));
      /* 5 steps: dk  /  dk→mid  /  mid  /  mid→lt  /  xlt */
      cachedPalette = [
        blendColor(dk, dk, 0),
 blendColor(dk, mid, 0.4),
 blendColor(mid, mid, 0),
 blendColor(mid, lt, 0.6),
 blendColor(lt, xlt, 0.5),
      ];
      return cachedPalette;
    }

    function computeGrid() {
      let px = Math.max(4, Math.min(10, Math.round(Math.min(innerWidth, innerHeight) / 180)));
      let cols = Math.ceil(innerWidth / px), rows = Math.ceil(innerHeight / px);
      const MAX = 250000;
      if (cols * rows > MAX) {
        px   = Math.ceil(px * Math.sqrt((cols * rows) / MAX));
        cols = Math.ceil(innerWidth  / px);
        rows = Math.ceil(innerHeight / px);
      }
      return { cols, rows };
    }

    let wallSeed = null;

    function loadSeed() {
      try { const s = Number(sessionStorage.getItem(WALLPAPER_SEED_KEY)); if (s) return s >>> 0; } catch {}
      const f = (Math.random() * 0xFFFFFFFF) >>> 0;
      try { sessionStorage.setItem(WALLPAPER_SEED_KEY, String(f)); } catch {}
      return f;
    }
    function saveSeed(s) { try { sessionStorage.setItem(WALLPAPER_SEED_KEY, String(s)); } catch {} }

    function paintWallpaper(seed) {
      const canvas = $("#wallpaper-canvas");
      if (!canvas) return;
      wallSeed = seed;

      const { cols, rows } = computeGrid();
      const palette = getPalette();
      const field   = makeField(mulberry32(seed));
      const DITHER  = 0.22;
      const STEPS   = palette.length;

      const off  = document.createElement("canvas");
      off.width  = cols;
      off.height = rows;
      const octx = off.getContext("2d");

      for (let y = 0; y < rows; y++) {
        let runC = null, runX = 0;
        for (let x = 0; x <= cols; x++) {
          let color = null;
          if (x < cols) {
            const f = field(x / cols, y / rows);
            const b = BAYER4[y & 3][x & 3];
            const d = Math.min(1, Math.max(0, f + (b - 0.5) * DITHER));
            let band = Math.min(STEPS - 1, Math.floor(d * STEPS));
            /* sparse highlight specks */
            if (band === STEPS - 1) {
              const h = ((x * 2654435761 + y * 40503 + seed) >>> 0);
              if ((h & 31) === 0) band = Math.min(STEPS - 1, band + 1);
            }
            color = palette[band];
          }
          if (color !== runC) {
            if (runC !== null) { octx.fillStyle = runC; octx.fillRect(runX, y, x - runX, 1); }
            runC = color; runX = x;
          }
        }
      }

      /* CRT scanlines */
      octx.fillStyle = "rgba(0,0,0,0.055)";
      for (let y = 0; y < rows; y += 3) octx.fillRect(0, y, cols, 1);

      canvas.width  = cols;
      canvas.height = rows;
      canvas.getContext("2d").drawImage(off, 0, 0);
    }

    function scheduleWallpaper(seed) { requestAnimationFrame(() => paintWallpaper(seed)); }

    window.__regenerateWallpaper = () => { const s = (Math.random()*0xFFFFFFFF)>>>0; saveSeed(s); scheduleWallpaper(s); };
    window.__setWallpaperSeed    = n  => { const s = (Number(n)>>>0)||0; saveSeed(s); scheduleWallpaper(s); };

    function initWallpaper() {
      wallSeed = loadSeed();
      scheduleWallpaper(wallSeed);
      let t = null;
      const repaint = () => { clearTimeout(t); t = setTimeout(() => scheduleWallpaper(wallSeed), 150); };
      addEventListener("resize",            repaint, { passive: true });
      addEventListener("orientationchange", repaint, { passive: true });
    }

    /* ----------------------------------------------------------
     *  BOOT
     * ---------------------------------------------------------- */
    function boot() {
      renderDesktopIcons();
      renderTaskbar();
      initStartMenu();
      initContextMenu();
      initClock();
      initShowDesktop();
      initResizeClamp();
      initWallpaper();
      openWindow("welcome");
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
    else boot();
})();
