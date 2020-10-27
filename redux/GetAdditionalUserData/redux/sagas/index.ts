import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import api from 'api/api';

import {
  GET_ADDITIONAL_USER_DATA_PROCESS,
  GET_ADDITIONAL_USER_DATA_SUCCESS,
  GET_ADDITIONAL_USER_DATA_FAILED,
} from '../../constants';

function* startGetAdditionalUserDataProcess({ payload: user }) {
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
  yield takeLatest<never>(GET_ADDITIONAL_USER_DATA_PROCESS, startGetAdditionalUserDataProcess);
}

export { rootSaga };
