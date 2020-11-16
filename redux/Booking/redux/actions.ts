import { Filters } from 'services/api/entities/types';

import {
  RoomsRequest,
  LoadBookedHistory,
  BookCurrentRoom,
  SelectedBookedRoom,
  BookingCanceled,
} from '../model';

const requestRooms = (options: Filters): RoomsRequest => ({
  type: 'LOAD_ROOMS',
  payload: options,
});

const loadBookedHistoryRooms = (email: string): LoadBookedHistory => ({
  type: 'LOAD_BOOKED_HISTORY',
  payload: email,
});

const bookRoom = (data: SelectedBookedRoom): BookCurrentRoom => ({
  type: 'BOOK_ROOM',
  payload: data,
});

const cancelBooking = (): BookingCanceled => ({
  type: 'BOOKING_CANCELED',
});

export { requestRooms, loadBookedHistoryRooms, bookRoom, cancelBooking };
