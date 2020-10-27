import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';

import {
  UPDATE_ADDITIONAL_USER_DATA_PROCESS,
  UPDATE_ADDITIONAL_USER_DATA_SUCCESS,
  UPDATE_ADDITIONAL_USER_DATA_FAILED,
} from '../../constants';

function* startUpdateAdditionalUserDataProcess({ payload }) {
  try {
    yield put({
      type: UPDATE_ADDITIONAL_USER_DATA_SUCCESS,
      payload,
    });
  } catch (err) {
    yield put({
      type: UPDATE_ADDITIONAL_USER_DATA_FAILED,
      payload,
    });
  }
}

function* rootSaga(): SagaIterator {
  yield takeLatest<never>(
    UPDATE_ADDITIONAL_USER_DATA_PROCESS,
    startUpdateAdditionalUserDataProcess,
  );
}

export { rootSaga };
