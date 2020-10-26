import { LOAD_ROOMS } from '../constants';
import { LoadRooms } from '../types';

const loadBookedRooms = (email: string): LoadRooms => ({ type: LOAD_ROOMS, payload: email });

export { loadBookedRooms };
