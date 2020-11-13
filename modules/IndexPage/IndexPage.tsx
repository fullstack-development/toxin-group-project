import { MainLayout } from 'features/shared/MainLayout/MainLayout';

import { Banner } from './components/Banner/Banner';
import { BannerMessage } from './IndexPage.data';

const IndexPage: React.FC = (): JSX.Element => (
  <MainLayout>
    <Banner message={BannerMessage} />
  </MainLayout>
);

export { IndexPage };
