import { CSSProperties, ReactNode } from "react";

export interface TextProps {
  children?: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  id?: string;
  seoHeader?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  // css properties
  fontWeight?: string | number;
  fontStyle?: string;
  opacity?: string;
  textAlign?: string;
  textDecoration?: string;
  wordBreak?: string;
  wordWrap?: string;
  whiteSpace?: string;

  // font size on different screen size
  // you can reference the breakpoint from utils/responsive.tsx
  xsFontSize?: string;
  smFontSize?: string;
  mdFontSize?: string;
  lgFontSize?: string;
  xlFontSize?: string;

  color?: string;
  smColor?: string;
  mdColor?: string;
  lgColor?: string;
  xlColor?: string;

  lineHeight?: string;
  smLineHeight?: string;
  mdLineHeight?: string;
  lgLineHeight?: string;
  xlLineHeight?: string;

  mdTextAlign?: string;
}
