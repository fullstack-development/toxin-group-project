import Head from 'next/head';

const Favicon: React.FC = () => (
  <Head>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
    <link rel="manifest" href="/favicon/site.webmanifest" />
    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#bc9cff" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
);

export default Favicon;
