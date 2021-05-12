import { createButton } from './NavigationButton';

export default {
  title: 'Components/NavigationButton',
  parameters: {
    docs: {
      description: {
        component:
          'Navigation Buttons are found in the main pages of the site. They are used to progress or return to different parts of the site map.',
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

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Next',
};
Primary.parameters = {
  docs: {
    source: {
      code: `
<a class="button">
Next
<i class="fas fa-chevron-right" aria-hidden="true"></i>
</a>`,
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Previous',
};
Secondary.parameters = {
  docs: {
    source: {
      code: `
<a class="button">
<i class="fas fa-chevron-left" aria-hidden="true"></i>
Previous
</a>`,
    },
  },
};
