import Head from 'next/head';
import { memo } from 'react';

import LogoutPage from 'components/LogoutPage/LogoutPage';

const Logout = memo(() => (
  <>
    <Head>
      <title>Toxin | Выход</title>
      <meta name="description" content="Выход из аккаунта" />
      <meta
        name="keywords"
        content="отель, номер, регистрация, авторизация, забронировать, выйти"
      />
    </Head>
    <LogoutPage />
  </>
));

Logout.displayName = 'Logout';

export default Logout;
