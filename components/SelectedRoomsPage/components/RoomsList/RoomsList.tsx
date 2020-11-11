import { memo } from 'react';

import Room from 'components/Room/Room';
import { BookedRoom } from 'services/api/entities/types';

import * as S from './RoomsList.style';

type Props = {
  rooms: BookedRoom[];
};

const RoomsList = memo(({ rooms }: Props) => {
  return (
    <S.Container>
      {rooms &&
        rooms.map(({ room, bookedData }, index) => {
          const { id } = room;
          const { from, to } = bookedData;

          return (
            <S.RoomWrapper key={Number(index)}>
              <Room {...room} number={id} />
              <S.Price>
                <S.PriceDescription>Дата бронирования: </S.PriceDescription>
                <S.PriceDescription>
                  {from} - {to}
                </S.PriceDescription>
              </S.Price>
            </S.RoomWrapper>
          );
        })}
    </S.Container>
  );
});

RoomsList.displayName = 'RoomList';

export default RoomsList;
