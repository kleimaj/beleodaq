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

export const createGroup = ({ numButtons = 3 }) => {
  const group = document.createElement('div');
  group.className = 'tabs';
  Array(numButtons)
    .fill(0)
    .forEach((tab, idx) => {
      const btn = document.createElement('a');
      btn.innerText = 'Tab ' + (tab + 1);
      group.appendChild(btn);
    });
  return group;
};
