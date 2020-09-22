import { createGlobalStyle, css } from 'styled-components';

import { Theme } from '../types/theme';
import { fontFace } from './mixins';

type Props = {
  theme: Theme;
};

const GlobalStyle = createGlobalStyle<Props>`
  ${(props) => {
    const { colors, typography } = props.theme;
    return css`
      ${fontFace('FA Brands', 'fa-brands', 'regular')}
      ${fontFace('Material Icons', 'material-icons', 'regular')}
      ${fontFace('Montserrat', 'montserrat', 'regular')}
      ${fontFace('Montserrat', 'montserrat', 'bold', 700)}
      ${fontFace('Quicksand', 'quicksand', 'regular')}
      ${fontFace('Quicksand', 'quicksand', 'bold', 700)}

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      html {
        font-size: ${typography.fontSize};
        background: ${colors.defaultBackground};
        color: ${colors.basicDark};
        font-family: ${typography.fontName};
      }
    `;
  }}
`;

export default GlobalStyle;
