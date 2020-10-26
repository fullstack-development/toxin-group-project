import { UPDATE_BOOKED_LIST, LOAD_ROOMS } from '../constants';
import { BookingState, BookedActions } from '../types';

const initialState: BookingState = {
  bookedRooms: null,
  isLoadingData: null,
};

const BookingReducer = (state = initialState, action: BookedActions): BookingState => {
  switch (action.type) {
    case LOAD_ROOMS:
      return {
        ...state,
        isLoadingData: true,
      };
    case UPDATE_BOOKED_LIST:
      return {
        ...state,
        isLoadingData: false,
        bookedRooms: { ...action.payload },
      };
    default:
      return state;
  }
};

export default BookingReducer;
