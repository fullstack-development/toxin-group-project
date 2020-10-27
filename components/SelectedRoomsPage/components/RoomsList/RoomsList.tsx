import { BookedRoom } from 'api/entities/types';
import Room from 'components/Room/Room';

import * as S from './RoomsList.style';

type Props = {
  rooms: BookedRoom[];
};

const RoomsList: React.FC<Props> = ({ rooms }: Props): JSX.Element => {
  return (
    <S.Container>
      {rooms &&
        rooms.map(({ room, bookedData }, index) => {
          const { id } = room;
          const { from, to } = bookedData;

          return (
            <S.RoomWrapper key={Number(index)}>
              <Room {...room} href="/mock" number={id} />
              <S.Price>
                <span>Дата бронирования: </span>
                <span>
                  {from} - {to}
                </span>
              </S.Price>
            </S.RoomWrapper>
          );
        })}
    </S.Container>
  );
};

export default RoomsList;
