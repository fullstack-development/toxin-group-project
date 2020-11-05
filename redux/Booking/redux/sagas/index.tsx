import { SagaIterator } from 'redux-saga';
import { put, takeLatest, call, PutEffect } from 'redux-saga/effects';

import Api from 'api/api';
import { Apartment } from 'api/entities/types';
import {
  RoomsRequest,
  LoadBookedHistory,
  BookedHistoryList,
  UpdateBookedHistory,
} from 'redux/Booking/types';

import {
  ROOMS_REQUEST_PENDING,
  ROOMS_REQUEST_SUCCESS,
  ROOMS_REQUEST_FAILED,
  LOAD_ROOMS,
  LOAD_BOOKED_HISTORY,
  UPDATE_BOOKED_HISTORY,
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

function* loadRoomsHistory({
  payload,
}: LoadBookedHistory): Generator | Generator<PutEffect<UpdateBookedHistory>, void, never> {
  const result: BookedHistoryList = yield call(Api.booking.getBookedHistory, payload);

  yield put({
    type: UPDATE_BOOKED_HISTORY,
    payload: result,
  });
}

export function* rootSaga(): SagaIterator {
  yield takeLatest(LOAD_ROOMS, loadRooms);
  yield takeLatest(LOAD_BOOKED_HISTORY, loadRoomsHistory);
}
