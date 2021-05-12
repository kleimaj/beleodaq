import { createButton } from './CarouselButton';

export default {
  title: 'Components/CarouselButton',
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
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
  primary: true,
  label: 'Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Button',
};
