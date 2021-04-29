let footer = document.querySelector('footer');

let innerHeight = window.innerHeight;
// let offsetHeight = document.body.offsetHeight;
let offsetHeight = getAbsoluteHeight('body');

// https://stackoverflow.com/questions/9439725/javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom

if (innerHeight + window.scrollY >= offsetHeight) {
  footer.style.position = 'relative';
  footer.lastElementChild.classList.remove('hidden');
}
window.onscroll = function (ev) {
  if (innerHeight + window.scrollY >= offsetHeight) {
    footer.style.position = 'relative';
    footer.lastElementChild.classList.remove('hidden');
    document.querySelector('.more').classList.add('hidden');
    document.querySelector('.less').classList.remove('hidden');
  } else {
    footer.style.position = 'fixed';
    footer.lastElementChild.classList.add('hidden');
    document.querySelector('.less').classList.add('hidden');
    document.querySelector('.more').classList.remove('hidden');
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
  footer.style.position = 'relative';
  footer.lastElementChild.classList.remove('hidden');
  window.scrollTo(0, offsetHeight);
  document.querySelector('.less').classList.add('hidden');
  document.querySelector('.more').classList.remove('hidden');
}

// scroll back to main content
function scrollBack() {
  window.scrollTo(0, -offsetHeight);
  footer.style.position = 'fixed';
  footer.lastElementChild.classList.add('hidden');
  document.querySelector('.less').classList.add('hidden');
  document.querySelector('.more').classList.remove('hidden');
}

// Get Inner and Outer height of element (includes margin)
// https://stackoverflow.com/questions/10787782/full-height-of-a-html-element-div-including-border-padding-and-margin
function getAbsoluteHeight(el) {
  // Get the DOM Node if you pass in a string
  el = typeof el === 'string' ? document.querySelector(el) : el;

  var styles = window.getComputedStyle(el);
  var margin =
    parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);

  return Math.ceil(el.offsetHeight + margin);
}
