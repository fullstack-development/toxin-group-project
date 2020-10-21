import firebase from 'firebase';
import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';

import {
  PASSWORD_UPDATE_PROCESS,
  PASSWORD_UPDATE_SUCCESS,
  PASSWORD_UPDATE_FAILED,
} from '../../constants';

function* startPasswordUpdateProcess({ payload }) {
  try {
    const { user, currentPassword, newPassword } = payload;
    const credential = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);

    yield user.reauthenticateWithCredential(credential);
    yield user.updatePassword(newPassword);
    yield put({
      type: PASSWORD_UPDATE_SUCCESS,
      payload: 'Пароль успешно изменен',
    });
  } catch (err) {
    yield put({
      type: PASSWORD_UPDATE_FAILED,
      payload:
        err.code === 'auth/wrong-password'
          ? 'Неверный пароль'
          : 'Произошла ошибка повторите попытку позже',
    });
  }
}

function* rootSaga(): SagaIterator {
  yield takeLatest<never>(PASSWORD_UPDATE_PROCESS, startPasswordUpdateProcess);
}

export { rootSaga };
