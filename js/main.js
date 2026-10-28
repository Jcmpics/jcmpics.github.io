// Builds the page from window.SITE (js/content.js). You shouldn't need to edit this file.
(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const web = (f) => "photos/web/" + f.replace(/\.[^.]+$/, ".jpg");
  const thumb = (f) => "photos/thumb/" + f.replace(/\.[^.]+$/, ".jpg");
  const el = (tag, props = {}, kids = []) => {
    const n = Object.assign(document.createElement(tag), props);
    n.append(...kids);
    return n;
  };
  const mailto = (subject) => "mailto:" + S.contact.email + (subject ? "?subject=" + encodeURIComponent(subject) : "");

  // ---- Text content ----
  document.title = S.brand + " | Sports Photography";
  document.querySelectorAll("[data-brand]").forEach((n) => (n.textContent = S.brand));
  $("heroTagline").textContent = S.tagline;
  $("year").textContent = new Date().getFullYear();
  $("footerLocation").textContent = S.location;

  const hero = $("heroImg");
  hero.onload = () => hero.classList.add("loaded");
  hero.src = web(S.heroPhoto);

  $("aboutImg").src = web(S.about.photo);
  S.about.paragraphs.forEach((p) => $("aboutBody").append(el("p", { textContent: p })));
  S.about.stats.forEach((s) =>
    $("aboutStats").append(el("div", {}, [el("dt", { textContent: s.label }), el("dd", { textContent: s.value })]))
  );

  S.services.forEach((s) =>
    $("servicesList").append(
      el("article", { className: "service reveal" }, [
        el("h3", { textContent: s.name }),
        el("p", { className: "service-price", textContent: s.price }),
        el("p", { textContent: s.description }),
        el("ul", {}, s.includes.map((i) => el("li", { textContent: i }))),
      ])
    )
  );

  $("bookHeading").textContent = S.booking.heading;
  $("bookText").textContent = S.booking.text;
  const bookBtn = $("bookBtn");
  bookBtn.textContent = S.booking.buttonLabel;
  bookBtn.href = mailto(S.booking.emailSubject);
  if (S.contact.instagram) {
    $("bookAlt").append("Or DM ", el("a", {
      href: "https://www.instagram.com/" + S.contact.instagram + "/",
      target: "_blank", rel: "noopener", textContent: "@" + S.contact.instagram,
    }), " on Instagram");
  }

  const contacts = [
    S.contact.email && ["Email", S.contact.email, mailto()],
    S.contact.instagram && ["Instagram", "@" + S.contact.instagram, "https://www.instagram.com/" + S.contact.instagram + "/"],
    S.contact.phone && ["Phone", S.contact.phone, "tel:" + S.contact.phone.replace(/[^\d+]/g, "")],
    S.contact.clientGalleries && ["Client galleries", S.contact.clientGalleries.replace(/^https?:\/\/|\/$/g, ""), S.contact.clientGalleries],
  ].filter(Boolean);
  contacts.forEach(([label, value, href]) => {
    const external = /^https?:/.test(href);
    $("contactList").append(el("li", {}, [
      el("a", Object.assign({ href }, external ? { target: "_blank", rel: "noopener" } : {}), [
        el("span", { className: "contact-label", textContent: label }),
        el("span", { className: "contact-value", textContent: value }),
      ]),
    ]));
  });

  // ---- Gallery + filters ----
  const gallery = $("gallery");
  const tiles = S.photos.map((p, i) => {
    const img = el("img", { src: thumb(p.file), alt: p.title, loading: i < 6 ? "eager" : "lazy", decoding: "async" });
    img.onload = () => img.classList.add("loaded");
    const tile = el("button", { className: "tile reveal", type: "button" }, [
      img,
      el("figcaption", {}, [
        el("span", { className: "tile-title", textContent: p.title }),
        el("span", { className: "tile-meta", textContent: p.date || "" }),
      ]),
    ]);
    tile.setAttribute("aria-label", "Open " + p.title);
    tile.dataset.category = p.category;
    tile.addEventListener("click", () => openLightbox(i));
    gallery.append(tile);
    return tile;
  });

  const used = new Set(S.photos.map((p) => p.category));
  const cats = [{ id: "all", label: "All" }, ...S.categories.filter((c) => used.has(c.id))];
  const filterBtns = cats.map((c) => {
    const b = el("button", { className: "filter", type: "button", textContent: c.label });
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", c.id === "all");
    b.addEventListener("click", () => applyFilter(c.id));
    $("filters").append(b);
    return b;
  });
  let visible = S.photos.map((_, i) => i);
  function applyFilter(id) {
    filterBtns.forEach((b, i) => b.setAttribute("aria-selected", cats[i].id === id));
    visible = [];
    tiles.forEach((t, i) => {
      const show = id === "all" || S.photos[i].category === id;
      t.classList.toggle("is-hidden", !show);
      if (show) {
        visible.push(i);
        t.classList.remove("in");
        requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add("in")));
      }
    });
  }

  // ---- Lightbox ----
  const lb = $("lightbox"), lbImg = $("lbImg");
  let pos = 0, lastFocus = null;

  function show(newPos, dir) {
    pos = (newPos + visible.length) % visible.length;
    const p = S.photos[visible[pos]];
    const swap = () => {
      lbImg.src = web(p.file);
      lbImg.alt = p.title;
      $("lbTitle").textContent = p.title;
      $("lbCount").textContent = pos + 1 + " / " + visible.length;
      $("lbLink").hidden = !p.link;
      if (p.link) $("lbLink").href = p.link;
      // preload neighbours
      [1, -1].forEach((d) => { new Image().src = web(S.photos[visible[(pos + d + visible.length) % visible.length]].file); });
    };
    if (!dir) return swap();
    lbImg.classList.add("fading");
    setTimeout(() => {
      swap();
      lbImg.style.transform = "";
      const done = () => lbImg.classList.remove("fading");
      lbImg.complete ? done() : (lbImg.onload = done);
    }, 180);
  }
  function openLightbox(i) {
    lastFocus = document.activeElement;
    show(Math.max(0, visible.indexOf(i)));
    lb.hidden = false;
    document.body.classList.add("lb-locked");
    requestAnimationFrame(() => lb.classList.add("open"));
    $("lbClose").focus();
  }
  function closeLightbox() {
    lb.classList.remove("open");
    document.body.classList.remove("lb-locked");
    setTimeout(() => (lb.hidden = true), 300);
    if (lastFocus) lastFocus.focus();
  }
  $("lbClose").addEventListener("click", closeLightbox);
  $("lbPrev").addEventListener("click", () => show(pos - 1, -1));
  $("lbNext").addEventListener("click", () => show(pos + 1, 1));
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target.id === "lbStage") closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") show(pos - 1, -1);
    else if (e.key === "ArrowRight") show(pos + 1, 1);
  });

  // Swipe (touch): drag left/right to change photo, drag down to close
  let sx = 0, sy = 0, tracking = false;
  lb.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) return;
    tracking = true; sx = e.touches[0].clientX; sy = e.touches[0].clientY;
  }, { passive: true });
  lb.addEventListener("touchmove", (e) => {
    if (!tracking) return;
    const dx = e.touches[0].clientX - sx;
    lbImg.style.transition = "none";
    lbImg.style.transform = "translateX(" + dx + "px)";
  }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (!tracking) return;
    tracking = false;
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    lbImg.style.transition = "";
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) show(pos + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
    else {
      lbImg.style.transform = "";
      if (dy > 90 && Math.abs(dy) > Math.abs(dx)) closeLightbox();
    }
  });

  // ---- Nav ----
  const nav = $("nav"), toggle = $("navToggle"), links = $("navLinks");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", open);
    links.classList.toggle("open", open);
    document.body.classList.toggle("lb-locked", open);
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  links.addEventListener("click", (e) => { if (e.target.tagName === "A") setMenu(false); });

  // ---- Fade-in on scroll ----
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
  document.querySelectorAll(".reveal").forEach((n) => io.observe(n));
})();
