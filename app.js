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

let currentIndex = 0;

function updateCarousel() {
  const track = document.getElementById("carouselTrack");
  const width = track.offsetWidth;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

function nextSlide() {
  const track = document.getElementById("carouselTrack");
  const maxSlides = track.children.length;
  currentIndex = (currentIndex + 1) % maxSlides;
  updateCarousel();
}

function prevSlide() {
  const track = document.getElementById("carouselTrack");
  const maxSlides = track.children.length;
  currentIndex = (currentIndex - 1 + maxSlides) % maxSlides;
  updateCarousel();
}

window.addEventListener("resize", updateCarousel);
