import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { logout, preloadAuthData } from 'redux/Auth/redux/actions';
import { AppState } from 'redux/store.types';

const mapState = (state: AppState) => ({
  isAuthSuccess: state.auth.isAuthSuccess,
});

const mapDispatch = {
  startLogoutProcess: logout,
  checkAuthBeforePageLoaded: preloadAuthData,
};

type Props = ReturnType<typeof mapState> & typeof mapDispatch;

const LogoutPage: React.FC<Props> = ({
  isAuthSuccess,
  checkAuthBeforePageLoaded,
  startLogoutProcess,
}: Props): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    checkAuthBeforePageLoaded();

    if (typeof isAuthSuccess === 'boolean') {
      if (isAuthSuccess) startLogoutProcess();
      else router.push('/');
    }
  });

  return null;
};

export default connect(mapState, mapDispatch)(LogoutPage);
