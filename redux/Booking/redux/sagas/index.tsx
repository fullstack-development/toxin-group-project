import { SagaIterator } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { takeLatestAction, takeLeadingAction } from 'redux/action.model';
import {
  RoomsRequest,
  LoadBookedHistory,
  BookedHistoryList,
  BookCurrentRoom,
} from 'redux/Booking/model';
import Api from 'services/api/api';
import { Apartment, BookingData } from 'services/api/entities/types';

import { pendingStatusUpdate, setFailedStatus, setRooms, updateBookedHistory } from '../actions';

function* loadRooms(action: RoomsRequest) {
  try {
    yield put(pendingStatusUpdate(true));

    const rooms: Apartment[] = yield call(Api.booking.filterRooms, action.payload);
    yield put(setRooms(rooms));
  } catch (error) {
    yield put(setFailedStatus(error));
  } finally {
    yield put(pendingStatusUpdate(false));
  }
}

function* loadRoomsHistory({ payload }: LoadBookedHistory) {
  const bookedHistoryList: BookedHistoryList = yield call(Api.booking.getBookedHistory, payload);

  yield put(updateBookedHistory(bookedHistoryList));
}

function* confirmBookedRoom({ payload }: BookCurrentRoom) {
  const { apartmentId, booked, user } = payload;
  try {
    if (!booked) throw new Error('Please select a booking date');
    const data: BookingData = {
      apartmentId,
      from: new Date(booked.from),
      to: new Date(booked.to),
      reservationBy: user,
    };

    yield call(Api.booking.setBookedByUser, data);

    yield put({
      type: 'BOOKING_SUCCESS',
    });
  } catch ({ message }) {
    yield put({
      type: 'BOOKING_FAILED',
      payload: message,
    });
  }
}

function* rootSaga(): SagaIterator {
  yield takeLeadingAction<RoomsRequest['type']>('LOAD_ROOMS', loadRooms);
  yield takeLatestAction<LoadBookedHistory['type']>('LOAD_BOOKED_HISTORY', loadRoomsHistory);
  yield takeLatestAction<BookCurrentRoom['type']>('BOOK_ROOM', confirmBookedRoom);
}

export { rootSaga };
