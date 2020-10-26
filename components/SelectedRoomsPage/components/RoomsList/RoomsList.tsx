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
          const { reviews, id } = room;
          const { from, to } = bookedData;

          return (
            <S.RoomWrapper key={Number(index)}>
              <Room
                {...room}
                reviewsHref="/reviews-mock"
                href="/mock"
                number={id}
                reviewCount={reviews}
              />
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
