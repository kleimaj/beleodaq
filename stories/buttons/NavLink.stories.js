import { createButton } from './NavLink';

export default {
  title: 'Components/NavLink',
  argTypes: {
    label: { control: 'text' },
    active: { control: 'boolean' },
    onClick: { action: 'onClick' },
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  active: true,
  label: 'Button',
};
