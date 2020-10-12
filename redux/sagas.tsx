import { SagaIterator } from 'redux-saga';
import { put, takeLatest, call, PutEffect } from 'redux-saga/effects';

import Api from 'api/api';
import { User, UserCredential } from 'api/types';

import { setAuthStatus } from './actions';
import { AUTH_PROCESS, AUTH_SUCCESS, PRELOAD_AUTH_DATA, AUTH_FAILED } from './constants';
import { AuthData, SetAuthStatusSuccess, SetAuthStatusFailed } from './types';

function* startAuthProcess(data: {
  payload: AuthData;
}): Generator | Generator<PutEffect<SetAuthStatusSuccess | SetAuthStatusFailed>, void, never> {
  const { email, password } = data.payload;

  try {
    const { user }: UserCredential = yield call(Api.auth.signIn, email, password);

    yield put(
      setAuthStatus({
        type: AUTH_SUCCESS,
        payload: user,
      }),
    );
  } catch (error) {
    yield put(
      setAuthStatus({
        type: AUTH_FAILED,
        payload: error.message,
      }),
    );
  }
}

const authStateChangedCallback = (): Promise<User> => {
  return new Promise((resolve, reject) => {
    Api.auth.onStateChanged((data) => {
      if (data) resolve(data);
      else reject(new Error('Пользователь не авторизован'));
    });
  });
};

function* prepareAuthData():
  | Generator
  | Generator<PutEffect<SetAuthStatusSuccess | SetAuthStatusFailed>, void, never> {
  try {
    const result: User = yield call(authStateChangedCallback);

    yield put(
      setAuthStatus({
        type: AUTH_SUCCESS,
        payload: result,
      }),
    );
  } catch (error) {
    yield put(
      setAuthStatus({
        type: AUTH_FAILED,
        payload: error.message,
      }),
    );
  }
}

export function* rootSaga(): SagaIterator {
  yield takeLatest<never>(AUTH_PROCESS, startAuthProcess);
  yield takeLatest<never>(PRELOAD_AUTH_DATA, prepareAuthData);
}
