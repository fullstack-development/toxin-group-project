import Head from 'next/head';
import { memo } from 'react';

import { SearchRoomPage } from 'modules/Rooms';

const SearchRoom = memo(() => (
  <>
    <Head>
      <title>Toxin | Найти номер</title>
      <meta name="description" content="Подберите и забронируйте номер в нашем отеле" />
      <meta name="keywords" content="отель, номер, бронирование, забронировать" />
    </Head>
    <SearchRoomPage />
  </>
));

export default SearchRoom;
