import { put, takeLatest, call } from 'redux-saga/effects';

import Api from 'api/api';
import { UserCredential } from 'api/types';

import { setAuthStatus } from './actions';
import { AUTH_PROCESS, AUTH_SUCCESS, AUTH_FAILED } from './constant';
import { AuthData } from './types';

export function* startAuthProcess(data: { payload: AuthData }): Generator {
  const { email, password } = data.payload;

  try {
    const authStatus: UserCredential | unknown = yield call(Api.auth.signIn, email, password);

    yield put(
      setAuthStatus({
        type: AUTH_SUCCESS,
        payload: authStatus,
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

export function* watchAuthUser(): Generator {
  yield takeLatest(AUTH_PROCESS, startAuthProcess);
}
