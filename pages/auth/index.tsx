import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import AuthPage from 'components/AuthPage/AuthPage';

const Auth = memo(() => {
  const { t } = useTranslation('SignInPage');
  return (
    <>
      <Head>
        <title>Toxin | {t('Sign In')}</title>
        <meta
          name="description"
          content={t('Sign in to your account to book rooms at our hotel')}
        />
        <meta
          name="keywords"
          content={t('hotel, room, registration, authorization, book, sign in')}
        />
      </Head>
      <AuthPage />
    </>
  );
});

export default Auth;
