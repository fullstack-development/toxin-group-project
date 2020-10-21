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
      payload,
    });
  } catch (err) {
    yield put({
      type: EMAIL_UPDATE_FAILED,
      payload,
    });
  }
}

function* rootSaga(): SagaIterator {
  yield takeLatest<never>(EMAIL_UPDATE_PROCESS, startEmailUpdateProcess);
}

export { rootSaga };
