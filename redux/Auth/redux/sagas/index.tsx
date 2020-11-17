import { SagaIterator } from 'redux-saga';
import { put, takeLatest, takeLeading, call, PutEffect } from 'redux-saga/effects';

import { Dependencies } from 'redux/store.model';
import { User, UserCredential } from 'services/api/Firebase/modules/Authentication';

import {
  AUTH_FAILED,
  AUTH_LOGOUT_DONE,
  AUTH_LOGOUT_PROCESS,
  AUTH_PROCESS,
  AUTH_REQUIRED,
  AUTH_SUCCESS,
  GOOGLE_AUTH_PROCESS,
  PASSWORD_RESET_FAILED,
  PASSWORD_RESET_PROCESS,
  PASSWORD_RESET_SUCCESS,
  PRELOAD_AUTH_DATA,
} from '../../constants';
import {
  RequestToAuth,
  SetAuthStatusSuccess,
  SetAuthStatusFailed,
  SetAuthRequired,
  PasswordResetRequest,
} from '../../model';

function* startAuthProcess(
  { api }: Dependencies,
  data: RequestToAuth,
): Generator | Generator<PutEffect<SetAuthStatusSuccess | SetAuthStatusFailed>, void, never> {
  const { type } = data;

  try {
    if (type === AUTH_PROCESS) {
      const { email, password } = data.payload;
      const { user }: UserCredential = yield call(api.auth.signIn, email, password);

      yield put({
        type: AUTH_SUCCESS,
        payload: user,
      });
    } else if (type === GOOGLE_AUTH_PROCESS) {
      const { user }: UserCredential = yield call(api.auth.signInWithGoogle);

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

const authStateChangedCallback = ({ api }: Dependencies): Promise<User> => {
  return new Promise((resolve, reject) => {
    api.auth.onStateChanged((data) => {
      if (data) resolve(data);
      else reject(new Error('Пользователь не авторизован.'));
    });
  });
};

function* prepareAuthData({
  api,
}: Dependencies):
  | Generator
  | Generator<
      PutEffect<SetAuthStatusSuccess | SetAuthStatusFailed | SetAuthRequired>,
      void,
      never
    > {
  try {
    const result: User = yield call(authStateChangedCallback, { api });

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

function* passwordReset({ api }: Dependencies, { payload: email }: PasswordResetRequest) {
  try {
    const userAuthInfo: string[] = yield call(api.auth.fetchSignInMethodsForEmail, email);
    const isEmailAuth = userAuthInfo.includes('password');
    if (isEmailAuth) {
      yield call(api.auth.resetPassword, email);
      yield put({
        type: PASSWORD_RESET_SUCCESS,
        payload: `Ссылка для восстановления пароля была отправлена на ${email}`,
      });
    } else {
      throw new Error('Пользователь с указанным электронным адресом не зарегистрирован');
    }
  } catch (err) {
    yield put({
      type: PASSWORD_RESET_FAILED,
      payload:
        err.message === 'Пользователь с указанным электронным адресом не зарегистрирован'
          ? err.message
          : 'Произошла ошибка, повторите попытку позже',
    });
  }
}

function* logoutUser({ api }: Dependencies): Generator {
  yield call(api.auth.signOut);
  yield put({ type: AUTH_LOGOUT_DONE });
}

export function* rootSaga(deps: Dependencies): SagaIterator {
  yield takeLatest(AUTH_LOGOUT_PROCESS, logoutUser, deps);
  yield takeLatest(AUTH_PROCESS, startAuthProcess, deps);
  yield takeLatest(GOOGLE_AUTH_PROCESS, startAuthProcess, deps);
  yield takeLatest(PRELOAD_AUTH_DATA, prepareAuthData, deps);
  yield takeLeading(PASSWORD_RESET_PROCESS, passwordReset, deps);
}
