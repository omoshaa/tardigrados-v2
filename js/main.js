// ===================================
// TARDISTUDY V2 - SCRIPT PRINCIPAL
// ===================================

document.addEventListener("DOMContentLoaded", function () {
  registerServiceWorker();
  initMobileMenu();
  initScrollToTop();
  initNavbarScroll();
  updateActiveNav();
});

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  // Service workers exigem http(s) (exceto localhost)
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("../sw.js").catch(() => {
      // Silencioso: não quebra a navegação se SW falhar
    });
  });
}

// ============================================================
// MENU MOBILE
// ============================================================
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const closeMenuBtn = document.getElementById("closeMenuBtn");

  let lastFocusedElement = null;

  if (mobileMenuBtn && mobileNav) {
    // Estado inicial
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");

    // Abrir menu
    mobileMenuBtn.addEventListener("click", function () {
      lastFocusedElement = document.activeElement;
      mobileNav.classList.add("active");
      mobileMenuBtn.classList.add("active");
      mobileMenuBtn.setAttribute("aria-expanded", "true");
      mobileNav.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";

      // Focar o botão de fechar (melhor para teclado)
      if (closeMenuBtn) {
        closeMenuBtn.focus();
      }
    });

    // Fechar menu
    if (closeMenuBtn) {
      closeMenuBtn.addEventListener("click", closeMenu);
    }

    // Fechar ao clicar em um link
    const mobileNavItems = document.querySelectorAll(".mobile-nav-item");
    mobileNavItems.forEach((item) => {
      item.addEventListener("click", closeMenu);
    });

    // Fechar com ESC
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileNav.classList.contains("active")) {
        closeMenu();
      }
    });
  }

  function closeMenu() {
    if (!mobileNav || !mobileMenuBtn) return;
    mobileNav.classList.remove("active");
    mobileMenuBtn.classList.remove("active");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    } else {
      mobileMenuBtn.focus();
    }
  }
}

// ============================================================
// BOTÃO SCROLL TO TOP
// ============================================================
function initScrollToTop() {
  const scrollBtn = document.getElementById("scrollToTop");

  if (scrollBtn) {
    // Mostrar/esconder botão ao rolar
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        scrollBtn.classList.add("show");
      } else {
        scrollBtn.classList.remove("show");
      }
    });

    // Voltar ao topo ao clicar
    scrollBtn.addEventListener("click", function () {
      const prefersReducedMotion = window.matchMedia
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false;

      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  }
}

// ============================================================
// NAVBAR SCROLL EFFECT
// ============================================================
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }
}

// ============================================================
// HIGHLIGHT DA NAVEGAÇÃO ATIVA
// ============================================================
function updateActiveNav() {
  const currentPage = window.location.pathname.split("/").pop();
  const navItems = document.querySelectorAll(".nav-item");
  const mobileNavItems = document.querySelectorAll(".mobile-nav-item");

  navItems.forEach((item) => {
    const href = item.getAttribute("href");
    if (href === currentPage) {
      item.classList.add("active");
      item.setAttribute("aria-current", "page");
    } else {
      item.classList.remove("active");
      item.removeAttribute("aria-current");
    }
  });

  mobileNavItems.forEach((item) => {
    const href = item.getAttribute("href");
    if (href === currentPage) {
      item.setAttribute("aria-current", "page");
    } else {
      item.removeAttribute("aria-current");
    }
  });
}
