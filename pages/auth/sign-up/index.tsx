import Head from 'next/head';
import { memo } from 'react';

import { SignupPage } from 'modules/Auth';

const Signup = memo(() => (
  <>
    <Head>
      <title>Toxin | Регистрация</title>
      <meta name="description" content="Регистрация для бронирования номеров в нашем отеле" />
      <meta
        name="keywords"
        content="отель, номер, регистрация, авторизация, забронировать, войти"
      />
    </Head>
    <SignupPage />
  </>
));

export default Signup;
