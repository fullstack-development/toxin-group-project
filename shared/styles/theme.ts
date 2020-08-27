import { Theme } from '../types/theme';

const typographyColorValue = '31, 32, 65';
const primaryColorValue = '188, 156, 255';
const secondaryColorValue = '111, 207, 151';

const purpleThemePalette: Theme = {
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
    primaryGradient: 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)',
    secondaryGradient: 'linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)',
  },
  defaultBackground: '#fff',
  error: {
    color: '#f44336',
    fontSize: '0.8571rem',
  },
};

export default purpleThemePalette;
