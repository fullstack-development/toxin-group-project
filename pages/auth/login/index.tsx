import Head from 'next/head';

import { LoginPage } from 'modules/Auth';

const Login: React.FC = (): JSX.Element => (
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
    <LoginPage />
  </>
);

export default Login;
