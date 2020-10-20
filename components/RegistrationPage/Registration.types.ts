import { ProfileData } from 'api/entities/types';

export type RegistrationProps = {
  isSuccess: boolean;
  isProcess: boolean;
  statusText: string;
  requestRegistration: (data: ProfileData) => void;
  stopRegistration: () => void;
};

export type State = {
  RegistrationReducer: RegistrationProps;
  authReducer: {
    wasFinishedAuthChecking: boolean;
    isAuthSuccess: boolean;
  };
};
