import MainLayoutContainer from 'components/MainLayout/MainLayoutContainer';

import Banner from './components/Banner/Banner';
import { BannerMessage } from './IndexPage.data';

const IndexPage: React.FC = (): JSX.Element => (
  <MainLayoutContainer>
    <Banner message={BannerMessage} />
  </MainLayoutContainer>
);

export default IndexPage;
