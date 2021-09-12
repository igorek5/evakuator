const questionsButtons = document.querySelectorAll(".questions__button");
console.log(questionsButtons);

questionsButtons.forEach((el) => {
el.addEventListener("click", function (evt) {
  evt.preventDefault();
  el.classList.toggle("active");
});
})

