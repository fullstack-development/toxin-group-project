import { Props as RoomProps } from 'components/Room/Room.types';

export type MapStateProps = {
  isRequestSuccessful: boolean;
  isPending: boolean;
  rooms: RoomProps[];
  error: Error;
};

export type State = {
  bookingReducer: MapStateProps;
};
