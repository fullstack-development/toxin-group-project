import Head from 'next/head';

import { LogoutPage } from 'modules/Auth';

const Logout: React.FC = (): JSX.Element => (
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
);

export default Logout;
