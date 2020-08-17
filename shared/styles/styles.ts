import { createGlobalStyle } from 'styled-components';
import fontFace from './mixins/font-face';

const GlobalStyle = createGlobalStyle`
  ${fontFace('Montserrat', 'montserrat-regular', 400, 'normal')}
  ${fontFace('Montserrat', 'montserrat-bold', 700, 'normal')}

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: ${(props) => props.theme.typographyFontSize};
    background: ${(props) => props.theme.defaultBackground};
    color: ${(props) => props.theme.colors.typographyColorDark};
    font-family: Montserrat, Arial, sans-serif;
  }
`;

export default GlobalStyle;
