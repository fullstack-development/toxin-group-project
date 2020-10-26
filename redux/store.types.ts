import { SagaIterator } from 'redux-saga';

import { AuthActions, AuthState } from './Auth/types';
import { BookingActions, BookingState } from './Booking/types';
import { GetRoomDetailsActions, GetRoomDetailsState } from './GetRoomDetails/types';
import { RegistrationActions, RegistrationState } from './Registration/types';

export type AvailableStates = AuthState | BookingState | GetRoomDetailsState | RegistrationState;
export type AvailableActions =
  | AuthActions
  | BookingActions
  | GetRoomDetailsActions
  | RegistrationActions;

export type AppState = {
  authReducer: AuthState;
  getRoomDetailsReducer: GetRoomDetailsState;
  RegistrationReducer: RegistrationState;
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
