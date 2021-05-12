import '../../css/index.css';

export const createButton = ({ primary = false, label, onClick }) => {
  const btn = document.createElement('a');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const mode = primary ? 'carousel-button h5' : 'carousel-button orange h5';
  btn.className = mode;

  return btn;
};
