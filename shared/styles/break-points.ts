const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

const breakpointUp = (value: string): string => {
  return `(min-width: ${breakpoints[value]}px)`;
};

const breakpointDown = (value: string): string => {
  const breakpointsKeys = Object.keys(breakpoints);
  const breakpointIndex = breakpointsKeys.indexOf(value);
  const nextBreakpoint = breakpointsKeys[breakpointIndex + 1];

  if (nextBreakpoint) return `(max-width: ${breakpoints[nextBreakpoint] - 0.02}px)`;

  return `(max-width: ${breakpoints[value] - 0.02}px)`;
};

const breakpointOnly = (value: string): string => {
  if (value === 'xs') return breakpointDown(value);
  if (value === 'xxl') return breakpointUp(value);

  return `${breakpointUp(value)} and ${breakpointDown(value)}`;
};

const breakpointBetween = (lower: string, upper: string): string => {
  return `${breakpointUp(lower)} and ${breakpointDown(upper)}`;
};

export { breakpointUp, breakpointDown, breakpointOnly, breakpointBetween };
