document.querySelector('.cancel').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('input').forEach((input) => input.value = "");
})