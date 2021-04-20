var footer = document.querySelector('footer');

var innerHeight = window.innerHeight;
var offsetHeight = document.body.offsetHeight;

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
