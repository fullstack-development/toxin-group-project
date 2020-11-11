import Head from 'next/head';
import { memo } from 'react';

import RoomDetailsPage from 'components/RoomDetailsPage/RoomDetailsPage';

const RoomDetails = memo(() => (
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
));

RoomDetails.displayName = 'RoomDetails';

export default RoomDetails;
