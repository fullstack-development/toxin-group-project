import { BookingActions, BookingState } from '../model';

const initialState: BookingState = {
  isRequestSuccessful: true,
  isPending: false,
  rooms: [],
  error: null,
  bookedRooms: null,
  isBookingPending: false,
  isBookingSuccess: false,
  isBookingFailed: false,
  bookingStatusText: '',
};

const booking = (state: BookingState = initialState, action: BookingActions): BookingState => {
  switch (action.type) {
    case 'LOAD_ROOMS':
      return { ...state, rooms: [] };
    case 'ROOMS_REQUEST_PENDING':
      return {
        ...state,
        isPending: action.payload,
        error: null,
      };
    case 'ROOMS_REQUEST_SUCCESS':
      return {
        ...state,
        rooms: action.payload.map((room) => ({ ...room, number: room.id })),
        isPending: false,
        isRequestSuccessful: true,
      };
    case 'ROOMS_REQUEST_FAILED':
      return {
        ...state,
        isPending: false,
        isRequestSuccessful: false,
        error: action.payload,
      };
    case 'LOAD_BOOKED_HISTORY':
      return {
        ...state,
        isPending: true,
      };
    case 'UPDATE_BOOKED_HISTORY':
      return {
        ...state,
        isPending: false,
        bookedRooms: { ...action.payload },
      };
    case 'BOOK_ROOM': {
      return {
        ...state,
        isBookingPending: true,
        isBookingSuccess: false,
        isBookingFailed: false,
        bookingStatusText: '',
      };
    }
    case 'BOOKING_SUCCESS': {
      return {
        ...state,
        isBookingPending: false,
        isBookingSuccess: true,
        isBookingFailed: false,
        bookingStatusText: '',
      };
    }
    case 'BOOKING_FAILED': {
      return {
        ...state,
        isBookingPending: false,
        isBookingSuccess: false,
        isBookingFailed: true,
        bookingStatusText: action.payload,
      };
    }
    case 'BOOKING_CANCELED': {
      return {
        ...state,
        isBookingPending: false,
        isBookingSuccess: false,
        isBookingFailed: false,
        bookingStatusText: '',
      };
    }
    default:
      return state;
  }
};

export { booking };
