import { Theme } from '../types/theme';

const typographyColorValue = '31, 32, 65';
const primaryColorValue = '188, 156, 255';
const primaryVariantColorValue = '139, 164, 249';
const secondaryColorValue = '111, 207, 151';
const secondaryVariantColorValue = '102, 210, 234';

const purpleThemePalette: Theme = {
  typography: {
    fontName: 'Montserrat',
    fontSize: '14px',
  },
  colors: {
    primary: `RGB(${primaryColorValue})`,
    primaryVariant: `RGB(${primaryVariantColorValue})`,
    secondary: `RGB(${secondaryColorValue})`,
    secondaryVariant: `RGB(${secondaryVariantColorValue})`,
    basicLightest: `RGBA(${typographyColorValue}, 5%)`,
    basicLight: `RGBA(${typographyColorValue}, 25%)`,
    basic: `RGBA(${typographyColorValue}, 50%)`,
    basicDark: `RGBA(${typographyColorValue}, 75%)`,
    basicDarkest: `RGB(${typographyColorValue})`,
    error: 'RGB(244, 67, 54)',
    defaultBackground: 'RGB(255, 255, 255)',
  },
  gradients: {
    primary: `linear-gradient(180deg, ${primaryColorValue} 0%, ${primaryVariantColorValue} 100%)`,
    secondary: `linear-gradient(180deg, ${secondaryColorValue} 0%, ${secondaryVariantColorValue} 100%)`,
  },
};

export default purpleThemePalette;
