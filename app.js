const [slider] = Array.from(document.getElementsByClassName('slider'));
const slides = Array.from(document.getElementsByClassName('slide'));
const slidesContent = Array.from(document.getElementsByClassName('slideContent'));
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let translate = 0;
let clientX;

function slidesOnScreen() {
  const sliderWidth = slider.offsetWidth;
  const slideWidth = slides[0].offsetWidth;
  return Math.round(sliderWidth / slideWidth);
}

function moveSlidesToRight() {
  const maxTranslate = 0;
  const minTranslate = -(slides.length - slidesOnScreen()) * 100;

  translate = (translate >= maxTranslate) ? minTranslate : translate + 100;
  slides.map(slide => slide.style.transform = `translate(${translate}%)`);
}

function moveSlidesToLeft() {
  const maxTranslate = 0;
  const minTranslate = -(slides.length - slidesOnScreen()) * 100;

  translate = (translate <= minTranslate) ? maxTranslate : translate - 100;
  slides.map(slide => slide.style.transform = `translate(${translate}%)`);
}

prevButton.addEventListener('click', moveSlidesToRight);

nextButton.addEventListener('click', moveSlidesToLeft);

window.addEventListener('resize', () => {
  resizeSlide();
});

slider.addEventListener('touchstart', function(e) {
  clientX = e.touches[0].clientX;
}, false);

slider.addEventListener('touchend', function(e) {
  let deltaX = e.changedTouches[0].clientX - clientX;

  if (deltaX < 0) {
    moveSlidesToLeft();
  } else if (deltaX > 0) {
    moveSlidesToRight();
  }
}, false);

function resizeSlide() {
  const slideWidth = slides[0].offsetWidth;
  slider.style.height = `${0.75 * slideWidth}px`;
  slidesContent.map(slideContent => slideContent.style.fontSize = `${slideWidth/2}px`);
}

resizeSlide();