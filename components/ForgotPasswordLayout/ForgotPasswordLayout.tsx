import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import Banner from './components/Banner/Banner';

const ForgotPasswordLayout: React.FC = (): JSX.Element => (
  <>
    <Header authData={{ userName: 'Юлий Цезарь', pathToProfile: '/mock-user' }} />
    <Banner />
    <Footer />
  </>
);

export default ForgotPasswordLayout;
