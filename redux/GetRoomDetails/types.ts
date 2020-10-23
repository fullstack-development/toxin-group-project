import { Apartment } from 'api/entities/types';

import {
  GET_ROOM_DETAILS_PROCESS,
  GET_ROOM_DETAILS_SUCCESS,
  GET_ROOM_DETAILS_FAILED,
} from './constants';

type Action<Z, T> = {
  type: Z;
  payload?: T;
};

type GetRoomDetailsState = {
  roomDetails: Apartment | null;
};

type GetRoomDetailsRequest = Action<typeof GET_ROOM_DETAILS_PROCESS, number | string>;
type GetRoomDetailsSuccess = Action<typeof GET_ROOM_DETAILS_SUCCESS, Apartment>;
type GetRoomDetailsFailed = Action<typeof GET_ROOM_DETAILS_FAILED, null>;

type GetRoomDetailsActions = GetRoomDetailsRequest | GetRoomDetailsSuccess | GetRoomDetailsFailed;

export type {
  GetRoomDetailsState,
  GetRoomDetailsRequest,
  GetRoomDetailsSuccess,
  GetRoomDetailsFailed,
  GetRoomDetailsActions,
};
