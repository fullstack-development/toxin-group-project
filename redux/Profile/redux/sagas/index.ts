import firebase from 'firebase';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLeading } from 'redux-saga/effects';

import api from 'api/api';

import {
  EMAIL_UPDATE_PROCESS,
  EMAIL_UPDATE_SUCCESS,
  EMAIL_UPDATE_FAILED,
  GET_ADDITIONAL_USER_DATA_PROCESS,
  GET_ADDITIONAL_USER_DATA_SUCCESS,
  GET_ADDITIONAL_USER_DATA_FAILED,
  PASSWORD_UPDATE_PROCESS,
  PASSWORD_UPDATE_SUCCESS,
  PASSWORD_UPDATE_FAILED,
  UPDATE_ADDITIONAL_USER_DATA_PROCESS,
  UPDATE_ADDITIONAL_USER_DATA_SUCCESS,
  UPDATE_ADDITIONAL_USER_DATA_FAILED,
  USERNAME_UPDATE_PROCESS,
  USERNAME_UPDATE_SUCCESS,
  USERNAME_UPDATE_FAILED,
} from '../../constants';

const getEmailUpdateErrorMessage = ({ code }) => {
  switch (code) {
    case 'auth/invalid-email':
      return 'Указан недействительный адрес электронной почты';
    case 'auth/email-already-in-use':
      return 'Указанный адрес электронной почты уже используется';
    case 'auth/requires-recent-login':
      return 'Для изменения адреса электронной почты пройдите повторную аутентификацию';
    default:
      return 'Произошла ошибка повторите попытку позже';
  }
};

function* emailUpdate({ payload }) {
  try {
    const { user, email } = payload;

    yield user.verifyBeforeUpdateEmail(email);

    yield put({
      type: EMAIL_UPDATE_SUCCESS,
      payload: `Подтверждение адреса электронной почты было отправлено на ${email}`,
    });
  } catch (err) {
    yield put({
      type: EMAIL_UPDATE_FAILED,
      payload: getEmailUpdateErrorMessage(err),
    });
  }
}

const getPasswordUpdateErrorMessage = ({ code, message }) => {
  switch (code) {
    case 'auth/wrong-password':
      return 'Неверный пароль';
    case 'auth/user-mismatch':
      return 'Полученные учетные данные не соответствуют текущему пользователю';
    case 'passwords-do-not-match':
      return 'Пароли не совпадают';
    default:
      if (message === 'Пароли не совпадают') return message;
      return 'Произошла ошибка';
  }
};

function* passwordUpdate({ payload: { user, currentPassword, newPassword, confirmPassword } }) {
  try {
    if (newPassword !== confirmPassword) throw new Error('Пароли не совпадают');

    const { email } = user;
    const userAuthInfo: string[] = yield call(api.auth.fetchSignInMethodsForEmail, email);
    const isEmailAuth = userAuthInfo.includes('password');
    const isGoogleAuth = userAuthInfo.includes('google.com');

    if (isEmailAuth) {
      const credential = firebase.auth.EmailAuthProvider.credential(email, currentPassword);
      yield user.reauthenticateWithCredential(credential);
    } else if (isGoogleAuth) {
      yield user.reauthenticateWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    yield user.updatePassword(newPassword);

    yield put({
      type: PASSWORD_UPDATE_SUCCESS,
      payload: 'Пароль успешно изменен',
    });
  } catch (err) {
    yield put({
      type: PASSWORD_UPDATE_FAILED,
      payload: getPasswordUpdateErrorMessage(err),
    });
  }
}

function* updateAdditionalUserData({ payload: { user, data } }) {
  try {
    const isDocument = yield call(api.auth.getAdditionalUserInformation, user.uid);
    if (isDocument) {
      yield call(api.auth.updateAdditionalUserInformation, user.uid, data);
    } else {
      yield call(api.auth.addAdditionalUserInformation, user.uid, data);
    }
    yield put({
      type: UPDATE_ADDITIONAL_USER_DATA_SUCCESS,
      payload: 'Данные были успешно обновлены',
    });
  } catch (err) {
    yield put({
      type: UPDATE_ADDITIONAL_USER_DATA_FAILED,
      payload: 'Произошла ошибка повторите попытку позже',
    });
  }
}

function* usernameUpdate({ payload }) {
  try {
    const { user, displayName } = payload;

    yield user.updateProfile({ displayName });

    yield put({
      type: USERNAME_UPDATE_SUCCESS,
      payload: 'Данные были успешно обновлены',
    });
  } catch (err) {
    yield put({
      type: USERNAME_UPDATE_FAILED,
      payload: 'Произошла ошибка повторите попытку позже',
    });
  }
}

function* getAdditionalUserData({ payload: user }) {
  try {
    const additionalUserData = yield call(api.auth.getAdditionalUserInformation, user.uid);
    yield put({
      type: GET_ADDITIONAL_USER_DATA_SUCCESS,
      payload: additionalUserData,
    });
  } catch (err) {
    yield put({
      type: GET_ADDITIONAL_USER_DATA_FAILED,
      payload: null,
    });
  }
}

function* rootSaga(): SagaIterator {
  yield takeLeading<never>(EMAIL_UPDATE_PROCESS, emailUpdate);
  yield takeLeading<never>(GET_ADDITIONAL_USER_DATA_PROCESS, getAdditionalUserData);
  yield takeLeading<never>(PASSWORD_UPDATE_PROCESS, passwordUpdate);
  yield takeLeading<never>(UPDATE_ADDITIONAL_USER_DATA_PROCESS, updateAdditionalUserData);
  yield takeLeading<never>(USERNAME_UPDATE_PROCESS, usernameUpdate);
}

export { rootSaga };
