import '../../css/index.css';

export const createButton = ({ primary = false, label, onClick }) => {
  const btn = document.createElement('a');
  btn.type = 'button';
  btn.addEventListener('click', onClick);
  btn.className = 'question_buttons__button';
  const h5 = document.createElement('h5');
  h5.innerText = label;
  btn.appendChild(h5);

  return btn;
};
