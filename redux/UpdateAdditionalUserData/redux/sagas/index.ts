import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import api from 'api/api';

import {
  UPDATE_ADDITIONAL_USER_DATA_PROCESS,
  UPDATE_ADDITIONAL_USER_DATA_SUCCESS,
  UPDATE_ADDITIONAL_USER_DATA_FAILED,
} from '../../constants';

function* startUpdateAdditionalUserDataProcess({ payload: { user, data } }) {
  try {
    yield call(api.auth.updateAdditionalUserInformation, user.uid, data);
    yield put({
      type: UPDATE_ADDITIONAL_USER_DATA_SUCCESS,
      payload: null,
    });
  } catch (err) {
    yield put({
      type: UPDATE_ADDITIONAL_USER_DATA_FAILED,
      payload: null,
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
