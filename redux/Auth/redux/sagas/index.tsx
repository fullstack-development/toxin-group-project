import { SagaIterator } from 'redux-saga';
import { put, takeLatest, call, PutEffect } from 'redux-saga/effects';

import Api from 'api/api';
import { User, UserCredential } from 'api/Firebase/modules/Authentication/types';

import {
  AUTH_PROCESS,
  AUTH_SUCCESS,
  PRELOAD_AUTH_DATA,
  AUTH_FAILED,
  AUTH_REQUIRED,
  GOOGLE_AUTH_PROCESS,
  AUTH_LOGOUT_PROCESS,
  AUTH_LOGOUT_DONE,
} from '../../constants';
import { AuthData, SetAuthStatusSuccess, SetAuthStatusFailed, SetAuthRequired } from '../../types';

function* startAuthProcess(data: {
  type: typeof AUTH_PROCESS | typeof GOOGLE_AUTH_PROCESS;
  payload: AuthData;
}): Generator | Generator<PutEffect<SetAuthStatusSuccess | SetAuthStatusFailed>, void, never> {
  const { type } = data;

  try {
    if (type === AUTH_PROCESS) {
      const { email, password } = data.payload;
      const { user }: UserCredential = yield call(Api.auth.signIn, email, password);

      yield put({
        type: AUTH_SUCCESS,
        payload: user,
      });
    } else if (type === GOOGLE_AUTH_PROCESS) {
      const { user }: UserCredential = yield call(Api.auth.signInWithGoogle);

      yield put({
        type: AUTH_SUCCESS,
        payload: user,
      });
    }
  } catch (error) {
    yield put({
      type: AUTH_FAILED,
      payload: error.message,
    });
  }
}

const authStateChangedCallback = (): Promise<User> => {
  return new Promise((resolve, reject) => {
    Api.auth.onStateChanged((data) => {
      if (data) resolve(data);
      else reject(new Error('Пользователь не авторизован.'));
    });
  });
};

function* prepareAuthData():
  | Generator
  | Generator<
      PutEffect<SetAuthStatusSuccess | SetAuthStatusFailed | SetAuthRequired>,
      void,
      never
    > {
  try {
    const result: User = yield call(authStateChangedCallback);

    yield put({
      type: AUTH_SUCCESS,
      payload: result,
    });
  } catch (error) {
    yield put({
      type: AUTH_REQUIRED,
    });
  }
}

function* logoutUser(): Generator {
  yield call(Api.auth.signOut);
  yield put({ type: AUTH_LOGOUT_DONE });
}

export function* rootSaga(): SagaIterator {
  yield takeLatest<never>(PRELOAD_AUTH_DATA, prepareAuthData);
  yield takeLatest<never>(AUTH_PROCESS, startAuthProcess);
  yield takeLatest<never>(GOOGLE_AUTH_PROCESS, startAuthProcess);
  yield takeLatest<never>(AUTH_LOGOUT_PROCESS, logoutUser);
}
