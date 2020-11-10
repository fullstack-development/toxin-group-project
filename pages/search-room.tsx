import Head from 'next/head';

import SearchRoomPage from 'components/SearchRoomPage/SearchRoomPage';

const SearchRoom: React.FC = () => (
  <>
    <Head>
      <title>Toxin | Найти номер</title>
      <meta name="description" content="Подберите и забронируйте номер в нашем отеле" />
      <meta name="keywords" content="отель, номер, бронирование, забронировать" />
    </Head>
    <SearchRoomPage />
  </>
);

export default SearchRoom;
