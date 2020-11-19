import { memo } from 'react';

import { BookedRoom } from 'services/api/entities/model';
import { Room } from 'shared/view/components';

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

export { RoomsList };
