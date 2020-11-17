import { SagaIterator } from 'redux-saga';

import { Api } from 'services/api/api';

import { ApartmentActions, ApartmentState } from './Apartment/model';
import { AuthActions, AuthState } from './Auth/model';
import { BookingActions, BookingState } from './Booking/model';
import { LanguageState, LanguageActions } from './Language/model';
import { ProfileActions, ProfileState } from './Profile/model';
import { RegistrationActions, RegistrationState } from './Registration/model';
import { SubscriptionActions, SubscriptionState } from './Subscriptions/model';

type Dependencies = {
  api: Api;
};

type AvailableStates =
  | ApartmentState
  | AuthState
  | BookingState
  | ProfileState
  | RegistrationState
  | LanguageState
  | SubscriptionState;

type AvailableActions =
  | ApartmentActions
  | AuthActions
  | BookingActions
  | ProfileActions
  | RegistrationActions
  | LanguageActions
  | SubscriptionActions;

type AppState = {
  apartment: ApartmentState;
  auth: AuthState;
  booking: BookingState;
  language: LanguageState;
  profile: ProfileState;
  registration: RegistrationState;
  subscriptions: SubscriptionState;
};

type AvailableReducers = (state: AvailableStates, action: AvailableActions) => AvailableStates;

type SharedReduxEntries = {
  reducers: Record<string, AvailableReducers>;
  sagas: Array<(deps: Dependencies) => SagaIterator>;
}[];

export type {
  Dependencies,
  AvailableStates,
  AvailableActions,
  AppState,
  AvailableReducers,
  SharedReduxEntries,
};
