import { connect } from 'react-redux';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import { Props } from './MainLayout.types';

const MainLayout: React.FC<Props> = ({ children, displayName }: Props): JSX.Element => (
  <>
    <Header displayName={displayName} />
    {children}
    <Footer />
  </>
);

const mapState = (state: Props) => ({
  isAuthSuccess: state.isAuthSuccess,
  displayName: state.displayName,
  authStatusText: state.authStatusText,
});

export default connect(mapState)(MainLayout);
