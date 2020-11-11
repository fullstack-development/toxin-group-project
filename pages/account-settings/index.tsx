import Head from 'next/head';
import { memo } from 'react';

import AccountSettingsPage from 'components/AccountSettingsPage/AccountSettingsPage';

const AccountSettings = memo(() => (
  <>
    <Head>
      <title>Toxin | Настройки аккаунта</title>
      <meta name="description" content="Все доступные настройки вашего аккаунта" />
      <meta name="keywords" content="отель, номер, аккаунт, настроить, настройка" />
    </Head>
    <AccountSettingsPage />
  </>
));

AccountSettings.displayName = 'AccountSettings';

export default AccountSettings;
