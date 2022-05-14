import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TextLink from './TextLink';
import { TextLinkProps } from './TextLink.types';

export default {
  title: 'TextLink',
  component: TextLink,
} as Meta;

const Template: Story<TextLinkProps> = (args) => <TextLink {...args} />;

export const NormalCase = Template.bind({});
NormalCase.args = { foo: 'bar' };

export const SpecialCase = Template.bind({});
SpecialCase.args = { foo: 'baz' };
