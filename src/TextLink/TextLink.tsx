
  import React from 'react';
  import { TextLinkProps } from './TextLink.types';

  const TextLink: React.FC<TextLinkProps> = ({ foo }) => (
      <div>{foo}</div>
  );

  export default TextLink;
