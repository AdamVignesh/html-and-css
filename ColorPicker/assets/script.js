const carousel = document.querySelector('.carousel');
const carouselSlide = document.querySelectorAll('.carousel-slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const colorInput = document.querySelectorAll('.color');
const label = document.querySelectorAll('#label');



colorInput.forEach(color=>color.addEventListener('input',(event)=>{
  const changedColor = event.target.value;
  event.target.parentNode.style.backgroundColor=changedColor;

}))


if (prevButton && nextButton) {
  const slideWidth = carouselSlide[0].clientWidth;
  let slideIndex = 0;

  prevButton.addEventListener('click', () => {
    console.log("in prev ra");
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = carouselSlide.length - 1;
    }
    updateSlidePosition();
  });

  nextButton.addEventListener('click', (event) => {
    slideIndex++;
    if (slideIndex >= carouselSlide.length) {
      slideIndex = 0;
    }
    updateSlidePosition();
  });

  function updateSlidePosition() {
    carousel.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
  }
} else {
  console.error('Previous or Next button not found');
}
