import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import Banner from './components/Banner/Banner';

const ForgotPasswordPage: React.FC = (): JSX.Element => (
  <>
    <Header wasFinishedAuthChecking />
    <Banner />
    <Footer />
  </>
);

export default ForgotPasswordPage;
