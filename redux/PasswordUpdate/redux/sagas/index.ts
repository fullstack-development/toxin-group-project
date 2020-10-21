import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';

import {
  PASSWORD_UPDATE_PROCESS,
  PASSWORD_UPDATE_SUCCESS,
  PASSWORD_UPDATE_FAILED,
} from '../../constants';

function* startPasswordUpdateProcess({ payload }) {
  try {
    const { user, password } = payload;

    yield user.updatePassword(password);
    yield put({
      type: PASSWORD_UPDATE_SUCCESS,
      payload,
    });
  } catch (err) {
    yield put({
      type: PASSWORD_UPDATE_FAILED,
      payload,
    });
  }
}

function* rootSaga(): SagaIterator {
  yield takeLatest<never>(PASSWORD_UPDATE_PROCESS, startPasswordUpdateProcess);
}

export { rootSaga };
