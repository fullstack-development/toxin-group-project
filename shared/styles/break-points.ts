const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

type Breakpoints = keyof typeof breakpoints;

const breakpointUp = (value: Breakpoints): string => {
  return `(min-width: ${breakpoints[value]}px)`;
};

const breakpointDown = (value: Breakpoints): string => {
  const breakpointsKeys = Object.keys(breakpoints);
  const breakpointIndex = breakpointsKeys.indexOf(value);
  const nextBreakpoint = breakpointsKeys[breakpointIndex + 1];

  if (nextBreakpoint) return `(max-width: ${breakpoints[nextBreakpoint] - 0.02}px)`;

  return `(max-width: ${breakpoints[value] - 0.02}px)`;
};

const breakpointOnly = (value: Breakpoints): string => {
  if (value === 'xs') return breakpointDown(value);
  if (value === 'xxl') return breakpointUp(value);

  return `${breakpointUp(value)} and ${breakpointDown(value)}`;
};

const breakpointBetween = (lower: Breakpoints, upper: Breakpoints): string => {
  return `${breakpointUp(lower)} and ${breakpointDown(upper)}`;
};

export { breakpointUp, breakpointDown, breakpointOnly, breakpointBetween };
