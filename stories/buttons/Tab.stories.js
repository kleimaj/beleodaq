import { createButton, createGroup } from './Tab';

export default {
  title: 'Components/Tab',
  parameters: {
    docs: {
      description: {
        component:
          'Tabs are used to toggle between different pages of information. Tabs indicate that all elements are related in a greater information architecture.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    active: { control: 'boolean' },
    numButtons: { control: 'number' },
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

const ListTemplate = ({ numButtons }) => {
  return createGroup({ numButtons });
};

export const Active = Template.bind({});
Active.args = {
  active: true,
  label: 'Active Tab',
};
Active.parameters = {
  docs: {
    source: {
      code: `<a class="site-buttons__button p">Site Button Label></a>`,
    },
  },
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default Tab',
  active: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<a class="site-buttons__button button--orange p">Site Button Label></a>`,
    },
  },
};

export const List = ListTemplate.bind({});
ListTemplate.args = {
  numButtons: 3,
};
