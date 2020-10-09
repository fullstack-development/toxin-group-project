import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import MainContent from './components/MainContent/MainContent';

const RoomDetailsPage: React.FC = (): JSX.Element => (
  <>
    <Header authData={{ userName: 'Юлий Цезарь', pathToProfile: '/mock-user' }} />
    <MainContent />
    <Footer />
  </>
);

export default RoomDetailsPage;
