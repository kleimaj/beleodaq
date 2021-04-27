// https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
let timeout;
showSlides(slideIndex);

// Next/Previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
  clearTimeout(timeout);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
  clearTimeout(timeout);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.carousel__slide');
  const dots = document.querySelectorAll('.carousel__navigation-button');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });
  slides[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].classList.add('active');
  slideIndex > 3 ? (slideIndex = 1) : slideIndex++;
  //   timeout = setTimeout(showSlides, 5000);
}
