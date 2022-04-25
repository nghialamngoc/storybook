import * as React from 'react';
import { ButtonProps } from './Button.types';

export default function Button(props: ButtonProps) {
  return <div {...props}> Button</div>;
}
