import { Action, ActionPayload } from 'redux/action.model';
import { Apartment } from 'shared/model';

type ApartmentState = {
  isGetRoomDetailsPending: boolean;
  roomDetails: Apartment | null;
};

type GetRoomDetailsRequest = ActionPayload<'GET_ROOM_DETAILS_PROCESS', number>;
type GetRoomDetailsSuccess = ActionPayload<'GET_ROOM_DETAILS_SUCCESS', Apartment>;
type GetRoomDetailsFailed = Action<'GET_ROOM_DETAILS_FAILED'>;

type ApartmentActions = GetRoomDetailsRequest | GetRoomDetailsSuccess | GetRoomDetailsFailed;

export type {
  ApartmentState,
  GetRoomDetailsRequest,
  GetRoomDetailsSuccess,
  GetRoomDetailsFailed,
  ApartmentActions,
};
