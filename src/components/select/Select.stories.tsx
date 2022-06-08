import { ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
  title: 'INPUTS/Select',
  component: Select,
}

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  defaultOption: "Choose State",
  name: "name",
  value: "",
  option: [{ id: "", value: "Arizona" }, { id: "", value: "California" }, { id: "", value: "Colorado" }, { id: "", value: "Florida" }, { id: "", value: "Kentucky" }]
};

