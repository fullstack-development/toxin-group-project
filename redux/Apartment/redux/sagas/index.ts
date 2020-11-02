import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import api from 'api/api';
import { Apartment } from 'api/entities/types';

import {
  GET_ROOM_DETAILS_PROCESS,
  GET_ROOM_DETAILS_SUCCESS,
  GET_ROOM_DETAILS_FAILED,
} from '../../constants';

function* getRoomDetails({ payload: id }) {
  try {
    const roomDetails: Apartment = yield call(api.apartments.load, id);
    yield put({
      type: GET_ROOM_DETAILS_SUCCESS,
      payload: roomDetails,
    });
  } catch (err) {
    yield put({
      type: GET_ROOM_DETAILS_FAILED,
      payload: id,
    });
  }
}

function* rootSaga(): SagaIterator {
  yield takeLatest<never>(GET_ROOM_DETAILS_PROCESS, getRoomDetails);
}

export { rootSaga };
