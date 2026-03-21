let currentCategory = "apps";
const currentIndices = {
  apps: 0,
  python: 0,
  web: 0,
  hackathons: 0,
  "open-source": 0,
  mips: 0
};

function updateCarousel() {
  const carousel = document.getElementById(`carousel-${currentCategory}`);
  const track = carousel?.querySelector(".carousel-track");

  if (!track) {
    return;
  }

  const card = track.querySelector(".project-card");
  const cardWidth = card ? card.getBoundingClientRect().width : track.getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndices[currentCategory] * cardWidth}px)`;
}

function nextSlide() {
  const track = document.querySelector(`#carousel-${currentCategory} .carousel-track`);
  if (!track) {
    return;
  }

  const maxSlides = track.children.length;
  currentIndices[currentCategory] = (currentIndices[currentCategory] + 1) % maxSlides;
  updateCarousel();
}

function prevSlide() {
  const track = document.querySelector(`#carousel-${currentCategory} .carousel-track`);
  if (!track) {
    return;
  }

  const maxSlides = track.children.length;
  currentIndices[currentCategory] = (currentIndices[currentCategory] - 1 + maxSlides) % maxSlides;
  updateCarousel();
}

document.querySelectorAll(".project-categories button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".project-categories button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    document.querySelectorAll(".carousel.category").forEach((carousel) => carousel.classList.remove("active"));

    currentCategory = button.dataset.category;
    currentIndices[currentCategory] = 0;
    document.getElementById(`carousel-${currentCategory}`)?.classList.add("active");
    updateCarousel();
  });
});

document.querySelectorAll(".carousel-btn").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.direction === "next") {
      nextSlide();
    } else {
      prevSlide();
    }
  });
});

window.addEventListener("resize", updateCarousel);
window.addEventListener("load", updateCarousel);

function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (!lightbox || !lightboxImg) {
    return;
  }

  lightboxImg.src = src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");

  if (lightbox) {
    lightbox.style.display = "none";
  }
}

window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
