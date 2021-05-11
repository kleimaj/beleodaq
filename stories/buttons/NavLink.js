import '../../css/reset.css';
import '../../css/index.css';

export const createButton = ({ active = false, label, onClick }) => {
  const btn = document.createElement('a');
  const li = document.createElement('li');
  const ul = document.createElement('ul');
  ul.appendChild(li);
  li.appendChild(btn);
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const mode = active ? 'navlinks__link--active p' : 'navlinks__link p';
  const parentMode = active ? 'active' : '';
  li.className = parentMode;
  ul.className = 'navlinks';
  ul.style.display = '';
  btn.className = mode;

  return ul;
};
