import { memo } from 'react';

import MainLayout from 'components/MainLayout/MainLayout';

import MainContent from './components/MainContent/MainContent';

const RoomDetailsPage = memo(() => (
  <MainLayout>
    <MainContent />
  </MainLayout>
));

RoomDetailsPage.displayName = 'RoomDetailsPage';

export default RoomDetailsPage;
