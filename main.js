// =========================
// PARALLAX
// =========================

const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionX = offset * (-0.08) + "px";
});

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  offset -= 3100;
  parallax1.style.backgroundPositionY = offset * (0.1) + "px";
});

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  offset -= 4800;
  parallax2.style.backgroundPositionY = offset * (-0.1) + "px";
});

// =========================
// FECHAR MENU MOBILE
// =========================

function myFunction() {
  document.getElementById("check").checked = false;
}

// =========================
// GALERIA (CORRIGIDA PARA MOBILE E DESKTOP)
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".gallery-track");
  const prevBtn = document.querySelector(".gallery-btn.prev");
  const nextBtn = document.querySelector(".gallery-btn.next");

  if (track && prevBtn && nextBtn) {
    const slides = Array.from(document.querySelectorAll(".gallery-img"));
    let currentIndex = 0;

    function updateGallery() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateGallery();
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateGallery();
      }
    });

    window.addEventListener("resize", updateGallery);

    updateGallery();
  }

  // =========================
  // REVEAL ANIMATION
  // =========================

  function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
});
