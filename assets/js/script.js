const hamburger = document.querySelector(".hamburger-icon");
const closeBtn = document.querySelector(".close-icon");
const navMenu = document.querySelector(".nav-links");
const body = document.querySelector("body");
const img = document.querySelector(".web-3-img-mobile");

const myNav = document.querySelector(".overlay");

hamburger.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  hamburger.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");

  if (hamburger.classList.contains("hidden")) {
    openNav();
  } else {
    closeNav();
  }
}

function openNav() {
  myNav.style.width = "90vw";
  closeBtn.style.zIndex = "2";

  // Dim the background and image
  body.style.background =
    "linear-gradient(rgba(0,0,0,0.7), rgba(0, 0, 0, 0.7))";

  img.style.filter = "brightness(0.5)";
}

function closeNav() {
  myNav.style.width = "0";

  body.style.background = "#FFF";
  img.style.filter = "brightness(1)";
}
