import Room from 'components/Room/Room';
import TextButton from 'components/TextButton/TextButton';

import { RoomProps } from '../Room/Room.types';
import * as S from './Rooms.styles';

export type RoomsProps = {
  rooms: RoomProps[];
};

const Rooms: React.FC<RoomsProps> = ({ rooms }: RoomsProps) => (
  <S.Rooms>
    <S.RoomsGrid>
      {rooms.map((room) => (
        <S.RoomItem key={room.number}>
          <Room {...room} />
        </S.RoomItem>
      ))}
    </S.RoomsGrid>

    <TextButton isSecondary isLink={false}>
      Показать еще
    </TextButton>
  </S.Rooms>
);

export default Rooms;
