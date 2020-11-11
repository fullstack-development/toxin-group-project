import { Filters } from 'services/api/entities/types';

import { RoomsRequest, LoadBookedHistory, BookCurrentRoom, SelectedBookedRoom } from '../model';

export const bookRoom = (data: SelectedBookedRoom): BookCurrentRoom => ({
  type: 'BOOK_ROOM',
  payload: data,
});

export const requestRooms = (options: Filters): RoomsRequest => ({
  type: 'LOAD_ROOMS',
  payload: options,
});

export const loadBookedHistoryRooms = (email: string): LoadBookedHistory => ({
  type: 'LOAD_BOOKED_HISTORY',
  payload: email,
});
