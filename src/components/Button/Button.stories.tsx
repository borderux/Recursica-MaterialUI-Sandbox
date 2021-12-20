import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Text</Button>;

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
};

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};
