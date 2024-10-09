// Scroll Animations for Projects and Skills
window.addEventListener('scroll', function () {
  const projects = document.querySelectorAll('#projects .project');
  const skills = document.querySelectorAll('#skills ul li');
  
  function revealOnScroll(elements) {
      const triggerBottom = window.innerHeight * 0.85;

      elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          if (elementTop < triggerBottom) {
              element.classList.add('visible');
          }
      });
  }

  revealOnScroll(projects);
  revealOnScroll(skills);
});

// Hover effect for project cards
const projectCards = document.querySelectorAll('.project');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.transition = 'transform 0.3s ease-in-out';
  });

  card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
  });
});

// Hover effect for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
      link.style.color = '#ffd700';
      link.style.transition = 'color 0.3s ease-in-out';
  });

  link.addEventListener('mouseleave', () => {
      link.style.color = '#fff';
  });
});

// Hover effect for about details
const aboutDetails = document.querySelectorAll('.about-details li');

aboutDetails.forEach(detail => {
  detail.addEventListener('mouseenter', () => {
      detail.style.transform = 'scale(1.05)';
      detail.style.transition = 'transform 0.3s ease-in-out';
  });

  detail.addEventListener('mouseleave', () => {
      detail.style.transform = 'scale(1)';
  });
});

// Get the scroll down element
const scrollDown = document.getElementById("scrollDown");

// Smooth scroll functionality
scrollDown.addEventListener("click", function() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});

// Fade out the scroll down indicator when scrolling
window.addEventListener("scroll", function() {
  // Get the scroll position
  const scrollY = window.scrollY;

  // If the user scrolls down more than 50 pixels, start fading out
  if (scrollY > 50) {
    scrollDown.style.opacity = 0; // Fade out
  } else {
    scrollDown.style.opacity = 1; // Fade in
  }
});

  
  