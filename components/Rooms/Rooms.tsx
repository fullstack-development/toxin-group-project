import { useState } from 'react';

import Room from 'components/Room/Room';

import { RoomProps } from '../Room/Room.types';
import * as S from './Rooms.styles';

export type RoomsProps = {
  rooms: RoomProps[];
};

const DEFAULT_COUNT = 12;

const Rooms: React.FC<RoomsProps> = ({ rooms }: RoomsProps) => {
  const [visibleRoomsCount, setVisibleRoomsCount] = useState(DEFAULT_COUNT);
  const handleMoreButtonClick = () => {
    setVisibleRoomsCount((count) => count + DEFAULT_COUNT);
  };

  return (
    <S.Rooms>
      <S.RoomsGrid>
        {rooms.slice(0, visibleRoomsCount).map((room) => (
          <S.RoomItem key={room.number}>
            <Room {...room} />
          </S.RoomItem>
        ))}
      </S.RoomsGrid>

      <S.MoreButton onClick={handleMoreButtonClick} isSecondary isLink={false}>
        Показать еще
      </S.MoreButton>
    </S.Rooms>
  );
};

export default Rooms;
