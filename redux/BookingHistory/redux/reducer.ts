import { UPDATE_BOOKED_LIST, LOAD_ROOMS } from '../constants';
import { BookedHistoryState, BookedHistoryActions } from '../types';

const initialState: BookedHistoryState = {
  bookedRooms: null,
  isLoadingData: null,
};

const BookedHistoryReducer = (
  state = initialState,
  action: BookedHistoryActions,
): BookedHistoryState => {
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

export default BookedHistoryReducer;
