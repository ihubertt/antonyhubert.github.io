/* Hubert Antony, portfolio
   Two jobs only:
   1. Show a labelled placeholder for any figure whose asset is not in the repo yet,
      so the site never renders a broken image. Drop the file in and it just works:
      no HTML edit required.
   2. Same for the hero video: if it is absent, the hero collapses to a text block.
*/
(function () {
  "use strict";

  function markMissing(fig) {
    if (fig) fig.classList.add("missing");
  }

  /* Images */
  document.querySelectorAll("figure[data-slot] img").forEach(function (img) {
    var fig = img.closest("figure");
    if (img.complete) {
      if (img.naturalWidth === 0) markMissing(fig);
    } else {
      img.addEventListener("error", function () { markMissing(fig); });
    }
  });

  /* Card thumbnails (not wrapped in <figure>) */
  document.querySelectorAll(".thumb img").forEach(function (img) {
    var thumb = img.parentNode;
    var fail = function () { thumb.classList.add("thumb-missing"); };
    if (img.complete) {
      if (img.naturalWidth === 0) fail();
    } else {
      img.addEventListener("error", fail);
    }
  });

  /* Figure videos.
     Click-to-play videos use preload="none", so the browser never requests the file
     and never fires an error. Probe the URL directly instead. */
  document.querySelectorAll("figure[data-slot] video").forEach(function (v) {
    var fig = v.closest("figure");
    v.addEventListener("error", function () { markMissing(fig); }, true);
    v.querySelectorAll("source").forEach(function (s) {
      s.addEventListener("error", function () { markMissing(fig); });
    });
    var src = v.querySelector("source") && v.querySelector("source").getAttribute("src");
    if (src && window.fetch) {
      fetch(src, { method: "HEAD" })
        .then(function (r) { if (!r.ok) markMissing(fig); })
        .catch(function () { markMissing(fig); });
    }
  });

  /* Hero video.
     A still image sits behind it as the base layer. If the video is absent we simply
     hide it and the still shows through. Only if BOTH are missing does the hero
     collapse to a plain text block. */
  var heroVid = document.querySelector(".hero-media video");
  var heroImg = document.querySelector(".hero-media img");
  if (heroVid) {
    var hero = heroVid.closest(".hero");
    var stillOk = function () { return heroImg && heroImg.complete && heroImg.naturalWidth > 0; };
    var dropVideo = function () {
      heroVid.classList.add("hidden");
      if (!stillOk()) hero.classList.add("no-media");
    };
    heroVid.addEventListener("error", dropVideo, true);
    heroVid.querySelectorAll("source").forEach(function (s) {
      s.addEventListener("error", dropVideo);
    });
    var vsrc = heroVid.querySelector("source") && heroVid.querySelector("source").getAttribute("src");
    if (vsrc && window.fetch) {
      fetch(vsrc, { method: "HEAD" })
        .then(function (r) { if (!r.ok) dropVideo(); })
        .catch(dropVideo);
    }
  }
  if (heroImg) {
    heroImg.addEventListener("error", function () {
      var h = heroImg.closest(".hero");
      var v = h.querySelector("video");
      if (!v || v.classList.contains("hidden")) h.classList.add("no-media");
    });
  }

  /* ---------- Click-to-zoom ----------
     Opens the figure at its full pixel size so labels, axes and scale bars are
     readable. Click anywhere, press Escape, or use Close to dismiss. */
  var figs = [].slice.call(document.querySelectorAll("figure[data-slot] img"));
  if (figs.length) {
    var lb = document.createElement("div");
    lb.className = "lb";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.innerHTML = '<div class="lb-bar"><span class="cap"></span>' +
                   '<button type="button" data-fit>Fit to width</button>' +
                   '<button type="button" data-close>Close</button></div><img alt="">';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector("img"),
        lbCap = lb.querySelector(".cap"),
        fitBtn = lb.querySelector("[data-fit]"),
        closeBtn = lb.querySelector("[data-close]"),
        last = null, fitted = false;

    function setFit(on) {
      fitted = on;
      lbImg.style.width = on ? "100%" : "";
      lbImg.style.maxWidth = on ? "1600px" : "none";
      fitBtn.textContent = on ? "Actual size" : "Fit to width";
    }
    function open(img) {
      last = img;
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt || "";
      var fc = img.closest("figure").querySelector("figcaption");
      /* The caption carries the appended "click to enlarge" hint, which is
         nonsense once you are inside the dialog. Read the caption without it. */
      if (fc) {
        var clone = fc.cloneNode(true);
        /* Drop the hint, and the source markers: their links are not clickable
           once flattened to text, so "[7][8]" would be noise. */
        clone.querySelectorAll(".zoom-hint, .refs").forEach(function (n) { n.remove(); });
        lbCap.textContent = clone.textContent.replace(/\s+/g, " ").trim();
      } else {
        lbCap.textContent = img.alt || "";
      }
      setFit(img.naturalWidth > window.innerWidth);
      lb.classList.add("open");
      document.body.classList.add("lb-open");
      lb.scrollTop = 0;
      /* aria-modal only tells the truth if focus actually goes in and stays. */
      closeBtn.focus();
    }
    function close() {
      lb.classList.remove("open");
      document.body.classList.remove("lb-open");
      lbImg.removeAttribute("src");
      /* An <img> takes focus only with a tabindex, so give the one we came
         from a programmatic-only stop and hand focus back to it. */
      if (last) {
        if (!last.hasAttribute("tabindex")) last.setAttribute("tabindex", "-1");
        last.focus();
        last = null;
      }
    }
    figs.forEach(function (img) {
      var fig = img.closest("figure");
      img.addEventListener("click", function () {
        if (!fig.classList.contains("missing")) open(img);
      });
      var fc = fig.querySelector("figcaption");
      if (fc && !fc.querySelector(".zoom-hint")) {
        var h = document.createElement("span");
        h.className = "zoom-hint";
        h.textContent = "Click on the image to enlarge";
        fc.appendChild(document.createTextNode(" "));
        fc.appendChild(h);
      }
    });
    fitBtn.addEventListener("click", function (ev) { ev.stopPropagation(); setFit(!fitted); });
    closeBtn.addEventListener("click", function (ev) { ev.stopPropagation(); close(); });
    lb.addEventListener("click", close);
    document.addEventListener("keydown", function (ev) {
      if (!lb.classList.contains("open")) return;
      if (ev.key === "Escape") { close(); return; }
      /* Keep Tab inside the dialog; without this it walks the page behind. */
      if (ev.key === "Tab") {
        var stops = [fitBtn, closeBtn],
            i = stops.indexOf(document.activeElement);
        ev.preventDefault();
        stops[(i + (ev.shiftKey ? stops.length - 1 : 1) + stops.length) % stops.length].focus();
      }
    });
  }
})();

/* ---------------------------------------------------------------------------
   3. Scroll reveal. Sections fade up once as they enter the viewport.
      The .js class is set by an inline script in <head>, so nothing is ever
      hidden for a reader without JavaScript. prefers-reduced-motion is
      honoured in CSS.
   4. Scrollspy. The sticky subnav highlights the section you are reading.
--------------------------------------------------------------------------- */
(function () {
  "use strict";

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- reveal ---- */
  var targets = document.querySelectorAll(".reveal");
  if (!targets.length) { /* nothing to do */ }
  else if (reduced || !("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(targets, function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    Array.prototype.forEach.call(targets, function (el) { io.observe(el); });
    // Anything already on screen at load should not wait for a scroll.
    window.setTimeout(function () {
      Array.prototype.forEach.call(targets, function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in");
      });
    }, 60);
  }

  /* ---- project index: sticky, with the project being read marked ----
     The index sits under the sticky header (CSS). Its offsets depend on the
     header's real height, which changes when the nav wraps on a phone, so both
     heights are measured and handed to CSS as --head-h and --subnav-h.
     The project being read is the last one whose top has passed under the two
     bars. Ranking by "most visible" misfires on long projects: a tall article
     that fills the screen scores lower than a short neighbour peeking in. */
  var nav = document.querySelector(".subnav");
  if (!nav) return;
  var head = document.querySelector(".site-head");
  var rootEl = document.documentElement;
  var list = nav.querySelector("ul");
  var measure = function () {
    rootEl.style.setProperty("--head-h", (head ? head.offsetHeight : 0) + "px");
    rootEl.style.setProperty("--subnav-h", nav.offsetHeight + "px");
    if (list) nav.classList.toggle("is-scrollable", list.scrollWidth > list.clientWidth + 1);
  };
  measure();
  window.addEventListener("resize", measure);

  var links = {}, sections = [];
  Array.prototype.forEach.call(nav.querySelectorAll('a[href^="#"]'), function (a) {
    var id = a.getAttribute("href").slice(1);
    var sec = document.getElementById(id);
    if (sec) { links[id] = a; sections.push(sec); }
  });
  if (!sections.length) return;

  var current;
  var setActive = function (id) {
    if (id === current) return;
    current = id;
    Object.keys(links).forEach(function (k) {
      if (k === id) links[k].setAttribute("aria-current", "location");
      else links[k].removeAttribute("aria-current");
    });
    // On a narrow screen the index scrolls sideways; keep the marked one in view.
    var a = id && links[id];
    if (a && list && list.scrollWidth > list.clientWidth + 1) {
      var left = a.offsetLeft - (list.clientWidth - a.offsetWidth) / 2;
      try { list.scrollTo({ left: Math.max(0, left), behavior: reduced ? "auto" : "smooth" }); }
      catch (e) { list.scrollLeft = Math.max(0, left); }
    }
  };
  var update = function () {
    var line = (head ? head.offsetHeight : 0) + nav.offsetHeight + 48;
    var id = null;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= line) id = sections[i].id;
    }
    setActive(id);
  };
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { ticking = false; update(); });
  }, { passive: true });
  window.addEventListener("resize", update);
  update();
})();

/* ---- pause control for autoplaying loops (WCAG 2.2.2) ----
   Anything that moves on its own for more than five seconds needs a way to
   stop it. The clips are muted decoration, so they also pause off screen. */
(function () {
  "use strict";
  var vids = document.querySelectorAll("video[autoplay][loop]");
  if (!vids.length) return;
  Array.prototype.forEach.call(vids, function (v) {
    var holder = v.parentNode;
    if (getComputedStyle(holder).position === "static") holder.style.position = "relative";
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "vbtn";
    var sync = function () {
      btn.setAttribute("aria-pressed", String(v.paused));
      btn.setAttribute("aria-label", v.paused ? "Play this clip" : "Pause this clip");
    };
    btn.addEventListener("click", function () {
      if (v.paused) { delete v.dataset.userPaused; v.play().catch(function () {}); }
      else { v.dataset.userPaused = "1"; v.pause(); }
    });
    v.addEventListener("play", sync);
    v.addEventListener("pause", sync);
    sync();
    holder.appendChild(btn);
  });
  if (!("IntersectionObserver" in window)) return;
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) { if (!v.dataset.userPaused) v.play().catch(function () {}); }
      else if (!v.paused) { v.pause(); }
    });
  }, { rootMargin: "150px 0px", threshold: 0.2 });
  Array.prototype.forEach.call(vids, function (v) { io.observe(v); });
})();
