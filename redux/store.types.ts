import { SagaIterator } from 'redux-saga';

import { AuthActions, AuthState } from './Auth/types';
import { PasswordResetActions, PasswordResetState } from './PasswordReset/types';
import { RegistrationActions, RegistrationState } from './Registration/types';

export type AvailableStates = AuthState | PasswordResetState | RegistrationState;
export type AvailableActions = AuthActions | PasswordResetActions | RegistrationActions;

export type AppState = {
  authReducer: AuthState;
  passwordResetReducer: PasswordResetState;
  RegistrationReducer: RegistrationState;
};

export type AvailableReducers = (
  state: AvailableStates,
  action: AvailableActions,
) => AvailableStates;

export type SharedReduxEntries = {
  reducers: Record<string, AvailableReducers>;
  sagas: Array<() => SagaIterator>;
}[];
