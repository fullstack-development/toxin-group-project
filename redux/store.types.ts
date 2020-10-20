import { SagaIterator } from 'redux-saga';

import { AuthActions, AuthState } from './Auth/types';
import { RegistrationActions, RegistrationState } from './Registration/types';

export type AvailableStates = AuthState | RegistrationState;
export type AvailableActions = AuthActions | RegistrationActions;

export type AvailableReducers = (
  state: AvailableStates,
  action: AvailableActions,
) => AvailableStates;

export type SharedReduxEntries = {
  reducers: Record<string, AvailableReducers>;
  sagas: Array<() => SagaIterator>;
}[];
