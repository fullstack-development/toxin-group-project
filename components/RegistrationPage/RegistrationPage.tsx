import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import MainLayout from 'components/MainLayout/MainLayout';
import { preloadAuthData } from 'redux/Auth/redux/actions';
import { sendRegistrationRequest, stopRegistrationProcess } from 'redux/Registration/redux/actions';

import MainContent from './components/MainContent/MainContent';
import { State, RegistrationProps } from './Registration.types';

type Props = {
  wasFinishedAuthChecking: boolean;
  isAuthSuccess: boolean;
  checkAuthBeforePageLoaded: () => void;
};

const RegistrationPage: React.FC<RegistrationProps & Props> = ({
  isSuccess,
  isProcess,
  statusText,
  wasFinishedAuthChecking,
  isAuthSuccess,
  requestRegistration,
  stopRegistration,
  checkAuthBeforePageLoaded,
}: RegistrationProps & Props): JSX.Element => {
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

const mapState = (state: State) => ({
  isSuccess: state.RegistrationReducer.isSuccess,
  isProcess: state.RegistrationReducer.isProcess,
  statusText: state.RegistrationReducer.statusText,
  wasFinishedAuthChecking: state.authReducer.wasFinishedAuthChecking,
  isAuthSuccess: state.authReducer.isAuthSuccess,
});

const mapDispatch = {
  requestRegistration: sendRegistrationRequest,
  stopRegistration: stopRegistrationProcess,
  checkAuthBeforePageLoaded: preloadAuthData,
};

export default connect(mapState, mapDispatch)(RegistrationPage);
