
(() => {
  "use strict";

  const body = document.body;
  const header = document.getElementById("siteHeader");
  const progress = document.getElementById("pageProgress");
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  const modal = document.getElementById("mediaModal");
  const modalContent = document.getElementById("modalContent");
  const modalTitle = document.getElementById("modalTitle");
  const toast = document.getElementById("toast");
  const showcaseTrack = document.getElementById("showcaseTrack");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.getElementById("currentYear").textContent = new Date().getFullYear();

  const updateScrollUI = () => {
    const scrollTop = window.scrollY;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
    progress.style.width = `${percent}%`;
    header.classList.toggle("scrolled", scrollTop > 30);
  };

  updateScrollUI();
  window.addEventListener("scroll", updateScrollUI, { passive: true });

  const closeMobileMenu = () => {
    mobileNav.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    body.classList.remove("menu-open");
  };

  menuToggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menuToggle.classList.toggle("active", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    body.classList.toggle("menu-open", open);
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("click", (event) => {
    if (
      mobileNav.classList.contains("open") &&
      !mobileNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMobileMenu();
    }
  });

  const revealElements = [...document.querySelectorAll(".reveal")];
  revealElements.forEach((element) => {
    const delay = element.dataset.delay || "0";
    element.style.setProperty("--delay", `${delay}ms`);
  });

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" }
    );
    revealElements.forEach((element) => revealObserver.observe(element));
  }

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".desktop-nav .nav-link")];

  const setActiveSection = () => {
    const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 280);
    let activeId = sections[0]?.id || "home";

    sections.forEach((section) => {
      if (section.offsetTop <= marker) activeId = section.id;
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
    });
  };

  setActiveSection();
  window.addEventListener("scroll", setActiveSection, { passive: true });

  const openModal = ({ type, src, caption = "", poster = "" }) => {
    modalContent.innerHTML = "";

    if (type === "video") {
      const video = document.createElement("video");
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.preload = "metadata";
      if (poster) video.poster = poster;
      video.setAttribute("aria-label", caption || "Project video");
      modalContent.appendChild(video);
    } else {
      const image = document.createElement("img");
      image.src = src;
      image.alt = caption || "Portfolio media preview";
      modalContent.appendChild(image);
    }

    modalTitle.textContent = caption;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    body.classList.add("modal-open");
    const closeButton = modal.querySelector(".modal-close");
    window.setTimeout(() => closeButton.focus(), 50);
  };

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    body.classList.remove("modal-open");
    const video = modalContent.querySelector("video");
    if (video) {
      video.pause();
      video.removeAttribute("src");
      video.load();
    }
    modalContent.innerHTML = "";
    modalTitle.textContent = "";
  };

  document.querySelectorAll("[data-lightbox]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openModal({
        type: "image",
        src: trigger.dataset.lightbox,
        caption: trigger.dataset.caption || ""
      });
    });
  });

  document.querySelectorAll("[data-video]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openModal({
        type: "video",
        src: trigger.dataset.video,
        poster: trigger.dataset.poster || "",
        caption: trigger.dataset.videoTitle || "Project walkthrough"
      });
    });
  });

  modal.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });

  const filterButtons = [...document.querySelectorAll(".filter-button")];
  const showcaseItems = [...document.querySelectorAll(".showcase-item")];

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      showcaseItems.forEach((item) => {
        const visible = filter === "all" || item.dataset.category === filter;
        item.classList.toggle("hidden", !visible);
      });
      showcaseTrack.scrollTo({ left: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  });

  const scrollShowcase = (direction) => {
    const visibleItem = showcaseTrack.querySelector(".showcase-item:not(.hidden)");
    const amount = visibleItem ? visibleItem.getBoundingClientRect().width + 14 : 320;
    showcaseTrack.scrollBy({
      left: direction * amount,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  };

  document.getElementById("showcasePrev").addEventListener("click", () => scrollShowcase(-1));
  document.getElementById("showcaseNext").addEventListener("click", () => scrollShowcase(1));

  document.querySelectorAll(".copy-email").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.dataset.copy;
      try {
        await navigator.clipboard.writeText(value);
        toast.textContent = "Email copied";
      } catch (error) {
        toast.textContent = value;
      }
      toast.classList.add("show");
      window.setTimeout(() => toast.classList.remove("show"), 1800);
    });
  });

  if (window.matchMedia("(hover: hover)").matches) {
    const glow = document.querySelector(".cursor-glow");
    window.addEventListener("pointermove", (event) => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
      glow.style.opacity = "1";
    });
    document.documentElement.addEventListener("mouseleave", () => {
      glow.style.opacity = "0";
    });
  }

  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start"
      });
      history.replaceState(null, "", targetId);
    });
  });
})();
