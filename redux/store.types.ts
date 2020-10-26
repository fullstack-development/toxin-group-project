import { SagaIterator } from 'redux-saga';

import { AuthActions, AuthState } from './Auth/types';
import { BookingActions, BookingState } from './Booking/types';
import { RegistrationActions, RegistrationState } from './Registration/types';

export type AvailableStates = AuthState | RegistrationState | BookingState;
export type AvailableActions = AuthActions | RegistrationActions | BookingActions;

export type AppState = {
  authReducer: AuthState;
  RegistrationReducer: RegistrationState;
  bookingReducer: BookingState;
};

export type AvailableReducers = (
  state: AvailableStates,
  action: AvailableActions,
) => AvailableStates;

export type SharedReduxEntries = {
  reducers: Record<string, AvailableReducers>;
  sagas: Array<() => SagaIterator>;
}[];
