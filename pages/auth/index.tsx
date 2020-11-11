import Head from 'next/head';
import { memo } from 'react';

import AuthPage from 'components/AuthPage/AuthPage';

const Auth = memo(() => (
  <>
    <Head>
      <title>Toxin | Войти</title>
      <meta
        name="description"
        content="Вход в учетную запись для бронирования номеров в нашем отеле"
      />
      <meta
        name="keywords"
        content="отель, номер, регистрация, авторизация, забронировать, войти"
      />
    </Head>
    <AuthPage />
  </>
));

Auth.displayName = 'Auth';

export default Auth;
