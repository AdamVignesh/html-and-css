const carousel = document.querySelector('.carousel');
const carouselSlide = document.querySelector('.carousel-slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const colorInput = document.getElementById('colorInput');

colorInput.addEventListener('input',()=>{
    carousel.style.backgroundColor = colorInput.value;
});


if (prevButton && nextButton) {
  const slideWidth = carouselSlide.clientWidth;
  let slideIndex = 0;

  prevButton.addEventListener('click', () => {
    console.log("in prev ra");
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = carouselSlide.children.length - 1;
    }
    updateSlidePosition();
  });

  nextButton.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex >= carouselSlide.children.length) {
      slideIndex = 0;
    }
    updateSlidePosition();
  });

  function updateSlidePosition() {
    carousel.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  }
} else {
  console.error('Previous or Next button not found');
}
