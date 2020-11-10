import { SagaIterator } from 'redux-saga';

import { ApartmentActions, ApartmentState } from './Apartment/model';
import { AuthActions, AuthState } from './Auth/model';
import { BookingActions, BookingState } from './Booking/model';
import { ProfileActions, ProfileState } from './Profile/model';
import { RegistrationActions, RegistrationState } from './Registration/model';

export type AvailableStates =
  | ApartmentState
  | AuthState
  | BookingState
  | ProfileState
  | RegistrationState;

export type AvailableActions =
  | ApartmentActions
  | AuthActions
  | BookingActions
  | ProfileActions
  | RegistrationActions;

export type AppState = {
  apartment: ApartmentState;
  auth: AuthState;
  booking: BookingState;
  profile: ProfileState;
  registration: RegistrationState;
};

export type AvailableReducers = (
  state: AvailableStates,
  action: AvailableActions,
) => AvailableStates;

export type SharedReduxEntries = {
  reducers: Record<string, AvailableReducers>;
  sagas: Array<() => SagaIterator>;
}[];
