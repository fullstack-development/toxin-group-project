import { Filters } from 'api/entities/types';

import { Apartment } from '../../api/entities/types';
import {
  ROOMS_REQUEST_PENDING,
  ROOMS_REQUEST_SUCCESS,
  ROOMS_REQUEST_FAILED,
  LOAD_ROOMS,
} from './constants';

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

export type RoomsRequest = Action<typeof LOAD_ROOMS, Filters>;

export type PendingStatusUpdate = Action<typeof ROOMS_REQUEST_PENDING, boolean>;
export type SetRooms = Action<typeof ROOMS_REQUEST_SUCCESS, Apartment[]>;
export type SetFailedStatus = Action<typeof ROOMS_REQUEST_FAILED, Error>;

export type BookingState = {
  isPending: boolean;
  rooms: Apartment[];
  isRequestSuccessful: boolean;
  error: Error;
};

export type BookingActions = PendingStatusUpdate | SetRooms | SetFailedStatus | RoomsRequest;
