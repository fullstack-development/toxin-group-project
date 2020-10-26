import { SagaIterator } from 'redux-saga';
import { takeLatest, call, put, CallEffect, PutEffect } from 'redux-saga/effects';

import Api from 'api/api';

import { LOAD_ROOMS, UPDATE_BOOKED_LIST } from '../../constants';
import { BookedList, UpdateBookedList } from '../../types';

function* loadRooms({
  payload,
}): Generator | CallEffect | Generator<PutEffect<UpdateBookedList>, void, never> {
  const result: BookedList = yield call(Api.booking.getBookedHistory, payload);

  yield put({
    type: UPDATE_BOOKED_LIST,
    payload: result,
  });
}

export function* rootSaga(): SagaIterator {
  yield takeLatest<never>(LOAD_ROOMS, loadRooms);
}
