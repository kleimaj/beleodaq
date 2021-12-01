const link1 =
  'https://www2.tri-kobe.org/nccn/guideline/hematologic/nhl/english/tcel.pdf';
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
