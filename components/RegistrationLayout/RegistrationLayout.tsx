import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import InnerPage from './components/InnerPage/InnerPage';

const RegistrationLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <Header authData={{ userName: 'Юлий Цезарь', pathToProfile: '/mock-user' }} />
      <InnerPage />
      <Footer />
    </>
  );
};

export default RegistrationLayout;
