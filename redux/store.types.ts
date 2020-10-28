import { SagaIterator } from 'redux-saga';

import { AuthActions, AuthState } from './Auth/types';
import { BookingActions, BookingState } from './Booking/types';
import { EmailUpdateActions, EmailUpdateState } from './EmailUpdate/types';
import {
  GetAdditionalUserDataActions,
  GetAdditionalUserDataState,
} from './GetAdditionalUserData/types';
import { PasswordUpdateActions, PasswordUpdateState } from './PasswordUpdate/types';
import { RegistrationActions, RegistrationState } from './Registration/types';
import {
  UpdateAdditionalUserDataActions,
  UpdateAdditionalUserDataState,
} from './UpdateAdditionalUserData/types';
import { UsernameUpdateActions, UsernameUpdateState } from './UsernameUpdate/types';

export type AvailableStates =
  | AuthState
  | BookingState
  | EmailUpdateState
  | GetAdditionalUserDataState
  | PasswordUpdateState
  | RegistrationState
  | UpdateAdditionalUserDataState
  | UsernameUpdateState;
export type AvailableActions =
  | AuthActions
  | BookingActions
  | EmailUpdateActions
  | GetAdditionalUserDataActions
  | PasswordUpdateActions
  | RegistrationActions
  | UpdateAdditionalUserDataActions
  | UsernameUpdateActions;

export type AppState = {
  authReducer: AuthState;
  bookingReducer: BookingState;
  emailUpdate: EmailUpdateState;
  getAdditionalUserData: GetAdditionalUserDataState;
  passwordUpdate: PasswordUpdateState;
  RegistrationReducer: RegistrationState;
  updateAdditionalUserData: UpdateAdditionalUserDataState;
  usernameUpdate: UsernameUpdateState;
};

export type AvailableReducers = (
  state: AvailableStates,
  action: AvailableActions,
) => AvailableStates;

export type SharedReduxEntries = {
  reducers: Record<string, AvailableReducers>;
  sagas: Array<() => SagaIterator>;
}[];
