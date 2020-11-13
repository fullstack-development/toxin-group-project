import { Filters } from 'services/api/entities/types';

import { RoomsRequest, LoadBookedHistory, BookCurrentRoom, SelectedBookedRoom } from '../model';

const bookRoom = (data: SelectedBookedRoom): BookCurrentRoom => ({
  type: 'BOOK_ROOM',
  payload: data,
});

const requestRooms = (options: Filters): RoomsRequest => ({
  type: 'LOAD_ROOMS',
  payload: options,
});

const loadBookedHistoryRooms = (email: string): LoadBookedHistory => ({
  type: 'LOAD_BOOKED_HISTORY',
  payload: email,
});

export { bookRoom, requestRooms, loadBookedHistoryRooms };
