module.exports = componentName => ({
  content: `
  import React from 'react';
  import { Story, Meta } from '@storybook/react/types-6-0';
  import ${componentName} from './${componentName}';
  import { ${componentName}Props } from './${componentName}.types';

  export default {
    title: '${componentName}',
    component: ${componentName}
  } as Meta;

  const Template: Story<${componentName}Props> = (args) => <${componentName} {...args} />;

  export const NormalCase = Template.bind({});
  NormalCase.args = { foo: 'bar' };

  export const SpecialCase = Template.bind({});
  SpecialCase.args = { foo: 'baz' };
`,
  extension: `.stories.tsx`
});
