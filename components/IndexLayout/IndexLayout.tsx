import Footer from 'components/Footer/Footer';
import HeaderContainer from 'components/Header/HeaderContainer';

import Banner from './components/Banner/Banner';
import { BannerMessage } from './IndexLayout.data';

const IndexLayout: React.FC = (): JSX.Element => (
  <>
    <HeaderContainer />
    <Banner message={BannerMessage} />
    <Footer />
  </>
);

export default IndexLayout;
