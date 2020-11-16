import { SagaIterator } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { takeLatestAction, takeLeadingAction } from 'redux/action.model';
import Api from 'services/api/api';
import { User, UserCredential } from 'services/api/Firebase/modules/Authentication/types';

import {
  RequestToAuth,
  RequestToAuthWithGoogle,
  LogoutProcess,
  PreloadAuthData,
  PasswordResetRequest,
} from '../../model';
import {
  setAuthRequired,
  setAuthStatusSuccess,
  setAuthStatusFailed,
  logoutDone,
  passwordResetFailed,
  passwordResetSuccess,
} from '../actions';

function* auth(data: RequestToAuth) {
  try {
    const { email, password } = data.payload;
    const { user }: UserCredential = yield call(Api.auth.signIn, email, password);

    yield put(setAuthStatusSuccess(user));
  } catch ({ message }) {
    yield put(setAuthStatusFailed(message));
  }
}

function* authWithGoogle() {
  try {
    const { user }: UserCredential = yield call(Api.auth.signInWithGoogle);

    yield put(setAuthStatusSuccess(user));
  } catch ({ message }) {
    yield put(setAuthStatusFailed(message));
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

function* prepareAuthData() {
  try {
    const user: User = yield call(authStateChangedCallback);

    yield put(setAuthStatusSuccess(user));
  } catch (error) {
    yield put(setAuthRequired());
  }
}

function* logoutUser() {
  yield call(Api.auth.signOut);
  yield put(logoutDone());
}

function* passwordReset({ payload: email }: PasswordResetRequest) {
  try {
    const userAuthInfo: string[] = yield call(Api.auth.fetchSignInMethodsForEmail, email);
    const isEmailAuth = userAuthInfo.includes('password');
    if (isEmailAuth) {
      yield call(Api.auth.resetPassword, email);
      yield put(
        passwordResetSuccess('A link to reset your password has been sent to the specified email'),
      );
    } else {
      throw new Error('The user with the specified email address is not registered');
    }
  } catch ({ message }) {
    yield put(passwordResetFailed(message));
  }
}

function* rootSaga(): SagaIterator {
  yield takeLatestAction<RequestToAuth['type']>('AUTH_PROCESS', auth);
  yield takeLatestAction<RequestToAuthWithGoogle['type']>('GOOGLE_AUTH_PROCESS', authWithGoogle);
  yield takeLatestAction<PreloadAuthData['type']>('PRELOAD_AUTH_DATA', prepareAuthData);
  yield takeLatestAction<LogoutProcess['type']>('AUTH_LOGOUT_PROCESS', logoutUser);
  yield takeLeadingAction<PasswordResetRequest['type']>('PASSWORD_RESET_PROCESS', passwordReset);
}

export { rootSaga };
