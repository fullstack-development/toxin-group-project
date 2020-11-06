import { Filters } from 'api/entities/types';

import { LOAD_ROOMS, LOAD_BOOKED_HISTORY, CONFIRM_BOOKED_ROOM } from '../constants';
import { RoomsRequest, LoadBookedHistory } from '../types';

const setBookedRoom = (data) => ({
  type: CONFIRM_BOOKED_ROOM,
  payload: data,
});

const requestRooms = (options: Filters): RoomsRequest => ({
  type: LOAD_ROOMS,
  payload: options,
});

const loadBookedHistoryRooms = (email: string): LoadBookedHistory => ({
  type: LOAD_BOOKED_HISTORY,
  payload: email,
});

export { requestRooms, loadBookedHistoryRooms, setBookedRoom };
