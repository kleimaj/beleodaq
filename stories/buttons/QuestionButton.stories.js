import { createButton } from './QuestionButton';

export default {
  title: 'Components/QuestionButton',
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

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'Button',
};
