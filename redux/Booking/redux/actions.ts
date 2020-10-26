import { Filters } from 'api/entities/types';

import { LOAD_ROOMS } from '../constants';
import { RoomsRequest } from '../types';

const requestRooms = (options: Filters): RoomsRequest => ({
  type: LOAD_ROOMS,
  payload: options,
});

export { requestRooms };
