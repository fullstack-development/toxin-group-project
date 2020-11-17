import { SagaIterator } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { takeLatestAction, takeLeadingAction } from 'redux/action.model';
import {
  RoomsRequest,
  LoadBookedHistory,
  BookedHistoryList,
  BookCurrentRoom,
} from 'redux/Booking/model';
import { Dependencies } from 'redux/store.types';
import { Apartment, BookingData } from 'services/api/entities/types';

import { pendingStatusUpdate, setFailedStatus, setRooms, updateBookedHistory } from '../actions';

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
  const data: BookingData = {
    apartmentId,
    from: new Date(booked.from),
    to: new Date(booked.to),
    reservationBy: user,
  };

  yield call(api.booking.setBookedByUser, data);
}

function* rootSaga(deps: Dependencies): SagaIterator {
  yield takeLeadingAction<RoomsRequest['type']>('LOAD_ROOMS', loadRooms, deps);
  yield takeLatestAction<LoadBookedHistory['type']>('LOAD_BOOKED_HISTORY', loadRoomsHistory, deps);
  yield takeLatestAction<BookCurrentRoom['type']>('BOOK_ROOM', confirmBookedRoom, deps);
}

export { rootSaga };
