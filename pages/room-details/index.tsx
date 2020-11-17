import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import RoomDetailsPage from 'components/RoomDetailsPage/RoomDetailsPage';

const RoomDetails = memo(() => {
  const { t } = useTranslation('RoomDetailsPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('Room Details')}</title>
        <meta
          name="description"
          content="Более подробная информация о номере: правила, количество гостей, удобства и многое другое"
        />
        <meta name="keywords" content="отель, номер, бронирование, забронировать, информация" />
      </Head>
      <RoomDetailsPage />
    </>
  );
});

export default RoomDetails;
