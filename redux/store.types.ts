import { SagaIterator } from 'redux-saga';

import { ApartmentActions, ApartmentState } from './Apartment/types';
import { AuthActions, AuthState } from './Auth/types';
import { BookingActions, BookingState } from './Booking/types';
import { ProfileActions, ProfileState } from './Profile/types';
import { RegistrationActions, RegistrationState } from './Registration/types';
import { SubscriptionActions, SubscriptionState } from './Subscriptions/model';

export type AvailableStates =
  | ApartmentState
  | AuthState
  | BookingState
  | ProfileState
  | RegistrationState
  | SubscriptionState;

export type AvailableActions =
  | ApartmentActions
  | AuthActions
  | BookingActions
  | ProfileActions
  | RegistrationActions
  | SubscriptionActions;

export type AppState = {
  apartment: ApartmentState;
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
