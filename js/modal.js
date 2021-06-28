function showModal(setShowModal) {
  setShowModal
    ? document.querySelector('.modal').classList.add('active')
    : document.querySelector('.modal').classList.remove('active');
}
