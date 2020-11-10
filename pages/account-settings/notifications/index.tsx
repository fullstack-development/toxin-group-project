import Head from 'next/head';

import NotificationsPage from 'components/NotificationsPage/NotificationsPage';

const Notifications = (): JSX.Element => (
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
);

export default Notifications;
