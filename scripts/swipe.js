const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      }
  });
}, { threshold: 0.5 }); // Trigger when 50% of the element is visible

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const projectsSection = document.getElementById('projects');
const productCards = projectsSection.querySelectorAll('.product-card');
const header = document.querySelector('#projects > h1');

function showProjectCards() {
const sectionPosition = projectsSection.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.5;

if (sectionPosition < screenPosition) {
  header.classList.add('slide-in');
  productCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('visible');
      card.classList.add(index % 2 === 0 ? 'slide-left' : 'slide-right');
    }, index * 200); // Adjust the delay between cards (in milliseconds)
  });
} else {
  header.classList.remove('slide-in');
  productCards.forEach(card => {
    card.classList.remove('visible', 'slide-left', 'slide-right');
  });
}
}

window.addEventListener('scroll', showProjectCards);