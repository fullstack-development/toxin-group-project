import { useRouter } from 'next/router';
import { memo, useEffect } from 'react';
import { connect } from 'react-redux';

import { logout, preloadAuthData } from 'redux/Auth/redux/actions';
import { AppState } from 'redux/store.types';

type StateProps = {
  isAuthSuccess: boolean;
};

const mapState = (state: AppState): StateProps => ({
  isAuthSuccess: state.auth.isAuthSuccess,
});

const mapDispatch = {
  startLogoutProcess: logout,
  checkAuthBeforePageLoaded: preloadAuthData,
};

type Props = StateProps & typeof mapDispatch;

const LogoutPage = memo(
  ({ isAuthSuccess, checkAuthBeforePageLoaded, startLogoutProcess }: Props) => {
    const router = useRouter();

    useEffect(() => {
      checkAuthBeforePageLoaded();

      if (typeof isAuthSuccess === 'boolean') {
        if (isAuthSuccess) startLogoutProcess();
        else document.referrer ? router.back() : router.push('/');
      }
    });

    return null;
  },
);

LogoutPage.displayName = 'LogoutPage';

export default connect(mapState, mapDispatch)(LogoutPage);
