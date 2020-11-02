import { SagaIterator } from 'redux-saga';

import { AuthActions, AuthState } from './Auth/types';
import { BookingActions, BookingState } from './Booking/types';
import { RegistrationActions, RegistrationState } from './Registration/types';
import { SubscriptionActions, SubscriptionState } from './Subscriptions/types';

export type AvailableStates = AuthState | BookingState | RegistrationState | SubscriptionState;
export type AvailableActions =
  | AuthActions
  | BookingActions
  | RegistrationActions
  | SubscriptionActions;

export type AppState = {
  auth: AuthState;
  registration: RegistrationState;
  booking: BookingState;
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
