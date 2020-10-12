import { SagaIterator } from 'redux-saga';
import { put, takeLatest, call, PutEffect } from 'redux-saga/effects';

import Api from 'api/api';
import { UserCredential } from 'api/types';

import { setAuthStatus } from './actions';
import { AUTH_PROCESS, AUTH_SUCCESS, AUTH_FAILED } from './constants';
import { AuthData, SetAuthStatusSuccess, SetAuthStatusFailed } from './types';

export function* startAuthProcess(data: {
  payload: AuthData;
}): Generator | Generator<PutEffect<SetAuthStatusSuccess | SetAuthStatusFailed>, void, never> {
  const { email, password } = data.payload;

  try {
    const authStatus: UserCredential = yield call(Api.auth.signIn, email, password);

    // yield put(
    //   setAuthStatus({
    //     type: AUTH_SUCCESS,
    //     payload: authStatus,
    //   }),
    // );

    console.log(Api.auth.setAuthPersistence());
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
}
