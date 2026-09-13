const words = ["AI agents.", "ML systems.", "full-stack apps."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const targetEl = document.getElementById("typewriter-text");
function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    targetEl.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    targetEl.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 40 : 40;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000; 
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 400; 
  }

  setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
 
document.addEventListener("DOMContentLoaded", () => {
  const expandBtn = document.getElementById("expand-btn");
  const expandText = document.getElementById("expand-text");
  const expandArrow = document.getElementById("expand-arrow");
  const statusDetails = document.getElementById("status-details");

  if (expandBtn && statusDetails) {
    expandBtn.addEventListener("click", () => {
      const isHidden = statusDetails.classList.contains("hidden");

      if (isHidden) {
        statusDetails.classList.remove("hidden");
        if (expandText) expandText.textContent = "Collapse";
        if (expandArrow) expandArrow.textContent = "⌃";
        expandBtn.setAttribute("aria-expanded", "true");
      } else {
        statusDetails.classList.add("hidden");
        if (expandText) expandText.textContent = "Expand details";
        if (expandArrow) expandArrow.textContent = "⌄";
        expandBtn.setAttribute("aria-expanded", "false");
      }
    });
  }
});