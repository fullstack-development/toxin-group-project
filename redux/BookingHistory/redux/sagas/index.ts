import { SagaIterator } from 'redux-saga';
import { takeLatest, call, put, CallEffect, PutEffect } from 'redux-saga/effects';

import Api from 'api/api';

import { LOAD_ROOMS, UPDATE_BOOKED_LIST } from '../../constants';
import { BookedHistoryList, UpdateBookedHistoryList } from '../../types';

function* loadRooms({
  payload,
}): Generator | CallEffect | Generator<PutEffect<UpdateBookedHistoryList>, void, never> {
  const result: BookedHistoryList = yield call(Api.booking.getBookedHistory, payload);

  yield put({
    type: UPDATE_BOOKED_LIST,
    payload: result,
  });
}

export function* rootSaga(): SagaIterator {
  yield takeLatest<never>(LOAD_ROOMS, loadRooms);
}
