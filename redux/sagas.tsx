import { put, takeEvery, call } from 'redux-saga/effects';

import Api from 'api/api';
import { UserCredential } from 'api/types';

import { setAuthStatus } from './actions';
import { AUTH_PROCESS, AUTH_SUCCESS, AUTH_FAILED } from './constant';
import { AuthData } from './types';

const authUser = (email: string, password: string): Promise<UserCredential> | string => {
  try {
    return Api.auth.signIn(email, password);
  } catch (error) {
    return error.message;
  }
};

export function* startAuthProcess(data: { payload: AuthData }): Generator {
  const { email, password } = data.payload;
  const authRequest: UserCredential | string = yield call(authUser, email, password);

  console.log(authRequest);

  const authResult = authRequest.user
    ? { type: AUTH_SUCCESS, payload: authRequest }
    : { type: AUTH_FAILED, payload: authRequest };

  yield put(setAuthStatus(authResult));

  return authResult;
}

export function* watchAuthUser(): Generator {
  yield takeEvery(AUTH_PROCESS, startAuthProcess);
}
