import { useEffect } from 'react';
import { connect } from 'react-redux';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { preloadAuthData } from 'redux/actions';

import { Props } from './MainLayout.types';

const MainLayout: React.FC<Props> = ({
  children,
  displayName,
  wasFinishedAuthChecking,
  preloadAuth,
}: Props): JSX.Element => {
  useEffect(() => {
    preloadAuth();
  }, [preloadAuth]);

  return (
    <>
      <Header displayName={displayName} wasFinishedAuthChecking={wasFinishedAuthChecking} />
      {children}
      <Footer />
    </>
  );
};

const mapState = (state: Props) => ({
  displayName: state.displayName,
  authStatusText: state.authStatusText,
  wasFinishedAuthChecking: state.wasFinishedAuthChecking,
});

const mapDispatch = {
  preloadAuth: preloadAuthData,
};

export default connect(mapState, mapDispatch)(MainLayout);
