import Footer from 'components/Footer/Footer';
import HeaderContainer from 'components/Header/Header';

import InnerPageContainer from './components/InnerPageContainer';

const AuthLayout: React.FC = (): JSX.Element => (
  <>
    <HeaderContainer />
    <InnerPageContainer />
    <Footer />
  </>
);

export default AuthLayout;
