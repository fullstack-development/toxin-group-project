import { useState, useEffect, useCallback } from 'react';
// import InfiniteScroll from 'react-infinite-scroller';
import InfiniteScroll from 'react-infinite-scroll-component';

import Room from 'components/Room/Room';
import roomsList from 'components/Rooms/Rooms.data';

import { RoomProps } from '../Room/Room.types';
import * as S from './Rooms.styles';

export type RoomsProps = {
  rooms: RoomProps[];
};

const DEFAULT_INCREMENT = 12;

const Rooms: React.FC<RoomsProps> = () => {
  const [rooms, setRooms] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const getNewRooms = useCallback(async () => {
    const fetchedRooms = await roomsList;
    setTimeout(() => {
      setRooms((prevRooms) => {
        const updatedList = fetchedRooms.slice(0, prevRooms.length + DEFAULT_INCREMENT);
        if (updatedList.length === prevRooms.length) setHasMore(false);
        return updatedList;
      });
    }, 1500);
  }, []);

  useEffect(() => {
    getNewRooms();
  }, [getNewRooms]);

  return (
    <InfiniteScroll
      dataLength={rooms.length} // This is important field to render the next data
      next={() => getNewRooms()}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      style={{ overflow: 'initial' }}
    >
      <S.Rooms>
        <S.RoomsGrid>
          {rooms.map((room) => (
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
