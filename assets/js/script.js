const hamburger = document.querySelector(".hamburger-icon");
const closeBtn = document.querySelector(".close-icon");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  hamburger.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
}
