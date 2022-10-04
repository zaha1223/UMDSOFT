var elBtn = document.querySelector(".hamburger-btn");
var elModal = document.querySelector(".modal");
var elDel = document.querySelector(".modal__del");

elBtn.addEventListener("click", function () {
  elModal.classList.toggle("open");
});
elDel.addEventListener("click", function () {
  elModal.classList.remove("open");
});
