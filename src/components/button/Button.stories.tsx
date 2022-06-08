import { ComponentStory } from '@storybook/react';

import { Button } from './Button';
import { imagesArr } from "assets";

export default {
  title: 'INPUTS/Button',
  component: Button,
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  label: 'Button',
  backgroundColor: 'black',
  size: 'small'
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  label: 'Button',
  size:"medium"
};

export const Icon = Template.bind({});

Icon.args = {
  variant: 'icon',
  label: 'Button',
  icon: <imagesArr.Adobe />,
  size:"medium"
};

export const Default = Template.bind({});

Default.args = {
  variant: 'default',
  label: 'Button',
  size:"medium"
};


