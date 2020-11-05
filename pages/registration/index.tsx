import Head from 'next/head';

import RegistrationPage from 'components/RegistrationPage/RegistrationPage';

const Registration: React.FC = (): JSX.Element => (
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
);

export default Registration;
