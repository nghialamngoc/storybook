import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const NormalCase = Template.bind({});
NormalCase.args = {
  children:
    'In this example the event handler onLoad is embedded within the tag. OnLoad activates whenever a new page has finished downloading. This alert code tells the browser to create an alert box containing the value of the variable "today". Thus, it automatically prints out the date and time when the page has finished loading and requires no special action by the user.',
  seoHeader: 'h1',
  fontWeight: 300
};

