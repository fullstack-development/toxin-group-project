import { SagaIterator } from 'redux-saga';

import { AuthState, AuthActions } from './Auth/types';
import { BookingActions, BookingState } from './Booking/types';
import { RegistrationState, RegistrationActions } from './Registration/types';

export type AvailableStates = AuthState | RegistrationState | BookingState;
export type AvailableActions = AuthActions | RegistrationActions | BookingActions;

export type AppState = {
  auth: AuthState;
  registration: RegistrationState;
  booking: BookingState;
};

export type AvailableReducers = (
  state: AvailableStates,
  action: AvailableActions,
) => AvailableStates;

export type SharedReduxEntries = {
  reducers: Record<string, AvailableReducers>;
  sagas: Array<() => SagaIterator>;
}[];
