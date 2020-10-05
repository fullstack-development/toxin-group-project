import { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Room from 'components/Room/Room';
import roomsList from 'components/Rooms/Rooms.data';

import { RoomProps } from '../Room/Room.types';
import Preloader from './components/Preloader/Preloader';
import * as S from './Rooms.styles';

// TODO

const fetchRooms: Promise<RoomProps[]> = new Promise((resolve) =>
  setTimeout(() => resolve(roomsList), 1500),
);

const DEFAULT_INCREMENT = 12;

const Rooms: React.FC = () => {
  const defaultState: RoomProps[] = [];
  const [rooms, setRooms] = useState(defaultState);
  const [hasMore, setHasMore] = useState(true);

  const getNewRooms = useCallback(async () => {
    const fetchedRooms = await fetchRooms;
    setRooms((prevRooms) => {
      const updatedList = fetchedRooms.slice(0, prevRooms.length + DEFAULT_INCREMENT);
      if (updatedList.length === prevRooms.length) setHasMore(false);
      return updatedList;
    });
  }, []);

  useEffect(() => {
    getNewRooms();
  }, [getNewRooms]);

  return (
    <InfiniteScroll
      dataLength={rooms.length}
      next={getNewRooms}
      hasMore={hasMore}
      loader={<Preloader />}
      scrollThreshold={0.6}
      style={{ overflow: 'initial' }}
    >
      <S.Rooms>
        <S.RoomsGrid>
          {rooms.map((room, index) => (
            <S.RoomItem key={String(room.number + index)}>
              <Room {...room} />
            </S.RoomItem>
          ))}
        </S.RoomsGrid>
      </S.Rooms>
    </InfiniteScroll>
  );
};

export default Rooms;
