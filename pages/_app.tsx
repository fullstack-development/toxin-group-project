import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Favicon from 'public/favicon/index';
import GlobalStyle from 'shared/styles/global.styles';
import purpleThemePalette from 'shared/styles/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={purpleThemePalette}>
      <Component {...pageProps} />
      <Favicon />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
