import { BookedRoom } from 'api/entities/types';

import { UPDATE_BOOKED_LIST, LOAD_ROOMS } from './constants';

export type Action<Z, T> = {
  type: Z;
  payload?: T;
};

export type BookedList = { current: BookedRoom[]; history: BookedRoom[] };

export type BookingState = {
  bookedRooms: BookedList;
  isLoadingData: boolean;
};

export type UpdateBookedList = Action<typeof UPDATE_BOOKED_LIST, BookedList>;

export type LoadRooms = Action<typeof LOAD_ROOMS, string>;

export type BookedActions = UpdateBookedList | LoadRooms;
