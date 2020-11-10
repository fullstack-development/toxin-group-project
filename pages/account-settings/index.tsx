import Head from 'next/head';

import AccountSettingsPage from 'components/AccountSettingsPage/AccountSettingsPage';

const AccountSettings = (): JSX.Element => (
  <>
    <Head>
      <title>Toxin | Настройки аккаунта</title>
      <meta name="description" content="Все доступные настройки вашего аккаунта" />
      <meta name="keywords" content="отель, номер, аккаунт, настроить, настройка" />
    </Head>
    <AccountSettingsPage />
  </>
);

export default AccountSettings;
