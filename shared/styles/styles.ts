import { createGlobalStyle, css } from 'styled-components';
import fontFace from './mixins/font-face';
import { Theme } from '../types/theme';

type Props = {
  theme: Theme
}

const GlobalStyle = createGlobalStyle<Props>`
  ${(props) => {
    const { colors, typography } = props.theme;
    return css`
      ${fontFace('Montserrat', 'montserrat-regular')}
      ${fontFace('Montserrat', 'montserrat-bold', 700)}

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      html {
        font-size: ${typography.fontSize};
        background: ${colors.defaultBackground};
        color: ${colors.basicDark};
        font-family: ${typography.fontName}, Arial, sans-serif;
      }
    `;
  }};
`;

export default GlobalStyle;
