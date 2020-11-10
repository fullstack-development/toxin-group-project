import { GetRoomDetailsRequest } from '../model';

export const getRoomDetails = (id: number): GetRoomDetailsRequest => ({
  type: 'GET_ROOM_DETAILS_PROCESS',
  payload: id,
});
