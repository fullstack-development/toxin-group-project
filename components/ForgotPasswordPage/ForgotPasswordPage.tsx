import { memo } from 'react';

import MainLayout from 'components/MainLayout/MainLayout';

import Banner from './components/Banner/Banner';

const ForgotPasswordPage = memo(() => (
  <MainLayout>
    <Banner />
  </MainLayout>
));

ForgotPasswordPage.displayName = 'ForgotPasswordPage';

export default ForgotPasswordPage;
