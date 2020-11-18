import { SagaIterator } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { takeLatestAction, takeLeadingAction } from 'redux/action.model';
import { Dependencies } from 'redux/api.model';
import { Apartment, BookingData } from 'services/api/entities/types';

import { RoomsRequest, BookedHistoryList, LoadBookedHistory, BookCurrentRoom } from '../../model';
import {
  pendingStatusUpdate,
  setRooms,
  setFailedStatus,
  updateBookedHistory,
  bookingSuccess,
  bookingFailed,
} from '../actions';

function* loadRooms({ api }: Dependencies, { payload }: RoomsRequest) {
  try {
    yield put(pendingStatusUpdate(true));

    const rooms: Apartment[] = yield call(api.booking.filterRooms, payload);

    yield put(setRooms(rooms));
  } catch (error) {
    yield put(setFailedStatus(error));
  } finally {
    yield put(pendingStatusUpdate(false));
  }
}

function* loadRoomsHistory({ api }: Dependencies, { payload }: LoadBookedHistory) {
  const bookedHistoryList: BookedHistoryList = yield call(api.booking.getBookedHistory, payload);

  yield put(updateBookedHistory(bookedHistoryList));
}

function* confirmBookedRoom({ api }: Dependencies, { payload }: BookCurrentRoom) {
  const { apartmentId, booked, user } = payload;
  try {
    if (!booked) throw new Error('Please select a booking date');
    const data: BookingData = {
      apartmentId,
      from: new Date(booked.from),
      to: new Date(booked.to),
      reservationBy: user,
    };

    yield call(api.booking.setBookedByUser, data);

    yield put(bookingSuccess());
  } catch ({ message }) {
    yield put(bookingFailed(message));
  }
}

function* rootSaga(deps: Dependencies): SagaIterator {
  yield takeLeadingAction<RoomsRequest['type']>('LOAD_ROOMS', loadRooms, deps);
  yield takeLatestAction<LoadBookedHistory['type']>('LOAD_BOOKED_HISTORY', loadRoomsHistory, deps);
  yield takeLatestAction<BookCurrentRoom['type']>('BOOK_ROOM', confirmBookedRoom, deps);
}

export { rootSaga };
