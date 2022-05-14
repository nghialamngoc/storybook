import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';
import colors from '../utils/color'

const StyledText = styled.div<TextProps>`
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : 'normal')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '300')};

  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  text-decoration: ${(props) => props.textDecoration};
  word-wrap: ${(props) => (props.wordWrap ? props.wordWrap : 'normal')};
  word-break: ${(props) => (props.wordBreak ? props.wordBreak : 'normal')};

  color: ${(props) =>
    props.color ? props.color : colors.darkGreen} !important;
  font-size: ${(props) =>
    props.xsFontSize ? props.xsFontSize : '1rem'} !important;
  line-height: ${(props) =>
    props.lineHeight ? props.lineHeight : '24px'} !important;
  white-space: ${(props) =>
    props.whiteSpace ? props.whiteSpace : 'initial'} !important;
`;

const Text: React.FC<TextProps> = ({ children, seoHeader, ...props }) => (
  <StyledText {...props} as={seoHeader}>
    {children}
  </StyledText>
);

export default Text;
