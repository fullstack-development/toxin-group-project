import { ProfileData } from 'api/entities/types';

export type MapState = {
  isSuccess: boolean;
  isProcess: boolean;
  statusText: string;
  requestRegistration: (data: ProfileData) => void;
  stopRegistration: () => void;
};

export type State = {
  RegistrationReducer: MapState;
  authReducer: {
    wasFinishedAuthChecking: boolean;
    isAuthSuccess: boolean;
  };
};
