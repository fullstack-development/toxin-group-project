import firebase from 'firebase';
import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';

import api from 'api/api';

import {
  PASSWORD_UPDATE_PROCESS,
  PASSWORD_UPDATE_SUCCESS,
  PASSWORD_UPDATE_FAILED,
} from '../../constants';

function* startPasswordUpdateProcess({ payload: { user, currentPassword, newPassword } }) {
  try {
    const { email } = user;
    const userAuthInfo: string[] = yield api.auth.fetchSignInMethodsForEmail(email);
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
      default:
        yield put({
          type: PASSWORD_UPDATE_FAILED,
          payload: 'Произошла ошибка',
        });
    }
  }
}

function* rootSaga(): SagaIterator {
  yield takeLatest<never>(PASSWORD_UPDATE_PROCESS, startPasswordUpdateProcess);
}

export { rootSaga };
