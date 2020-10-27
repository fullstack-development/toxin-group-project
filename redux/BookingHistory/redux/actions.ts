import { LOAD_ROOMS } from '../constants';
import { LoadBookedHistoryRooms } from '../types';

const loadBookedHistoryRooms = (email: string): LoadBookedHistoryRooms => ({
  type: LOAD_ROOMS,
  payload: email,
});

export { loadBookedHistoryRooms };
