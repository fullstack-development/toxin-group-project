import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';

import {
  USERNAME_UPDATE_PROCESS,
  USERNAME_UPDATE_SUCCESS,
  USERNAME_UPDATE_FAILED,
} from '../../constants';

function* startUsernameUpdateProcess({ payload }) {
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

function* rootSaga(): SagaIterator {
  yield takeLatest<never>(USERNAME_UPDATE_PROCESS, startUsernameUpdateProcess);
}

export { rootSaga };
