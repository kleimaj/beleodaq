let footer = document.querySelector('footer');

let innerHeight = window.innerHeight;
let offsetHeight = document.body.offsetHeight;

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
  } else {
    document.querySelector('.mobile__button__icon').src =
      'assets/svg/menu/bars.svg';
  }
});
