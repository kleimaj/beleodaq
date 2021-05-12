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

  const mode = primary ? 'button' : 'button secondary';
  btn.className = mode;
  primary
    ? btn.insertAdjacentHTML(
        'beforeend',
        '<i class="fas fa-chevron-right" aria-hidden="true"></i>'
      )
    : btn.insertAdjacentHTML(
        'afterbegin',
        '<i class="fas fa-chevron-left" aria-hidden="true"></i>'
      );

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
