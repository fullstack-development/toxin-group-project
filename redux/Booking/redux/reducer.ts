import {
  ROOMS_REQUEST_PENDING,
  ROOMS_REQUEST_SUCCESS,
  ROOMS_REQUEST_FAILED,
  LOAD_ROOMS,
  UPDATE_BOOKED_HISTORY,
  LOAD_BOOKED_HISTORY,
} from '../constants';
import { BookingActions, BookingState } from '../model';

const initialState: BookingState = {
  isRequestSuccessful: true,
  isPending: false,
  rooms: [],
  error: null,
  bookedRooms: null,
};

const booking = (state: BookingState = initialState, action: BookingActions): BookingState => {
  switch (action.type) {
    case LOAD_ROOMS:
      return { ...state, rooms: [] };
    case ROOMS_REQUEST_PENDING:
      return {
        ...state,
        isPending: action.payload,
        error: null,
      };
    case ROOMS_REQUEST_SUCCESS:
      return {
        ...state,
        rooms: action.payload.map((room) => ({ ...room, number: room.id })),
        isPending: false,
        isRequestSuccessful: true,
      };
    case ROOMS_REQUEST_FAILED:
      return {
        ...state,
        isPending: false,
        isRequestSuccessful: false,
        error: action.payload,
      };
    case LOAD_BOOKED_HISTORY:
      return {
        ...state,
        isPending: true,
      };
    case UPDATE_BOOKED_HISTORY:
      return {
        ...state,
        isPending: false,
        bookedRooms: { ...action.payload },
      };
    default:
      return state;
  }
};

export default booking;
