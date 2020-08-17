const typographyColorValue = '31, 32, 65';
const primaryColorValue = '188, 156, 255';
const secondaryColorValue = '111, 207, 151';

const purpleThemePalette = {
  typography: {
    colorLightest: `RGBA(${typographyColorValue}, 5%)`,
    colorLight: `RGBA(${typographyColorValue}, 25%)`,
    color: `RGBA(${typographyColorValue}, 50%)`,
    colorDark: `RGBA(${typographyColorValue}, 75%)`,
    colorDarkest: `RGB(${typographyColorValue})`,
    fontName: 'Montserrat',
    fontSize: '14px',
  },
  colors: {
    primary: `RGB(${primaryColorValue})`,
    secondary: `RGB(${secondaryColorValue})`,
  },
  defaultBackground: '#fff',
};

export default purpleThemePalette;
