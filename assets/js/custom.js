let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".header-menu");
let bod = document.querySelector(".container");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("isactive");
  nav.classList.toggle("active");
});
