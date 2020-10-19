import { SagaIterator } from 'redux-saga';
import { put, takeLatest, call } from 'redux-saga/effects';

import api from 'api/api';

import { PROCESS, SUCCESS, FAILED } from '../../constants';

function* startProcess({ payload: email }: { payload: string }) {
  try {
    const userInfo: string[] = yield call(api.auth.fetchSignInMethodsForEmail, email);
    const isRegister = userInfo.some((value) => value === 'password');
    if (isRegister) {
      yield call(api.auth.resetPassword, email);
      yield put({
        type: SUCCESS,
        payload: `Ссылка для восстановления пароля была отправлена на ${email}`,
      });
    } else {
      throw new Error('Пользователь с указанным электронным адресом не зарегистрирован');
    }
  } catch (err) {
    yield put({
      type: FAILED,
      payload:
        err.message === 'Пользователь с указанным электронным адресом не зарегистрирован'
          ? err.message
          : 'Произошла ошибка повторите попытку позже',
    });
  }
}

export function* rootSaga(): SagaIterator {
  yield takeLatest<never>(PROCESS, startProcess);
}
