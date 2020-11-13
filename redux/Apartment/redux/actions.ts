import { GetRoomDetailsRequest } from '../model';

const getRoomDetails = (id: number): GetRoomDetailsRequest => ({
  type: 'GET_ROOM_DETAILS_PROCESS',
  payload: id,
});

export { getRoomDetails };
