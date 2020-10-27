import { SagaIterator } from 'redux-saga';

import { AuthState, AuthActions } from './Auth/types';
import { BookingActions, BookingState } from './Booking/types';
import { BookedHistoryState, BookedHistoryActions } from './BookingHistory/types';
import { RegistrationState, RegistrationActions } from './Registration/types';

export type AvailableStates = AuthState | RegistrationState | BookedHistoryState | BookingState;
export type AvailableActions =
  | AuthActions
  | RegistrationActions
  | BookedHistoryActions
  | BookingActions;

export type AppState = {
  AuthReducer: AuthState;
  RegistrationReducer: RegistrationState;
  BookedHistoryReducer: BookedHistoryState;
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
