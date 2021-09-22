const questionsButtons = document.querySelectorAll(".questions__button");

questionsButtons.forEach((el) => {
el.addEventListener("click", function (evt) {
  evt.preventDefault();
  el.classList.toggle("active");
});
})

