import type { AppProps } from 'next/app';
import { memo } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Favicon from 'components/Favicon/Favicon';
import { store } from 'redux/store';
import GlobalStyle from 'shared/styles/global.styles';
import purpleThemePalette from 'shared/styles/theme';

import 'shared/styles/fonts.css';

const MyApp = memo(({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={purpleThemePalette}>
    <Provider store={store}>
      <Component {...pageProps} />
      <Favicon />
      <GlobalStyle />
    </Provider>
  </ThemeProvider>
));

MyApp.displayName = 'MyApp';

export default MyApp;
