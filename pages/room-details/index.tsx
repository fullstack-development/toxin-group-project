import Head from 'next/head';

import RoomDetailsPage from 'components/RoomDetailsPage/RoomDetailsPage';

const RoomDetails: React.FC = () => (
  <>
    <Head>
      <title>Toxin | Подробнее о номере</title>
      <meta
        name="description"
        content="Более подробная информация о номере: правила, количество гостей, удобства и многое другое"
      />
      <meta name="keywords" content="отель, номер, бронирование, забронировать, информация" />
    </Head>
    <RoomDetailsPage />
  </>
);

export default RoomDetails;
