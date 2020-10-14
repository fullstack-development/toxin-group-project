import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import MainLayout from 'components/MainLayout/MainLayout';
import {
  requestToAuth,
  breakAuthProcess,
  preloadAuthData,
  requestToAuthWithGoogle,
} from 'redux/actions';

import { Props } from './AuthPage.types';
import MainContent from './components/MainContent';

const AuthPage: React.FC<Props> = ({
  isAuthSuccess,
  isAuthProcessNow,
  authStatusText,
  wasFinishedAuthChecking,
  checkAuthBeforePageLoaded,
  startAuthProcess,
  startGoogleAuthProcess,
  stopAuthProcess,
}: Props): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    checkAuthBeforePageLoaded();
    if (isAuthSuccess) router.push('/');
  });

  const isAuthRequired: boolean = wasFinishedAuthChecking && !isAuthSuccess;

  return (
    <>
      {isAuthRequired && (
        <MainLayout>
          <MainContent
            isAuthSuccess={isAuthSuccess}
            isAuthProcessNow={isAuthProcessNow}
            authStatusText={authStatusText}
            startAuthProcess={startAuthProcess}
            startGoogleAuthProcess={startGoogleAuthProcess}
            stopAuthProcess={stopAuthProcess}
          />
        </MainLayout>
      )}
    </>
  );
};

const mapState = (state) => state;

const mapDispatch = {
  startAuthProcess: requestToAuth,
  stopAuthProcess: breakAuthProcess,
  checkAuthBeforePageLoaded: preloadAuthData,
  startGoogleAuthProcess: requestToAuthWithGoogle,
};

export default connect(mapState, mapDispatch)(AuthPage);
