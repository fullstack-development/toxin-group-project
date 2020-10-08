import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import { Props } from './MainLayout.types';

const MainLayout: React.FC<Props> = ({
  children,
  displayName,
  isAuthSuccess,
}: Props): JSX.Element => (
  <>
    <Header isAuthSuccess={isAuthSuccess} displayName={displayName} />
    {children}
    <Footer />
  </>
);

export default MainLayout;
