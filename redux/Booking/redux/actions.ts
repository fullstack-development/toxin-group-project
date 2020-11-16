import { Apartment, Filters } from 'services/api/entities/types';

import {
  RoomsRequest,
  PendingStatusUpdate,
  SetRooms,
  SetFailedStatus,
  BookedHistoryList,
  LoadBookedHistory,
  UpdateBookedHistory,
  SelectedBookedRoom,
  BookCurrentRoom,
  BookingSuccess,
  BookingFailed,
  BookingCanceled,
} from '../model';

const requestRooms = (options: Filters): RoomsRequest => ({
  type: 'LOAD_ROOMS',
  payload: options,
});

const pendingStatusUpdate = (value: boolean): PendingStatusUpdate => ({
  type: 'ROOMS_REQUEST_PENDING',
  payload: value,
});

const setRooms = (data: Apartment[]): SetRooms => ({
  type: 'ROOMS_REQUEST_SUCCESS',
  payload: data,
});

const setFailedStatus = (error: Error): SetFailedStatus => ({
  type: 'ROOMS_REQUEST_FAILED',
  payload: error,
});

const loadBookedHistoryRooms = (email: string): LoadBookedHistory => ({
  type: 'LOAD_BOOKED_HISTORY',
  payload: email,
});

const updateBookedHistory = (data: BookedHistoryList): UpdateBookedHistory => ({
  type: 'UPDATE_BOOKED_HISTORY',
  payload: data,
});

const bookRoom = (data: SelectedBookedRoom): BookCurrentRoom => ({
  type: 'BOOK_ROOM',
  payload: data,
});

const bookingSuccess = (): BookingSuccess => ({
  type: 'BOOKING_SUCCESS',
});

const bookingFailed = (statusText: string): BookingFailed => ({
  type: 'BOOKING_FAILED',
  payload: statusText,
});

const cancelBooking = (): BookingCanceled => ({
  type: 'BOOKING_CANCELED',
});

export {
  requestRooms,
  pendingStatusUpdate,
  setRooms,
  setFailedStatus,
  loadBookedHistoryRooms,
  updateBookedHistory,
  bookRoom,
  bookingSuccess,
  bookingFailed,
  cancelBooking,
};
