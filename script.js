
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

/* Enhanced Smooth scrolling for navigation links */
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const navHeight = document.querySelector('.nav').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Update URL without jumping
      if (history.pushState) {
        history.pushState(null, null, targetId);
      } else {
        window.location.hash = targetId;
      }
    }
  });
});

/* Improved Active Section Tracking */
function setActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute('id');
    
    if (window.scrollY >= (sectionTop - 150) && 
        window.scrollY < (sectionTop + sectionHeight - 150)) {
      currentSection = sectionId;
    }
  });
  
  navLinks.forEach(link => {
    link.parentElement.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.parentElement.classList.add('active');
    }
  });
}

// Run on initial load and scroll
window.addEventListener('load', setActiveNavLink);
window.addEventListener('scroll', setActiveNavLink);