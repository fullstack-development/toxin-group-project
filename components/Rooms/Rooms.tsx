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

const DEFAULT_COUNT = 12;

const Rooms: React.FC<RoomsProps> = () => {
  const [visibleRoomsCount, setVisibleRoomsCount] = useState(DEFAULT_COUNT);
  // const handleMoreButtonClick = () => {
  //   setVisibleRoomsCount((count) => count + DEFAULT_COUNT);
  // };

  const [rooms, setRooms] = useState([]);

  const getNewRooms = useCallback(async () => {
    const fetchedRooms = await roomsList;
    console.log(fetchedRooms.length);

    setRooms((prevRooms) => {
      console.log(fetchedRooms.slice(0, prevRooms.length + DEFAULT_COUNT));
      return fetchedRooms.slice(0, prevRooms.length + DEFAULT_COUNT);
    });
  }, [rooms]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    console.log('Fetch more list items!');
    getNewRooms();
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    getNewRooms();
  }, []);

  return (
    // <InfiniteScroll
    //   dataLength={rooms.length} // This is important field to render the next data
    //   next={() => getNewRooms()}
    //   hasMore
    //   loader={<h4>Loading...</h4>}
    //   endMessage={
    //     <p style={{ textAlign: 'center' }}>
    //       <b>Yay! You have seen it all</b>
    //     </p>
    //   }
    //   style={{ overflow: 'initial' }}
    //   // below props only if you need pull down functionality
    // >
    <S.Rooms>
      <S.RoomsGrid>
        {rooms.map((room) => (
          <S.RoomItem key={room.number}>
            <Room {...room} />
          </S.RoomItem>
        ))}
      </S.RoomsGrid>
    </S.Rooms>
    // </InfiniteScroll>
  );
};

export default Rooms;
