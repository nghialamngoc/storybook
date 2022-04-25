
  import React from 'react';
  import { Story, Meta } from '@storybook/react/types-6-0';
  import Text from './Text';
  import { TextProps } from './Text.types';

  export default {
    title: 'Text',
    component: Text
  } as Meta;

  const Template: Story<TextProps> = (args) => <Text {...args} />;

  export const NormalCase = Template.bind({});
  NormalCase.args = { foo: 'bar' };

  export const SpecialCase = Template.bind({});
  SpecialCase.args = { foo: 'baz' };
