const backToTopButton = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    backToTopButton.classList.add("active");
  } else {
    backToTopButton.classList.remove("active");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
