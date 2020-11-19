import Head from 'next/head';
import { memo } from 'react';

import { LogoutPage } from 'modules/Auth';

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

export default Logout;
