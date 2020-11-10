import { Apartment } from 'api/entities/types';
import { Action, ActionPayload } from 'redux/action.model';

export type ApartmentState = {
  isGetRoomDetailsPending: boolean;
  roomDetails: Apartment | null;
};

export type GetRoomDetailsRequest = ActionPayload<'GET_ROOM_DETAILS_PROCESS', number>;
export type GetRoomDetailsSuccess = ActionPayload<'GET_ROOM_DETAILS_SUCCESS', Apartment>;
export type GetRoomDetailsFailed = Action<'GET_ROOM_DETAILS_FAILED'>;

export type ApartmentActions = GetRoomDetailsRequest | GetRoomDetailsSuccess | GetRoomDetailsFailed;
