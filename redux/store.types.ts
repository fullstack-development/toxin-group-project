import { SagaIterator } from 'redux-saga';

import { AuthActions, AuthState } from './Auth/types';
import { GetRoomDetailsActions, GetRoomDetailsState } from './GetRoomDetails/types';
import { RegistrationActions, RegistrationState } from './Registration/types';

export type AvailableStates = AuthState | GetRoomDetailsState | RegistrationState;
export type AvailableActions = AuthActions | GetRoomDetailsActions | RegistrationActions;

export type AppState = {
  authReducer: AuthState;
  getRoomDetailsReducer: GetRoomDetailsState;
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
