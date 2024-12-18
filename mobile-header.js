const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mainMenu = document.getElementById("main-menu");
const menuItems = document.querySelectorAll(".menu-item");

// Overlay
const overlay = document.createElement("div");
overlay.className = "overlay";
document.body.appendChild(overlay);

// Abrir o menu
menuToggle.addEventListener("click", () => {
  mainMenu.classList.add("active");
  overlay.classList.add("active");
});

// Fechar com o X
menuClose.addEventListener("click", () => {
  mainMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// Fechar com o overlay
overlay.addEventListener("click", () => {
  mainMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// Fechar com um item
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    mainMenu.classList.remove("active");
    overlay.classList.remove("active");
  });
});

// SCROLL LISTENER

const header = document.querySelector("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollY = currentScrollY;
});
