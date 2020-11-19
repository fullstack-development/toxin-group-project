import Head from 'next/head';
import { memo } from 'react';

import { ProfilePage } from 'modules/Profile';

const Profile = memo(() => (
  <>
    <Head>
      <title>Toxin | Настройки аккаунта</title>
      <meta name="description" content="Все доступные настройки вашего аккаунта" />
      <meta name="keywords" content="отель, номер, аккаунт, настроить, настройка" />
    </Head>
    <ProfilePage />
  </>
));

export default Profile;
