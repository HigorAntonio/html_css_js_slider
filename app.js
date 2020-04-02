const [slider] = Array.from(document.getElementsByClassName('slider'));
const slides = Array.from(document.getElementsByClassName('slide'));
const slidesContent = Array.from(document.getElementsByClassName('slideContent'));
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let translate = 0;

function resizeSlide() {
  const slideWidth = slides[0].offsetWidth;
  slider.style.height = `${0.75 * slideWidth}px`;
  slidesContent.map(slideContent => slideContent.style.fontSize = `${slideWidth/2}px`);
}

resizeSlide();

prevButton.addEventListener('click', () => {
  const maxTranslate = 0;
  const minTranslate = -Math.ceil(slides.length / 2) * 100;

  translate = (translate >= maxTranslate) ? minTranslate : translate + 100;
  slides.map(slide => slide.style.transform = `translate(${translate}%)`);
});

nextButton.addEventListener('click', () => {
  const maxTranslate = 0;
  const minTranslate = -Math.ceil(slides.length / 2) * 100;

  translate = (translate <= minTranslate) ? maxTranslate : translate - 100;
  slides.map(slide => slide.style.transform = `translate(${translate}%)`);
});

window.addEventListener('resize', () => {
  resizeSlide();
});