
  import React from 'react';
  import { TextProps } from './Text.types';

  const Text: React.FC<TextProps> = ({ foo }) => (
      <div>{foo}</div>
  );

  export default Text;
