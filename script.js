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
