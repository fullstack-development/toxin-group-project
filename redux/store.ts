import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { SagaMiddleware, SagaIterator } from 'redux-saga';

import { reduxEntry as AuthReduxEntry } from './Auth';
import { AuthActions, AuthState } from './Auth/types';
import { emailUpdateReduxEntry } from './EmailUpdate';
import { EmailUpdateActions, EmailUpdateState } from './EmailUpdate/types';
import { passwordUpdateReduxEntry } from './PasswordUpdate';
import { PasswrodUpdateActions, PasswordUpdateState } from './PasswordUpdate/types';
import { usernameUpdateReduxEntry } from './UsernameUpdate';
import { UsernameUpdateActions, UsernameUpdateState } from './UsernameUpdate/types';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

type AvailableReducers = (
  state: AuthState | UsernameUpdateState | EmailUpdateState | PasswordUpdateState,
  action: AuthActions | UsernameUpdateActions | EmailUpdateActions | PasswordUpdateActions,
) => AuthState | UsernameUpdateState | EmailUpdateState | PasswordUpdateState;

type SharedReduxEntries = {
  reducers: Record<string, AvailableReducers>;
  sagas: Array<() => SagaIterator>;
}[];

const sharedReduxEntries: SharedReduxEntries = [
  AuthReduxEntry,
  usernameUpdateReduxEntry,
  emailUpdateReduxEntry,
  passwordUpdateReduxEntry,
];

let preparedReducers: Record<string, AvailableReducers> = {};

sharedReduxEntries.forEach((module) => {
  const { reducers } = module;

  preparedReducers = {
    ...preparedReducers,
    ...reducers,
  };
});

const rootReducer = combineReducers(preparedReducers);

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

sharedReduxEntries.forEach((module) => {
  const { sagas } = module;

  sagas.forEach((saga) => sagaMiddleware.run(saga));
});
