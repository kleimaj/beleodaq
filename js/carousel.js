// https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
let timeout;
let footNotes = [
  'PTCL, peripheral T-cell lymphoma.',
  'CR, complete response; ORR, overall response rate; PR, partial response.',
  'AEs, adverse events.',
  'R/R, relapsed/refractory; PTCL, peripheral T-cell lymphoma.',
];

showSlides(slideIndex);
timeout = setTimeout(showSlides, 6000);

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
  document.querySelector('.footnote').innerHTML = footNotes[slideIndex - 1];
  slideIndex > 3 ? (slideIndex = 1) : slideIndex++;
}
