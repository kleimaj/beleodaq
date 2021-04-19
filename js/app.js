var footer = document.querySelector('footer');
var scrollHeight = footer.scrollHeight;
document.addEventListener('scroll', function (event) {
  console.log(window.scrollY);
  if (window.scrollY >= scrollHeight) {
    console.log('unstick');
    footer.style.position = 'relative';
    footer.lastElementChild.classList.remove('hidden');
  } else {
    console.log('stick');
    footer.style.position = 'fixed';
    footer.lastElementChild.classList.add('hidden');
  }
});
