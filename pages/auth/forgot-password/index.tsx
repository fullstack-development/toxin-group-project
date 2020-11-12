import Head from 'next/head';

import { ForgotPasswordPage } from 'modules/Auth';

const ForgotPassword: React.FC = (): JSX.Element => (
  <>
    <Head>
      <title>Toxin | Восстановить пароль</title>
      <meta name="description" content="Восстановление пароля от вашего аккаунта" />
      <meta
        name="keywords"
        content="отель, номер, регистрация, авторизация, пароль, забыли пароль, восстановить, сбросить"
      />
    </Head>
    <ForgotPasswordPage />
  </>
);

export default ForgotPassword;
