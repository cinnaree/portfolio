
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

/*Card-flip (contact)*/
const card = document.querySelector(".flip-card");
const flipToBackBtn = document.getElementById("flipToBack");
const flipToFrontBtn = document.getElementById("flipToFront");
const contactForm = document.getElementById("contactForm");
const frontMessage = document.getElementById("frontMessage");

flipToBackBtn.addEventListener("click", () => {
  card.classList.add("flipped");
});

flipToFrontBtn.addEventListener("click", () => {
  card.classList.remove("flipped");
});

contactForm.addEventListener("submit", (e) => {
  setTimeout(() => {
    card.classList.remove("flipped");
    frontMessage.textContent = "💌 Thank you for reaching out! I'll get back to you soon.";
  }, 1000); // Optional: simulate delay for smoother experience
});




