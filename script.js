let burgerIcon = document.querySelector(".material-symbols-outlined");
let nav = document.querySelector(".nav");
let links = document.querySelectorAll(".nav__li");
let header = document.querySelector(".scroll-effect");

burgerIcon.addEventListener("click", () => {
  nav.classList.toggle("toggle");
  header.classList.toggle("scroll-effect");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("toggle");
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
