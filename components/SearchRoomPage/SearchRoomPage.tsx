import { useRouter } from 'next/router';
import { useState } from 'react';

import api from 'api/api';
import { Filters } from 'api/entities/types';
import MainLayout from 'components/MainLayout/MainLayout';
import Preloader from 'components/Preloader/Preloader';
import { Props as RoomProps } from 'components/Room/Room.types';
import RoomFilter from 'components/RoomFilter/RoomFilter';
import Rooms from 'components/Rooms/Rooms';
import defaultFilters from 'components/SearchRoomForm/defaultFilters';

import * as S from './SearchRoomPage.styles';

const SearchRoomPage: React.FC = () => {
  const [rooms, setRooms] = useState<RoomProps[]>([]);
  const router = useRouter();
  const { query } = useRouter();

  const passedParams = query.values && JSON.parse(`${query.values}`);
  console.log(passedParams);

  const initialFilters = passedParams && {
    ...defaultFilters,
    ...passedParams,
    booked: passedParams['search-room-date'] || defaultFilters.booked,
  };

  // console.log(initialFilters);
  const filters = initialFilters || defaultFilters;

  async function loadData(options?: Filters) {
    setRooms([]);
    const currentFilters = options ? { ...filters, ...options } : filters;
    router.push(`/search-room?&values=${JSON.stringify(currentFilters)}`);
    const fetchedRooms = await api.booking.filterRooms(currentFilters);
    setRooms(fetchedRooms.map((room) => ({ ...room, number: room.id })));
  }

  return (
    <MainLayout>
      <>
        <S.Container>
          <S.FilterContainer>
            <RoomFilter initialFilters={filters} handleRequest={loadData} />
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
      </>
    </MainLayout>
  );
};

export default SearchRoomPage;
