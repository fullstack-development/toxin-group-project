import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import api from 'api/api';
import { Filters } from 'api/entities/types';
import MainLayout from 'components/MainLayout/MainLayout';
import Preloader from 'components/Preloader/Preloader';
import { Props as RoomProps } from 'components/Room/Room.types';
import RoomFilter from 'components/RoomFilter/RoomFilter';
import Rooms from 'components/Rooms/Rooms';
import defaultFilters from 'components/SearchRoomForm/defaultFilters';
import { requestRooms } from 'redux/Booking/redux/actions';

import * as S from './SearchRoomPage.styles';
import getPassedFilters from './utils/getPassedFilters';

const SearchRoomPage: React.FC = ({
  isRequestSuccessful,
  isPending,
  loadedRooms,
  error,
  requestRooms,
}) => {
  const router = useRouter();

  const passedParams = getPassedFilters(router.asPath);

  const initialFilters: Filters = passedParams && {
    ...defaultFilters,
    ...passedParams,
    booked: passedParams['search-room-date'] || defaultFilters.booked,
  };

  initialFilters && delete initialFilters['search-room-date'];

  const filters: Filters = initialFilters || defaultFilters;

  async function loadData(options?: Filters) {
    const currentFilters = options ? { ...filters, ...options } : { ...filters };
    router.push(`/search-room?&values=${JSON.stringify(currentFilters)}`);
    requestRooms(currentFilters);
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
            {loadedRooms.length ? (
              <Rooms rooms={loadedRooms} />
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

const mapState = (state) => ({ ...state.bookingReducer, loadedRooms: state.bookingReducer.rooms });

const mapDispatch = {
  requestRooms,
};

export default connect(mapState, mapDispatch)(SearchRoomPage);
