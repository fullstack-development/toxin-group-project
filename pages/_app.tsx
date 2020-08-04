import App from 'next/app';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
