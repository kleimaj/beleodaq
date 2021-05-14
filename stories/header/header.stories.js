import { createButton } from './header';

export default {
  title: 'Components/Header',
  parameters: {
    docs: {
      description: {
        component:
          'The header is fixed and follows the user throughout the site to help navigate and find the most vital information.',
      },
    },
  },
  argTypes: {
    isi: { control: 'boolean' },
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  isi: true,
};
Primary.parameters = {
  docs: {
    source: {
      code: `<a class="site-buttons__button p">Site Button Label></a>`,
    },
  },
};
