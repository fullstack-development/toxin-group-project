import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { SagaMiddleware, SagaIterator } from 'redux-saga';

import { reduxEntry as AuthReduxEntry } from './Auth';
import { AuthActions, AuthState } from './Auth/types';
import { reduxEntry as BookingReduxEntry } from './Booking';
import { BookingActions, BookingState } from './Booking/types';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

type AvailableReducers = (
  state: AuthState | BookingState,
  action: AuthActions | BookingActions,
) => AuthState | BookingState;

type SharedReduxEntries = {
  reducers: Record<string, AvailableReducers>;
  sagas: Array<() => SagaIterator>;
}[];

const sharedReduxEntries: SharedReduxEntries = [AuthReduxEntry, BookingReduxEntry];

let preparedReducers: Record<string, AvailableReducers> = {};

sharedReduxEntries.forEach((module) => {
  const { reducers } = module;

  preparedReducers = {
    ...preparedReducers,
    ...reducers,
  };
});
console.log(preparedReducers);
const rootReducer = combineReducers(preparedReducers);

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

sharedReduxEntries.forEach((module) => {
  const { sagas } = module;

  sagas.forEach((saga) => sagaMiddleware.run(saga));
});
