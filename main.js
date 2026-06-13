/* Kirk Linam portfolio — interactions */
(function () {
  "use strict";

  /* ---- Scroll reveal + stat underline trigger ---- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in-view");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal, .stats-grid").forEach(function (el) {
    io.observe(el);
  });

  /* ---- Mobile nav ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("show"); });
    });
  }

  /* ---- Lightbox for gallery images ---- */
  var lb = document.createElement("div");
  lb.className = "lb";
  lb.innerHTML = '<button class="lb-close" aria-label="Close">&times;</button><img alt="">';
  document.body.appendChild(lb);
  var lbImg = lb.querySelector("img");
  var closeBtn = lb.querySelector(".lb-close");

  function openLB(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || "";
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeLB() {
    lb.classList.remove("open");
    document.body.style.overflow = "";
  }
  document.querySelectorAll(".gallery .frame img, .zoomable").forEach(function (img) {
    img.parentElement.style.cursor = "zoom-in";
    img.addEventListener("click", function () { openLB(img.src, img.alt); });
  });
  closeBtn.addEventListener("click", closeLB);
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLB(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLB(); });
})();
