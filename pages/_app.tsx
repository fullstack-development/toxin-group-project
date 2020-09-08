import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'shared/styles/styles';
import purpleThemePalette from 'shared/styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={purpleThemePalette}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
