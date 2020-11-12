import Head from 'next/head';

import SelectedRoomsPage from 'components/SelectedRoomsPage/SelectedRoomsPage';

const SelectedRooms: React.FC = (): JSX.Element => (
  <>
    <Head>
      <title>Toxin | Забронированные номера</title>
      <meta
        name="description"
        content="Здесь содержится информация о ранее забронированных Вами номерах"
      />
      <meta
        name="keywords"
        content="отель, номер, бронирование, забронировать, информация, бронь, история, прошлый"
      />
    </Head>
    <SelectedRoomsPage />
  </>
);

export default SelectedRooms;
