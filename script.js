let burgerIcon = document.querySelector(".open-menu");
let closeIcon = document.querySelector(".close-menu");
let nav = document.querySelector(".nav");
let links = document.querySelectorAll(".nav__li");
let header = document.querySelector(".scroll-effect");

burgerIcon.addEventListener("click", () => {
  nav.classList.toggle("toggle");
  header.classList.toggle("scroll-effect");
  closeIcon.style.display = "block";
  burgerIcon.style.display = "none";
});

closeIcon.addEventListener("click", () => {
  nav.classList.toggle("toggle");
  header.classList.toggle("scroll-effect");
  closeIcon.style.display = "none";
  burgerIcon.style.display = "block";
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("toggle");
    header.classList.toggle("scroll-effect");
    closeIcon.style.display = "none";
    burgerIcon.style.display = "block";
  });
});

let prev = window.pageYOffset;

window.onscroll = function () {
  let current = window.pageYOffset;
  let num;
  prev > current ? (num = "0") : (num = "-60px");
  document.querySelector(".scroll-effect").style.top = `${num}`;
  prev = current;
};
