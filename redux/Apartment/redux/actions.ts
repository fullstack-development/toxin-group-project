import { GET_ROOM_DETAILS_PROCESS } from '../constants';
import { GetRoomDetailsRequest } from '../types';

const getRoomDetailsRequest = (id: number | string): GetRoomDetailsRequest => ({
  type: GET_ROOM_DETAILS_PROCESS,
  payload: id,
});

export { getRoomDetailsRequest };
