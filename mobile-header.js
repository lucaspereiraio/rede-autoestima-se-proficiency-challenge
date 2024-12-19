// MENU TOGGLE LISTENER
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("menu-close");
const mainMenu = document.getElementById("main-menu");
const menuItems = document.querySelectorAll(".menu-item");

const overlay = document.createElement("div");
overlay.className = "overlay";
document.body.appendChild(overlay);

const openMenu = () => {
  mainMenu.classList.add("active");
  overlay.classList.add("active");
};

const closeMenu = () => {
  mainMenu.classList.remove("active");
  overlay.classList.remove("active");
};

// Eventos
menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    closeMenu();
  });
});

// SCROLL LISTENER
const header = document.querySelector("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (mainMenu.classList.contains("active")) {
    return;
  }

  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollY = currentScrollY;
});
