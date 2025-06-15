let tabs = document.querySelectorAll('a[data-tab]');
let activeTab = 'intro';
let zIndex = 2;

tabs.forEach(tab => {
    tab.addEventListener('click', function (event) {
        let selectedTab = tab.dataset.tab;
        
        if (selectedTab !== null && selectedTab !== activeTab) {
            let activeTabElement = document.querySelector('.tab.active');
            
            if (activeTabElement) {
                activeTabElement.classList.remove('active');
            }

            activeTab = selectedTab;
            let selectedTabElement = document.getElementById(activeTab);
            
            zIndex++;
            selectedTabElement.style.zIndex = zIndex;
            selectedTabElement.style.setProperty('--x', event.clientX + 'px');
            selectedTabElement.style.setProperty('--y', event.clientY + 'px');
            
            selectedTabElement.classList.add('active');
        }
    });
});

const jobElement = document.querySelector(".job span");
const roles = ["Developer", "Designer", "Engineer", "Coder", "Innovator", "Programmer", "Explorer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let pauseEnd = false;

function type() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        charIndex++;
        jobElement.textContent = currentRole.substring(0, charIndex);
    } else {
        charIndex--;
        jobElement.textContent = currentRole.substring(0, charIndex);
    }

    let delay = isDeleting ? 50 : 100;

    // Pause *after* full word is typed
    if (!isDeleting && charIndex === currentRole.length) {
        pauseEnd = true;
        delay = 800; // shorter pause
    }

    if (pauseEnd) {
        pauseEnd = false;
        isDeleting = true;
        setTimeout(type, delay);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 300;
    }

    setTimeout(type, delay);
}

type();

let currentCategory = 'apps';
let currentIndices = {
  apps: 0,
  python: 0,
  web: 0,
  hackathons: 0
};

function updateCarousel() {
  const track = document.querySelector(`#carousel-${currentCategory} .carousel-track`);
  const index = currentIndices[currentCategory];
  const width = track.offsetWidth;
  track.style.transform = `translateX(-${index * width}px)`;
}

function nextSlide() {
  const track = document.querySelector(`#carousel-${currentCategory} .carousel-track`);
  const maxSlides = track.children.length;
  currentIndices[currentCategory] = (currentIndices[currentCategory] + 1) % maxSlides;
  updateCarousel();
}

function prevSlide() {
  const track = document.querySelector(`#carousel-${currentCategory} .carousel-track`);
  const maxSlides = track.children.length;
  currentIndices[currentCategory] = (currentIndices[currentCategory] - 1 + maxSlides) % maxSlides;
  updateCarousel();
}

document.querySelectorAll('.project-categories button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.project-categories button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('#project .carousel.category').forEach(c => c.classList.remove('active'));
    currentCategory = btn.dataset.category;
    currentIndices[currentCategory] = 0;
    document.getElementById(`carousel-${currentCategory}`).classList.add('active');
    updateCarousel();
  });
});

window.addEventListener("resize", updateCarousel);

// initialize carousel position
updateCarousel();

// LIGHTBOX CODE
function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
