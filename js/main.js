// ===================================
// TARDISTUDY V2 - SCRIPT PRINCIPAL
// ===================================

document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
  initScrollToTop();
  initNavbarScroll();
});

// ============================================================
// MENU MOBILE
// ============================================================
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const closeMenuBtn = document.getElementById("closeMenuBtn");

  if (mobileMenuBtn && mobileNav) {
    // Abrir menu
    mobileMenuBtn.addEventListener("click", function () {
      mobileNav.classList.add("active");
      mobileMenuBtn.classList.add("active");
      document.body.style.overflow = "hidden";
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

    // Fechar ao clicar fora
    mobileNav.addEventListener("click", function (e) {
      if (e.target === mobileNav) {
        closeMenu();
      }
    });
  }

  function closeMenu() {
    mobileNav.classList.remove("active");
    mobileMenuBtn.classList.remove("active");
    document.body.style.overflow = "auto";
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
      window.scrollTo({
        top: 0,
        behavior: "smooth",
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

  navItems.forEach((item) => {
    const href = item.getAttribute("href");
    if (href === currentPage) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Atualizar ao carregar
updateActiveNav();
