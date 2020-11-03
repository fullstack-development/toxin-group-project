import { Filters } from 'services/api/entities/types';

import { LOAD_ROOMS, LOAD_BOOKED_HISTORY } from '../constants';
import { RoomsRequest, LoadBookedHistory } from '../types';

const requestRooms = (options: Filters): RoomsRequest => ({
  type: LOAD_ROOMS,
  payload: options,
});

const loadBookedHistoryRooms = (email: string): LoadBookedHistory => ({
  type: LOAD_BOOKED_HISTORY,
  payload: email,
});

export { requestRooms, loadBookedHistoryRooms };
