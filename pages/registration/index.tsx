import Head from 'next/head';
import { memo } from 'react';

import RegistrationPage from 'components/RegistrationPage/RegistrationPage';

const Registration = memo(() => (
  <>
    <Head>
      <title>Toxin | Регистрация</title>
      <meta name="description" content="Регистрация для бронирования номеров в нашем отеле" />
      <meta
        name="keywords"
        content="отель, номер, регистрация, авторизация, забронировать, войти"
      />
    </Head>
    <RegistrationPage />
  </>
));

export default Registration;
