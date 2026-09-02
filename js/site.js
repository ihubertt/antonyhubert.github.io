/* Antony Hubert — portfolio
   Two jobs only:
   1. Show a labelled placeholder for any figure whose asset is not in the repo yet,
      so the site never renders a broken image. Drop the file in and it just works —
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
      lbCap.textContent = fc ? fc.textContent.trim() : (img.alt || "");
      setFit(img.naturalWidth > window.innerWidth);
      lb.classList.add("open");
      document.body.classList.add("lb-open");
      lb.scrollTop = 0;
    }
    function close() {
      lb.classList.remove("open");
      document.body.classList.remove("lb-open");
      lbImg.removeAttribute("src");
      if (last) { last.focus && last.focus(); last = null; }
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
    lb.querySelector("[data-close]").addEventListener("click", function (ev) { ev.stopPropagation(); close(); });
    lb.addEventListener("click", close);
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && lb.classList.contains("open")) close();
    });
  }
})();
