let footer = document.querySelector('footer');

let innerHeight = window.innerHeight;
let offsetHeight = document.body.offsetHeight;

let slideIndex = 1;
showSlides(slideIndex);

// https://stackoverflow.com/questions/9439725/javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom

if (innerHeight + window.scrollY >= offsetHeight) {
  footer.style.position = 'relative';
  footer.lastElementChild.classList.remove('hidden');
}
window.onscroll = function (ev) {
  if (innerHeight + window.scrollY >= offsetHeight) {
    footer.style.position = 'relative';
    footer.lastElementChild.classList.remove('hidden');
  } else {
    footer.style.position = 'fixed';
    footer.lastElementChild.classList.add('hidden');
  }
};

let menuToggled = false;
document.querySelector('.mobile__button').addEventListener('click', (e) => {
  menuToggled = !menuToggled;
  if (menuToggled) {
    document.querySelector('.mobile__button__icon').src =
      'assets/svg/menu/times.svg';
    document.querySelector('.navlinks').style.display = 'block';
  } else {
    document.querySelector('.mobile__button__icon').src =
      'assets/svg/menu/bars.svg';
    document.querySelector('.navlinks').style.display = 'none';
  }
});

// Scroll To Footer
function scrollToFooter() {
  window.scrollTo(0, offsetHeight);
}

// Next/Previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll('.carousel__slide');
}
