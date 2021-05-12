import '../../css/index.css';

export const createButton = ({
  primary = false,
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement('a');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const mode = primary
    ? 'site-buttons__button p'
    : 'site-buttons__button button--orange p';
  btn.className = mode;

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
