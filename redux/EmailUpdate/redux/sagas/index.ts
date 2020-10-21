import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';

import { EMAIL_UPDATE_PROCESS, EMAIL_UPDATE_SUCCESS, EMAIL_UPDATE_FAILED } from '../../constants';

function* startEmailUpdateProcess({ payload }) {
  try {
    const { user, email } = payload;

    yield user.updateEmail(email);
    yield user.sendEmailVerification();

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
          payload:
            'Для изменения адреса электронной почты пройдите пройдите повторную аутентификацию',
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

function* rootSaga(): SagaIterator {
  yield takeLatest<never>(EMAIL_UPDATE_PROCESS, startEmailUpdateProcess);
}

export { rootSaga };
