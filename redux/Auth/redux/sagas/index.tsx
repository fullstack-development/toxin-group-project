import { SagaIterator } from 'redux-saga';
import { put, call, PutEffect } from 'redux-saga/effects';

import Api from 'api/api';
import { User, UserCredential } from 'api/Firebase/modules/Authentication/types';
import { takeLatestAction, takeLeadingAction } from 'redux/types';

import {
  RequestToAuth,
  RequestToAuthWithGoogle,
  SetAuthRequired,
  SetAuthStatusSuccess,
  SetAuthStatusFailed,
  PasswordResetRequest,
  LogoutProcess,
  PreloadAuthData,
} from '../../model';

function* auth(
  data: RequestToAuth,
): Generator | Generator<PutEffect<SetAuthStatusSuccess | SetAuthStatusFailed>, void, never> {
  try {
    const { email, password } = data.payload;
    const { user }: UserCredential = yield call(Api.auth.signIn, email, password);

    yield put({
      type: 'AUTH_SUCCESS',
      payload: user,
    });
  } catch (error) {
    yield put({
      type: 'AUTH_FAILED',
      payload: error.message,
    });
  }
}

function* authWithGoogle():
  | Generator
  | Generator<PutEffect<SetAuthStatusSuccess | SetAuthStatusFailed>, void, never> {
  try {
    const { user }: UserCredential = yield call(Api.auth.signInWithGoogle);

    yield put({
      type: 'AUTH_SUCCESS',
      payload: user,
    });
  } catch (error) {
    yield put({
      type: 'AUTH_FAILED',
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
      type: 'AUTH_SUCCESS',
      payload: result,
    });
  } catch (error) {
    yield put({
      type: 'AUTH_REQUIRED',
    });
  }
}

function* logoutUser(): Generator {
  yield call(Api.auth.signOut);
  yield put({ type: 'AUTH_LOGOUT_DONE' });
}

function* passwordReset({ payload: email }: PasswordResetRequest) {
  try {
    const userAuthInfo: string[] = yield call(Api.auth.fetchSignInMethodsForEmail, email);
    const isEmailAuth = userAuthInfo.includes('password');
    if (isEmailAuth) {
      yield call(Api.auth.resetPassword, email);
      yield put({
        type: 'PASSWORD_RESET_SUCCESS',
        payload: `Ссылка для восстановления пароля была отправлена на ${email}`,
      });
    } else {
      throw new Error('Пользователь с указанным электронным адресом не зарегистрирован');
    }
  } catch (err) {
    yield put({
      type: 'PASSWORD_RESET_FAILED',
      payload:
        err.message === 'Пользователь с указанным электронным адресом не зарегистрирован'
          ? err.message
          : 'Произошла ошибка повторите попытку позже',
    });
  }
}

export function* rootSaga(): SagaIterator {
  yield takeLatestAction<RequestToAuth['type']>('AUTH_PROCESS', auth);
  yield takeLatestAction<RequestToAuthWithGoogle['type']>('GOOGLE_AUTH_PROCESS', authWithGoogle);
  yield takeLatestAction<PreloadAuthData['type']>('PRELOAD_AUTH_DATA', prepareAuthData);
  yield takeLatestAction<LogoutProcess['type']>('AUTH_LOGOUT_PROCESS', logoutUser);
  yield takeLeadingAction<PasswordResetRequest['type']>('PASSWORD_RESET_PROCESS', passwordReset);
}
