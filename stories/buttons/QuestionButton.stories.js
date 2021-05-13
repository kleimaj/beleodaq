import { createButton } from './QuestionButton';

export default {
  title: 'Components/QuestionButton',
  parameters: {
    docs: {
      description: {
        component:
          'The question buttons are used as additional call to action buttons. They navigate the user to the most critical information.',
      },
    },
  },
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
  label: 'Question Button',
};
Default.parameters = {
  docs: {
    source: {
      code: `<a class="question_buttons__button"><h5>Question Button</h5></a>`,
    },
  },
};
