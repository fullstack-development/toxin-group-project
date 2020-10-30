import { SagaIterator } from 'redux-saga';

import { AuthActions, AuthState } from './Auth/types';
import { BookingActions, BookingState } from './Booking/types';
import { RegistrationActions, RegistrationState } from './Registration/types';

export type AvailableStates = AuthState | BookingState | RegistrationState;
export type AvailableActions = AuthActions | BookingActions | RegistrationActions;

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
