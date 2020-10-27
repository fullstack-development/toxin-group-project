import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';

import {
  GET_ADDITIONAL_USER_DATA_PROCESS,
  GET_ADDITIONAL_USER_DATA_SUCCESS,
  GET_ADDITIONAL_USER_DATA_FAILED,
} from '../../constants';

function* startGetAdditionalUserDataProcess({ payload }) {
  try {
    yield put({
      type: GET_ADDITIONAL_USER_DATA_SUCCESS,
      payload,
    });
  } catch (err) {
    yield put({
      type: GET_ADDITIONAL_USER_DATA_FAILED,
      payload,
    });
  }
}

function* rootSaga(): SagaIterator {
  yield takeLatest<never>(GET_ADDITIONAL_USER_DATA_PROCESS, startGetAdditionalUserDataProcess);
}

export { rootSaga };
