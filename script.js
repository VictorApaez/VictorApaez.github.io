let burgerIcon = document.querySelector(".open-menu");
let closeIcon = document.querySelector(".close-menu");
let nav = document.querySelector(".nav");
let links = document.querySelectorAll(".nav__li");
let header = document.querySelector(".scroll-effect");
let scrollTopBtn = document.querySelector(".back-to-top");

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

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
