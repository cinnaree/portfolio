
/*Skills*/
const toolIcons = document.querySelectorAll(".tool-icon");
const skillTags = document.querySelectorAll(".skill-tag");

toolIcons.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    const skillKey = icon.dataset.skill;

    skillTags.forEach(tag => {
      const linkedTools = tag.dataset.linked.split(" ");
        const category = tag.dataset.category;

      if (linkedTools.includes(skillKey)) {
        tag.classList.add("highlighted", `highlight-${category}`);
      } else {
        tag.classList.remove("highlighted", `highlight-${category}`);
      }
    });
  });

  icon.addEventListener("mouseleave", () => {
    skillTags.forEach(tag => tag.classList.remove("highlighted"));
  });
});

/*View Project*/

// Open modal
document.querySelectorAll(".open-modal").forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.dataset.modal;
    document.getElementById(modalId).classList.add("active");
  });
});

// Close modal
document.querySelectorAll(".close-modal").forEach(button => {
  button.addEventListener("click", () => {
    button.closest(".modal-overlay").classList.remove("active");
  });
});

//Close modal when clicking outside
document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", e => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
  });
});

/* Smooth scrolling for navigation links */
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Calculate the position to scroll to (accounting for fixed nav height)
      const navHeight = document.querySelector('.nav').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      // Smooth scroll to the target
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Update URL without jumping
      history.pushState(null, null, targetId);
    }
  });
});

/* Highlight active nav link while scrolling */
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= (sectionTop - 100)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.parentElement.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.parentElement.classList.add('active');
    }
  });
});