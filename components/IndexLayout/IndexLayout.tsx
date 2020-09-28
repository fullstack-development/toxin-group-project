import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import Banner from './components/Banner/Banner';
import { BannerMessage } from './IndexLayout.data';

const IndexLayout: React.FC = (): JSX.Element => (
  <>
    <Header authData={{ userName: 'Юлий Цезарь', pathToProfile: '/mock-user' }} />
    <Banner message={BannerMessage} />
    <Footer />
  </>
);

export default IndexLayout;
