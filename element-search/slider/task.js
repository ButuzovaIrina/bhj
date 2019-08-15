let slides = document.querySelectorAll(".slider__item");
let currentSlide = 0;

let next = document.querySelector("div.slider__arrow.slider__arrow_next");
let previous = document.querySelector("div.slider__arrow.slider__arrow_prev");

next.onclick = function() {
  slides[currentSlide].className = "slider__item";
  if (currentSlide < slides.length - 1) { 
    currentSlide++;
  } else {
    currentSlide = 0;
  }    
  slides[currentSlide].className = "slider__item slider__item_active";
};

previous.onclick = function() {
    slides[currentSlide].className = "slider__item";
    if (currentSlide > 0) { 
      currentSlide--;
    } else {
      currentSlide = slides.length - 1;
    }    
    slides[currentSlide].className = "slider__item slider__item_active";
};

