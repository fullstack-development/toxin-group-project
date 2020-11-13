import Head from 'next/head';
import { memo } from 'react';

import LoginAndSecurityPage from 'components/LoginAndSecurityPage/LoginAndSecurityPage';

const LoginAndSecurity = memo(() => (
  <>
    <Head>
      <title>Toxin | Безопасность</title>
      <meta
        name="description"
        content="Здесь вы можете настроить параметры защиты вашего аккаунта"
      />
      <meta name="keywords" content="отель, номер, аккаунт, безопасность, защита, пароль" />
    </Head>
    <LoginAndSecurityPage />
  </>
));

export default LoginAndSecurity;
