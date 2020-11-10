import { ApartmentState, ApartmentActions } from '../model';

const initialState: ApartmentState = {
  isGetRoomDetailsPending: false,
  roomDetails: null,
};

export const apartment = (
  state: ApartmentState = initialState,
  actions: ApartmentActions,
): ApartmentState => {
  switch (actions.type) {
    case 'GET_ROOM_DETAILS_PROCESS':
      return {
        ...state,
        isGetRoomDetailsPending: true,
        roomDetails: null,
      };
    case 'GET_ROOM_DETAILS_SUCCESS':
      return {
        ...state,
        isGetRoomDetailsPending: false,
        roomDetails: actions.payload,
      };
    case 'GET_ROOM_DETAILS_FAILED':
      return {
        ...state,
        isGetRoomDetailsPending: false,
        roomDetails: null,
      };
    default:
      return state;
  }
};
