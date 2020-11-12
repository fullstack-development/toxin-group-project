import { useEffect } from 'react';
import { connect } from 'react-redux';

import { preloadAuthData } from 'redux/Auth/redux/actions';
import { Footer, Header } from 'shared/view/components';

import { State, Props } from './MainLayout.types';

type StateProps = {
  displayName: string;
  wasFinishedAuthChecking: boolean;
};

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

const mapState = (state: State): StateProps => ({
  displayName: state.auth.displayName,
  wasFinishedAuthChecking: state.auth.wasFinishedAuthChecking,
});

const mapDispatch = {
  preloadAuth: preloadAuthData,
};

export default connect(mapState, mapDispatch)(MainLayout);
