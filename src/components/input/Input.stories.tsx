import { ComponentStory } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'INPUTS/Text Field',
  component: Input,
}

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: "Enter Placeholder",
  name: "name",
  value: "",
  type: "text",
  label: "Label"
};

