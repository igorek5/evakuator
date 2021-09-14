const left = document.querySelector(".slider__button--left");
const right = document.querySelector(".slider__button--right");

const slider = document.querySelector(".slider__list");
const sliderItems = document.querySelectorAll(".slider__item");

let counter = 0;
const stepSize = 315;

slider.style.left = counter * stepSize + 'px';

right.addEventListener('click', () => {
  counter >= sliderItems.length - 1 ? counter = -1 : null
  counter++;
  slider.style.left = counter * -stepSize + 'px';
})

left.addEventListener('click', () => {
  counter <= 0 ? counter = sliderItems.length : null
  counter--;
  slider.style.left = counter * -stepSize + 'px';
})
