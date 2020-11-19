import Head from 'next/head';
import { memo } from 'react';

import { NotificationsPage } from 'modules/Profile';

const Notifications = memo(() => (
  <>
    <Head>
      <title>Toxin | Уведомления</title>
      <meta
        name="description"
        content="На этой странице вы можете настроить нужные Вам уведомления"
      />
      <meta name="keywords" content="отель, номер, аккаунт, уведомления, информация" />
    </Head>
    <NotificationsPage />
  </>
));

export default Notifications;
