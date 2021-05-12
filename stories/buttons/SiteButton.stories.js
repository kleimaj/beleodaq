import { createButton } from './SiteButton';

export default {
  title: 'Components/SiteButton',
  parameters: {
    docs: {
      description: {
        component:
          'Buttons used to navigate between different sites of the BELEODAQ HCP (i.e ISI, Prescribing Info, and Patient Site).',
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
  label: 'Button',
};
Primary.parameters = {
  docs: {
    source: {
      code: `<a class="site-buttons__button p">Site Button Label></a>`,
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
      code: `<a class="site-buttons__button button--orange p">Site Button Label></a>`,
    },
  },
};
