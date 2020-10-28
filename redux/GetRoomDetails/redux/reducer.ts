import {
  GET_ROOM_DETAILS_PROCESS,
  GET_ROOM_DETAILS_SUCCESS,
  GET_ROOM_DETAILS_FAILED,
} from '../constants';
import { GetRoomDetailsState, GetRoomDetailsActions } from '../types';

const initialState: GetRoomDetailsState = {
  roomDetails: null,
};

const getRoomDetails = (
  state: GetRoomDetailsState = initialState,
  actions: GetRoomDetailsActions,
): GetRoomDetailsState => {
  switch (actions.type) {
    case GET_ROOM_DETAILS_PROCESS:
      return {
        roomDetails: null,
      };
    case GET_ROOM_DETAILS_SUCCESS:
      return {
        roomDetails: actions.payload,
      };
    case GET_ROOM_DETAILS_FAILED:
      return {
        roomDetails: null,
      };
    default:
      return state;
  }
};

export { getRoomDetails };
