import { BookedRoom } from 'api/entities/types';

import { UPDATE_BOOKED_LIST, LOAD_ROOMS } from './constants';

export type Action<Z, T> = {
  type: Z;
  payload?: T;
};

export type BookedHistoryList = { current: BookedRoom[]; history: BookedRoom[] };

export type BookedHistoryState = {
  bookedRooms: BookedHistoryList;
  isLoadingData: boolean;
};

export type UpdateBookedHistoryList = Action<typeof UPDATE_BOOKED_LIST, BookedHistoryList>;

export type LoadBookedHistoryRooms = Action<typeof LOAD_ROOMS, string>;

export type BookedHistoryActions = UpdateBookedHistoryList | LoadBookedHistoryRooms;
