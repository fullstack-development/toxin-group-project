import Head from 'next/head';

import IndexPage from 'components/IndexPage/IndexPage';

const Index: React.FC = () => (
  <>
    <Head>
      <title>Toxin | Главная</title>
      <meta name="description" content="Подберите и забронируйте номер в нашем отеле" />
      <meta name="keywords" content="отель, номер, бронирование, забронировать" />
    </Head>
    <IndexPage />
  </>
);

export default Index;
