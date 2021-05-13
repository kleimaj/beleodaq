import { createButton } from './CarouselButton';

export default {
  title: 'Components/CarouselButton',
  parameters: {
    docs: {
      description: {
        component:
          'The Carousel Buttons are found on each slide of the carousel. They are utilized for the call to action, and streamline the user to the page they want to go.',
      },
    },
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#f8f8f8' }],
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
  label: 'Button',
};
Primary.parameters = {
  docs: {
    source: {
      code: `
  <a class="carousel-button h5">Next</a>`,
    },
  },
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Button',
};
Tertiary.parameters = {
  docs: {
    source: {
      code: `
    <a class="carousel-button orange h5">Next</a>`,
    },
  },
};
