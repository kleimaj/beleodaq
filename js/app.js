// Interactive Footer
let didScroll;
let lastScrollTop = 0;
const delta = 5;
let navbarHeight = document.querySelector('footer').offsetHeight;

// Add scroll event listener
window.addEventListener('scroll', function (event) {
  didScroll = true;
});

// Every 250 ms
setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  let st =
    (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
  console.log(st, 'hello');
  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;
  // If they scrolled down and are past the navbar, add class .footer-down
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    //   Scroll Down
    document.querySelector('footer').classList.add('footer-down');
  } else {
    //   Scroll Up
    document.querySelector('footer').classList.remove('footer-down');
  }
  lastScrollTop = st;
}
