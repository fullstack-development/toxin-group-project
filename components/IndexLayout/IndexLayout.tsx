import Banner from './components/Banner/Banner';
import { BannerMessage } from './IndexLayout.data';

const IndexLayout: React.FC = (): JSX.Element => <Banner message={BannerMessage} />;

export default IndexLayout;
