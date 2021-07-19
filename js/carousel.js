// https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 2;
let timeout;
let footNotes = [
  'PTCL, peripheral T-cell lymphoma.',
  'CR, complete response; ORR, overall response rate; PR, partial response.',
  'AEs, adverse events.',
  'R/R, relapsed/refractory; PTCL, peripheral T-cell lymphoma.',
];
let footNote2 = `<sup>*</sup>The primary study endpoint of ORR was based on an independent review, where a 20% ORR was considered clinically meaningful.<sup>2</sup> <sup>&dagger;</sup>Sample size was based on a 2-stage optimal design, with a hypothesized ORR of the alternate hypothesis (p1 = 20%) for BELEODAQ and a minimal or uninteresting ORR of null hypothesis (p0 = 9%).<sup>2</sup> <sup>&sect;</sup>No meaningful difference in response rate was observed between patients &ge;75 years and those &lt;75 years.<sup>1</sup>`;

showSlides(slideIndex);
// timeout = setInterval(showSlides, 8000);

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
  if (slideIndex == 2) {
    document.querySelector('.footnote').innerHTML += '<br>' + footNote2;
  }
  slideIndex > 3 ? (slideIndex = 1) : slideIndex++;
}
