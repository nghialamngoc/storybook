import useMediaQuery from '@mui/material/useMediaQuery';
import { createBreakpoint } from 'styled-components-breakpoint';

export const breakpointList = {
  xs: 0,
  sm: 576,
  md: 769,
  lg: 990,
  xl: 1272
};

export const breakpoint = createBreakpoint(breakpointList);

export type BreakpointString = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type useResponsiveProps = {
  breakpoint?: BreakpointString;
  offset?: number;
};

export const useResponsive = ({ breakpoint = 'md', offset = 0 }: useResponsiveProps) => {
  const isDesktop = useMediaQuery(`(min-width:${breakpointList[breakpoint] + offset}px)`);
  return isDesktop;
};
