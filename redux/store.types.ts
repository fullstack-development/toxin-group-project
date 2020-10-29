import { SagaIterator } from 'redux-saga';

import { AuthActions, AuthState } from './Auth/types';
import { BookingActions, BookingState } from './Booking/types';
import { ProfileState, ProfileActions } from './Profile/types';
import { RegistrationActions, RegistrationState } from './Registration/types';

export type AvailableStates = AuthState | BookingState | ProfileState | RegistrationState;
export type AvailableActions = AuthActions | BookingActions | ProfileActions | RegistrationActions;

export type AppState = {
  auth: AuthState;
  bookingReducer: BookingState;
  profile: ProfileState;
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
