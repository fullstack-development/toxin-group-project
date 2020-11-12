import Head from 'next/head';

import { SignupPage } from 'modules/Auth';

const Signup: React.FC = (): JSX.Element => (
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
);

export default Signup;
