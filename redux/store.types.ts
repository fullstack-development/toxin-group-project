import { SagaIterator } from 'redux-saga';

import { AuthActions, AuthState } from './Auth/types';
import { BookingState, BookedActions } from './Booking/types';
import { RegistrationActions, RegistrationState } from './Registration/types';

export type AvailableStates = AuthState | RegistrationState | BookingState;
export type AvailableActions = AuthActions | RegistrationActions | BookedActions;

export type AppState = {
  AuthReducer: AuthState;
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
