import { useState } from 'react';

import api from 'api/api';
import { Filters } from 'api/entities/types';
import MainLayout from 'components/MainLayout/MainLayout';
import Preloader from 'components/Preloader/Preloader';
import { Props as RoomProps } from 'components/Room/Room.types';
import RoomFilter from 'components/RoomFilter/RoomFilter';
import Rooms from 'components/Rooms/Rooms';

import * as S from './SearchRoomPage.styles';

const SearchRoomPage: React.FC = () => {
  const [rooms, setRooms] = useState<RoomProps[]>([]);

  async function loadData(options?: Filters) {
    setRooms([]);
    const fetchedRooms = await api.booking.filterRooms(options);
    setRooms(fetchedRooms.map((room) => ({ ...room, number: room.id })));
  }

  return (
    <MainLayout>
      <S.Container>
        <S.FilterContainer>
          <RoomFilter handleRequest={loadData} />
        </S.FilterContainer>
        <S.RoomsContainer>
          <S.RoomsTitle>Номера, которые мы для вас подобрали</S.RoomsTitle>
          {rooms.length ? (
            <Rooms rooms={rooms} />
          ) : (
            <S.PreloaderWrapper>
              <Preloader />
            </S.PreloaderWrapper>
          )}
        </S.RoomsContainer>
      </S.Container>
    </MainLayout>
  );
};

export default SearchRoomPage;
