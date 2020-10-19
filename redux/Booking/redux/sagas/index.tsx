import { SagaIterator } from 'redux-saga';
import { put, takeLatest, call, PutEffect } from 'redux-saga/effects';

import Api from 'api/api';
import { Apartment } from 'api/entities/types';
import { RoomsRequest } from 'redux/Booking/types';

import {
  ROOMS_REQUEST_PENDING,
  ROOMS_REQUEST_SUCCESS,
  ROOMS_REQUEST_FAILED,
  LOAD_ROOMS,
} from '../../constants';

function* loadRooms(
  action: RoomsRequest,
): Generator | Generator<PutEffect<RoomsRequest>, void, never> {
  try {
    yield put({
      type: ROOMS_REQUEST_PENDING,
      payload: true,
    });

    const rooms: Apartment[] = yield call(Api.booking.filterRooms, action.payload);
    yield put({
      type: ROOMS_REQUEST_SUCCESS,
      payload: rooms,
    });
  } catch (error) {
    yield put({
      type: ROOMS_REQUEST_FAILED,
      payload: error,
    });
  } finally {
    yield put({
      type: ROOMS_REQUEST_PENDING,
      payload: false,
    });
  }
}

export function* rootSaga(): SagaIterator {
  yield takeLatest<never>(LOAD_ROOMS, loadRooms);
}
