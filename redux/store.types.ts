import { SagaIterator } from 'redux-saga';

import { AuthActions, AuthState } from './Auth/types';
import { BookingActions, BookingState } from './Booking/types';
import { EmailUpdateActions, EmailUpdateState } from './EmailUpdate/types';
import { PasswordUpdateActions, PasswordUpdateState } from './PasswordUpdate/types';
import { RegistrationActions, RegistrationState } from './Registration/types';
import { UsernameUpdateActions, UsernameUpdateState } from './UsernameUpdate/types';

export type AvailableStates =
  | AuthState
  | BookingState
  | EmailUpdateState
  | PasswordUpdateState
  | RegistrationState
  | UsernameUpdateState;
export type AvailableActions =
  | AuthActions
  | BookingActions
  | EmailUpdateActions
  | PasswordUpdateActions
  | RegistrationActions
  | UsernameUpdateActions;

export type AppState = {
  authReducer: AuthState;
  bookingReducer: BookingState;
  emailUpdateReducer: EmailUpdateState;
  passwordUpdateReducer: PasswordUpdateState;
  RegistrationReducer: RegistrationState;
  usernameUpdateReducer: UsernameUpdateState;
};

export type AvailableReducers = (
  state: AvailableStates,
  action: AvailableActions,
) => AvailableStates;

export type SharedReduxEntries = {
  reducers: Record<string, AvailableReducers>;
  sagas: Array<() => SagaIterator>;
}[];
