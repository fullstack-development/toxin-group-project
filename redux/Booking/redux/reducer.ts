import { UPDATE_BOOKED_LIST } from '../constants';
import { BookingState, BookedActions } from '../types';

const initialState: BookingState = {
  bookedRooms: null,
};

const BookingReducer = (state = initialState, action: BookedActions): BookingState => {
  switch (action.type) {
    case UPDATE_BOOKED_LIST:
      return {
        ...state,
        bookedRooms: { ...action.payload },
      };
    default:
      return state;
  }
};

export default BookingReducer;
