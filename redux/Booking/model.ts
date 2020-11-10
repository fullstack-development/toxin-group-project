import { Filters, BookedRoom } from 'api/entities/types';
import { Props as RoomProps } from 'components/Room/Room.types';
import { ActionPayload } from 'redux/action.model';

import { Apartment } from '../../api/entities/types';

export type SelectedBookedRoom = {
  apartmentId: number;
  booked: { from: Date; to: Date };
  totalPrice: number;
  user: string;
};

export type BookedHistoryList = { current: BookedRoom[]; history: BookedRoom[] };

export type RoomsRequest = ActionPayload<'LOAD_ROOMS', Filters>;
export type PendingStatusUpdate = ActionPayload<'ROOMS_REQUEST_PENDING', boolean>;
export type SetRooms = ActionPayload<'ROOMS_REQUEST_SUCCESS', Apartment[]>;
export type SetFailedStatus = ActionPayload<'ROOMS_REQUEST_FAILED', Error>;
export type LoadBookedHistory = ActionPayload<'LOAD_BOOKED_HISTORY', string>;
export type UpdateBookedHistory = ActionPayload<'UPDATE_BOOKED_HISTORY', BookedHistoryList>;
export type BookCurrentRoom = ActionPayload<'BOOK_ROOM', SelectedBookedRoom>;

export type BookingState = {
  isPending: boolean;
  rooms: RoomProps[];
  isRequestSuccessful: boolean;
  error: Error;
  bookedRooms: BookedHistoryList;
};

export type BookingActions =
  | PendingStatusUpdate
  | SetRooms
  | SetFailedStatus
  | RoomsRequest
  | UpdateBookedHistory
  | LoadBookedHistory;
