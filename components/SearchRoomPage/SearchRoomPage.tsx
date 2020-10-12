import { useEffect, useState } from 'react';

import api from 'api/api';
import MainLayout from 'components/MainLayout/MainLayout';
import RoomFilter, { initialValues } from 'components/RoomFilter/RoomFilter';
import Preloader from 'components/Rooms/components/Preloader/Preloader';
import Rooms from 'components/Rooms/Rooms';

import * as S from './SearchRoomPage.styles';

const handleAPIRequest = async (options?) => {
  return api.booking.filterRooms(options || initialValues);
};

const SearchRoomPage: React.FC = () => {
  const [rooms, setRooms] = useState([]);

  async function loadData(options?) {
    setRooms([]);
    const fetchedRooms = await handleAPIRequest(options);
    setRooms(fetchedRooms.map((room) => ({ ...room, number: room.id })));
  }

  return (
    <MainLayout>
      <S.Container>
        <RoomFilter handleRequest={loadData} />
        <S.RoomsContainer>
          <S.RoomsTitle>Номера, которые мы для вас подобрали</S.RoomsTitle>
          {rooms.length ? <Rooms rooms={rooms} /> : <Preloader />}
        </S.RoomsContainer>
      </S.Container>
    </MainLayout>
  );
};

export default SearchRoomPage;
