import Head from 'next/head';

import { LoginAndSecurityPage } from 'modules/Profile';

const LoginAndSecurity = (): JSX.Element => (
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
);

export default LoginAndSecurity;
