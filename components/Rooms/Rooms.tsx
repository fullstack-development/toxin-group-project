import { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Room from 'components/Room/Room';
import roomsList from 'components/Rooms/Rooms.data';

import { RoomProps } from '../Room/Room.types';
import * as S from './Rooms.styles';

const fetchRooms: Promise<RoomProps[]> = new Promise((resolve) =>
  setTimeout(() => resolve(roomsList), 1500),
);

const DEFAULT_INCREMENT = 12;

const Rooms: React.FC = () => {
  const [rooms, setRooms] = useState([]);
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
      loader={<h4>Loading...</h4>}
      scrollThreshold={0.7}
      style={{ overflow: 'initial' }}
    >
      <S.Rooms>
        <S.RoomsGrid>
          {rooms.map((room, index) => (
            <S.RoomItem key={room.number + String(index)}>
              <Room {...room} />
            </S.RoomItem>
          ))}
        </S.RoomsGrid>
      </S.Rooms>
    </InfiniteScroll>
  );
};

export default Rooms;
