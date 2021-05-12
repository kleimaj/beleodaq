import { createButton } from './NavLink';
import '../../css/index.css';

export default {
  title: 'Components/NavLink',
  argTypes: {
    label: { control: 'text' },
    active: { control: 'boolean' },
    onClick: { action: 'onClick' },
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  active: false,
  label: 'Button',
};

export const Active = Template.bind({});
Active.args = {
  active: true,
  label: 'Button',
};
