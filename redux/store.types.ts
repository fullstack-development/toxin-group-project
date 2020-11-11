import { SagaIterator } from 'redux-saga';

import { ApartmentActions, ApartmentState } from './Apartment/model';
import { AuthActions, AuthState } from './Auth/model';
import { BookingActions, BookingState } from './Booking/model';
import { LanguageState, LanguageActions } from './Language/model';
import { ProfileActions, ProfileState } from './Profile/model';
import { RegistrationActions, RegistrationState } from './Registration/model';
import { SubscriptionActions, SubscriptionState } from './Subscriptions/model';

export type AvailableStates =
  | ApartmentState
  | AuthState
  | BookingState
  | ProfileState
  | RegistrationState
  | LanguageState
  | SubscriptionState;

export type AvailableActions =
  | ApartmentActions
  | AuthActions
  | BookingActions
  | ProfileActions
  | RegistrationActions
  | LanguageActions
  | SubscriptionActions;

export type AppState = {
  apartment: ApartmentState;
  auth: AuthState;
  booking: BookingState;
  language: LanguageState;
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
