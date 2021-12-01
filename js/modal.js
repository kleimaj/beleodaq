const link1 =
  'https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1483';
const link2 =
  'https://lymphoma.org/aboutlymphoma/nhl/ptcl/';
function showModal(setShowModal) {
  setShowModal
    ? document.querySelector('.modal').classList.add('active')
    : document.querySelector('.modal').classList.remove('active');
  if (setShowModal == 2) {
    document.querySelector('.continue').setAttribute('href', link2);
  } else if (setShowModal == 1) {
    document.querySelector('.continue').setAttribute('href', link1);
  }
}
