import { ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;

  /** Which variation look would you like use */
  variation: 'primary' | 'secondary';
}
