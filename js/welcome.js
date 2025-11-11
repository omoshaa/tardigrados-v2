// ===================================
// PÁGINA DE BOAS-VINDAS - TARDISTUDY
// Animações e efeitos visuais
// ===================================

document.addEventListener("DOMContentLoaded", function () {
  createParticles();
  initAnimations();
});

// Criar partículas de fundo animadas
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Tamanho aleatório
    const size = Math.random() * 60 + 20;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Posição aleatória
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Delay aleatório
    particle.style.animationDelay = `${Math.random() * 15}s`;

    // Duração aleatória
    particle.style.animationDuration = `${Math.random() * 10 + 10}s`;

    particlesContainer.appendChild(particle);
  }
}

// Inicializar animações extras
function initAnimations() {
  // Efeito de hover no logo
  const logoCircle = document.querySelector(".logo-circle");
  if (logoCircle) {
    logoCircle.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1) rotate(10deg)";
    });

    logoCircle.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)";
    });
  }

  // Efeito parallax suave no movimento do mouse
  document.addEventListener("mousemove", function (e) {
    const floatingTardigrade = document.querySelector(".floating-tardigrade");
    if (floatingTardigrade) {
      const moveX = (e.clientX - window.innerWidth / 2) / 50;
      const moveY = (e.clientY - window.innerHeight / 2) / 50;
      floatingTardigrade.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  });

  // Adicionar efeito de ripple ao clicar no botão
  const enterButton = document.querySelector(".enter-button");
  if (enterButton) {
    enterButton.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");

      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  }
}

// Adicionar estilo para o efeito ripple
const style = document.createElement("style");
style.textContent = `
    .enter-button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
