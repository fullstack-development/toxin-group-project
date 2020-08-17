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
    font-size: ${(props) => props.theme.typography.fontSize};
    background: ${(props) => props.theme.typography.ColorDark};
    color: ${(props) => props.theme.typography.ColorDark};
    font-family: Montserrat, Arial, sans-serif;
  }
`;

export default GlobalStyle;
