import { ComponentStory } from '@storybook/react';

import { Chating } from './Chat';
import { imagesArr } from "assets";

export default {
  title: 'Chating',
  component: Chating,
}

const Template: ComponentStory<typeof Chating> = (args) => <Chating {...args} />;

export const Primary = Template.bind({});

Primary.args = {};


