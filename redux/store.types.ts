import { SagaIterator } from 'redux-saga';

import { ApartmentActions, ApartmentState } from './Apartment/types';
import { AuthActions, AuthState } from './Auth/types';
import { BookingActions, BookingState } from './Booking/types';
import { RegistrationState, RegistrationActions } from './Registration/types';

export type AvailableStates = ApartmentState | AuthState | BookingState | RegistrationState;
export type AvailableActions =
  | ApartmentActions
  | AuthActions
  | BookingActions
  | RegistrationActions;

export type AppState = {
  apartment: ApartmentState;
  auth: AuthState;
  booking: BookingState;
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
