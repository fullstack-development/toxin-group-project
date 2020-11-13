import Head from 'next/head';
import { memo } from 'react';

import ForgotPasswordPage from 'components/ForgotPasswordPage/ForgotPasswordPage';

const ForgotPassword = memo(() => (
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
));

export default ForgotPassword;
