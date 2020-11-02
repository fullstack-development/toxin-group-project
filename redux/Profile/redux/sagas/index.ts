import firebase from 'firebase';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

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

function* emailUpdate({ payload }) {
  try {
    const { user, email } = payload;

    yield user.verifyBeforeUpdateEmail(email);

    yield put({
      type: EMAIL_UPDATE_SUCCESS,
      payload: `Подтверждение адреса электронной почты было отправлено на ${email}`,
    });
  } catch (err) {
    switch (err.code) {
      case 'auth/invalid-email':
        yield put({
          type: EMAIL_UPDATE_FAILED,
          payload: 'Указан недействительный адрес электронной почты',
        });
        break;
      case 'auth/email-already-in-use':
        yield put({
          type: EMAIL_UPDATE_FAILED,
          payload: 'Указанный адрес электронной почты уже используется',
        });
        break;
      case 'auth/requires-recent-login':
        yield put({
          type: EMAIL_UPDATE_FAILED,
          payload: 'Для изменения адреса электронной почты пройдите повторную аутентификацию',
        });
        break;
      default: {
        yield put({
          type: EMAIL_UPDATE_FAILED,
          payload: 'Произошла ошибка повторите попытку позже',
        });
      }
    }
  }
}

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
    switch (err.code) {
      case 'auth/wrong-password':
        yield put({
          type: PASSWORD_UPDATE_FAILED,
          payload: 'Неверный пароль',
        });
        break;
      case 'auth/user-mismatch':
        yield put({
          type: PASSWORD_UPDATE_FAILED,
          payload: 'Полученные учетные данные не соответствуют текущему пользователю',
        });
        break;
      case 'passwords-do-not-match':
        yield put({
          type: PASSWORD_UPDATE_FAILED,
          payload: 'Пароли не совпадают',
        });
        break;
      default:
        if (err.message === 'Пароли не совпадают') {
          yield put({
            type: PASSWORD_UPDATE_FAILED,
            payload: err.message,
          });
        } else {
          yield put({
            type: PASSWORD_UPDATE_FAILED,
            payload: 'Произошла ошибка',
          });
        }
    }
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
      payload: null,
    });
  } catch (err) {
    yield put({
      type: UPDATE_ADDITIONAL_USER_DATA_FAILED,
      payload: null,
    });
  }
}

function* usernameUpdate({ payload }) {
  try {
    const { user, displayName } = payload;

    yield user.updateProfile({ displayName });

    yield put({
      type: USERNAME_UPDATE_SUCCESS,
      payload,
    });
  } catch (err) {
    yield put({
      type: USERNAME_UPDATE_FAILED,
      payload,
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
  yield takeLatest<never>(EMAIL_UPDATE_PROCESS, emailUpdate);
  yield takeLatest<never>(GET_ADDITIONAL_USER_DATA_PROCESS, getAdditionalUserData);
  yield takeLatest<never>(PASSWORD_UPDATE_PROCESS, passwordUpdate);
  yield takeLatest<never>(UPDATE_ADDITIONAL_USER_DATA_PROCESS, updateAdditionalUserData);
  yield takeLatest<never>(USERNAME_UPDATE_PROCESS, usernameUpdate);
}

export { rootSaga };
