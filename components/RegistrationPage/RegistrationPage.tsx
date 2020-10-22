import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import MainLayout from 'components/MainLayout/MainLayout';
import { preloadAuthData } from 'redux/Auth/redux/actions';
import { startRegistration, cancelRegistration } from 'redux/Registration/redux/actions';
import { AppState } from 'redux/store.types';

import MainContent from './components/MainContent/MainContent';

const mapState = (state: AppState) => ({
  isSuccess: state.RegistrationReducer.isSuccess,
  isProcess: state.RegistrationReducer.isProcess,
  statusText: state.RegistrationReducer.statusText,
  wasFinishedAuthChecking: state.authReducer.wasFinishedAuthChecking,
  isAuthSuccess: state.authReducer.isAuthSuccess,
});

const mapDispatch = {
  requestRegistration: startRegistration,
  stopRegistration: cancelRegistration,
  checkAuthBeforePageLoaded: preloadAuthData,
};

export type PropsConnected = ReturnType<typeof mapState> & typeof mapDispatch;

const RegistrationPage: React.FC<PropsConnected> = ({
  isSuccess,
  isProcess,
  statusText,
  wasFinishedAuthChecking,
  isAuthSuccess,
  requestRegistration,
  stopRegistration,
  checkAuthBeforePageLoaded,
}: PropsConnected): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    checkAuthBeforePageLoaded();
    if (isAuthSuccess) router.push('/');
  });

  const isAuthRequired: boolean = wasFinishedAuthChecking && !isAuthSuccess;

  return (
    isAuthRequired && (
      <MainLayout>
        <MainContent
          isSuccess={isSuccess}
          isProcess={isProcess}
          statusText={statusText}
          requestRegistration={requestRegistration}
          stopRegistration={stopRegistration}
        />
      </MainLayout>
    )
  );
};

export default connect(mapState, mapDispatch)(RegistrationPage);
