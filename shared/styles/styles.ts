import { createGlobalStyle, css } from 'styled-components';
import fontFace from './mixins/font-face';
import { Theme } from '../types/theme';

type Props = {
  theme: Theme
}

const GlobalStyle = createGlobalStyle<Props>`
  ${(props) => {
    const { theme, theme: { typography } } = props;
    return css`
      ${fontFace('Montserrat', 'montserrat-regular', 400, 'normal')}
      ${fontFace('Montserrat', 'montserrat-bold', 700, 'normal')}

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      html {
        font-size: ${typography.fontSize};
        background: ${theme.defaultBackground};
        color: ${typography.colorDark};
        font-family: ${typography.fontName}, Arial, sans-serif;
      }
    `;
  }};
`;

export default GlobalStyle;
