import { SagaIterator } from 'redux-saga';

import { AuthState, AuthActions } from './Auth/types';
import { BookingActions, BookingState } from './Booking/types';
import { ProfileActions, ProfileState } from './Profile/types';
import { RegistrationActions, RegistrationState } from './Registration/types';
import { SubscriptionActions, SubscriptionState } from './Subscriptions/types';

export type AvailableStates =
  | AuthState
  | BookingState
  | ProfileState
  | RegistrationState
  | SubscriptionState;
export type AvailableActions =
  | AuthActions
  | BookingActions
  | ProfileActions
  | RegistrationActions
  | SubscriptionActions;

export type AppState = {
  auth: AuthState;
  booking: BookingState;
  profile: ProfileState;
  registration: RegistrationState;
  subscriptions: SubscriptionState;
};

export type AvailableReducers = (
  state: AvailableStates,
  action: AvailableActions,
) => AvailableStates;

export type SharedReduxEntries = {
  reducers: Record<string, AvailableReducers>;
  sagas: Array<() => SagaIterator>;
}[];
