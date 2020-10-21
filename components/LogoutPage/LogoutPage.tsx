import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { Logout, preloadAuthData } from 'redux/Auth/redux/actions';

type Props = {
  isAuthSuccess: boolean;
  checkAuthBeforePageLoaded: () => void;
  startLogoutProcess: () => void;
};

type PropsState = {
  authReducer: {
    isAuthSuccess: boolean;
  };
};

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

const mapState = (state: PropsState) => ({
  isAuthSuccess: state.authReducer.isAuthSuccess,
});

const mapDispatch = {
  startLogoutProcess: Logout,
  checkAuthBeforePageLoaded: preloadAuthData,
};

export default connect(mapState, mapDispatch)(LogoutPage);
