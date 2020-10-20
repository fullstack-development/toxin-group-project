import { Props as RoomProps } from 'components/Room/Room.types';

export type Props = {
  isRequestSuccessful: boolean;
  isPending: boolean;
  rooms: RoomProps[];
  error: Error;
};

export type State = {
  bookingReducer: Props;
};
