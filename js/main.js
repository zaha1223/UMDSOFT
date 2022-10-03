const modal = document.querySelector(".navbar__list2");
const body = document.querySelector("body");
const btn = document.querySelector(".nav__btn");

btn.addEventListener("click", () => {
  modal.classList.toggle("open");
  body.classList.toggle("overflow");
});
