import { createGlobalStyle } from 'styled-components';

import { Theme } from '../types/theme';
import fontFace from './mixins/font-face';

type Props = {
  theme: Theme
}

const GlobalStyle = createGlobalStyle<Props>`
  ${fontFace('Montserrat', 'montserrat-regular', 400, 'normal')}
  ${fontFace('Montserrat', 'montserrat-bold', 700, 'normal')}

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: ${(props) => props.theme.typography.fontSize};
    background: ${(props) => props.theme.defaultBackground};
    color: ${(props) => props.theme.typography.colorDark};
    font-family: ${(props) => props.theme.typography.fontName}, Arial, sans-serif;
  }
`;

export default GlobalStyle;
