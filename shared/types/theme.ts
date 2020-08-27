export type Theme = {
  typography: {
    colorLightest: string,
    colorLight: string,
    color: string,
    colorDark: string,
    colorDarkest: string,
    fontName: string,
    fontSize: string,
  },
  colors: {
    primary: string,
    secondary: string,
    primaryGradient: string,
    secondaryGradient: string,
  },
  defaultBackground: string,
  error: {
    color: string,
    fontSize: string
  }
};
