const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mainMenu = document.getElementById("main-menu");
const menuItems = document.querySelectorAll(".menu-item");

// Adiciona overlay para capturar cliques fora do menu
const overlay = document.createElement("div");
overlay.className = "overlay";
document.body.appendChild(overlay);

// Abrir o menu
menuToggle.addEventListener("click", () => {
  mainMenu.classList.add("active");
  overlay.classList.add("active");
});

// Fechar o menu ao clicar no botão "X"
menuClose.addEventListener("click", () => {
  mainMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// Fechar o menu ao clicar fora do menu
overlay.addEventListener("click", () => {
  mainMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// Fechar o menu ao clicar em qualquer item do menu
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    mainMenu.classList.remove("active");
    overlay.classList.remove("active");
  });
});
