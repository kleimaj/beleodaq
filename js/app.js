var footer = document.querySelector('footer');
var main = document.querySelector('main');
var scrollHeight = document.body.scrollHeight - main.scrollHeight - 80;
console.log(window.innerHeight);
console.log(main.clientHeight);

document.addEventListener('scroll', function (event) {
  if (window.scrollY >= scrollHeight) {
    footer.style.position = 'relative';
    footer.lastElementChild.classList.remove('hidden');
  } else {
    footer.style.position = 'fixed';
    footer.lastElementChild.classList.add('hidden');
  }
});
