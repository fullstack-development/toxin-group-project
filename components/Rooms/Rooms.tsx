import { useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Room from 'components/Room/Room';

import { Props as RoomProps } from '../Room/Room.types';
import Preloader from './components/Preloader/Preloader';
import * as S from './Rooms.styles';
import { Props } from './Rooms.types';

const DEFAULT_INCREMENT = 12;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Rooms: React.FC<Props> = ({ rooms }: Props) => {
  const [visibleRooms, setVisibleRooms] = useState<RoomProps[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const getNewRooms = useCallback(async () => {
    await delay(1500);
    setVisibleRooms((prevRooms) => {
      const updatedList = rooms.slice(0, prevRooms.length + DEFAULT_INCREMENT);
      if (prevRooms.length && updatedList.length === prevRooms.length) setHasMore(false);
      return updatedList;
    });
  }, [rooms]);

  useEffect(() => {
    getNewRooms();
  }, [getNewRooms]);

  return (
    <InfiniteScroll
      dataLength={visibleRooms.length}
      next={getNewRooms}
      hasMore={hasMore}
      loader={<Preloader />}
      scrollThreshold={0.6}
      style={{ overflow: 'initial' }}
    >
      <S.Rooms>
        <S.RoomsGrid>
          {visibleRooms.map((room) => (
            <S.RoomItem key={room.number}>
              <Room {...room} />
            </S.RoomItem>
          ))}
        </S.RoomsGrid>
      </S.Rooms>
    </InfiniteScroll>
  );
};

export default Rooms;
