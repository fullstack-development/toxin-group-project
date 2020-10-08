import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import MainContent from './components/MainContent/MainContent';

const RegistrationLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <Header authData={{ userName: 'Юлий Цезарь', pathToProfile: '/mock-user' }} />
      <MainContent />
      <Footer />
    </>
  );
};

export default RegistrationLayout;
