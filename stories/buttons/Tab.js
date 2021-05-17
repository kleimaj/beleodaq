import '../../css/index.css';

export const createButton = ({ active = false, label }) => {
  const group = document.createElement('div');
  group.className = 'tabs';
  const btn = document.createElement('a');
  btn.innerText = label;

  const mode = active ? 'tab tab--active' : 'tab';
  btn.className = mode;
  group.appendChild(btn);

  return group;
};
