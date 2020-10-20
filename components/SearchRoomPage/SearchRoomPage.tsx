import { useRouter } from 'next/router';
import { connect } from 'react-redux';

import { Filters } from 'api/entities/types';
import MainLayout from 'components/MainLayout/MainLayout';
import Preloader from 'components/Preloader/Preloader';
import RoomFilter from 'components/RoomFilter/RoomFilter';
import Rooms from 'components/Rooms/Rooms';
import defaultFilters from 'components/SearchRoomForm/defaultFilters';
import { requestRooms } from 'redux/Booking/redux/actions';

import * as S from './SearchRoomPage.styles';
import { Props, State } from './SearchRoomPage.types';
import getPassedFilters from './utils/getPassedFilters';

const mapState = (state: State): Props => state.bookingReducer;

const mapDispatch = {
  getRooms: requestRooms,
};

const SearchRoomPage: React.FC<ReturnType<typeof mapState> & typeof mapDispatch> = ({
  rooms,
  getRooms,
}: ReturnType<typeof mapState> & typeof mapDispatch) => {
  const router = useRouter();

  const passedParams = getPassedFilters(router.asPath);

  const initialFilters: Filters = passedParams && {
    ...defaultFilters,
    ...passedParams,
  };

  const filters: Filters = initialFilters || defaultFilters;

  const loadRooms = (options?: Filters) => {
    const currentFilters = options ? { ...filters, ...options } : { ...filters };
    router.push(`/search-room?&values=${JSON.stringify(currentFilters)}`);
    getRooms(currentFilters);
  };

  return (
    <MainLayout>
      <S.Container>
        <S.FilterContainer>
          <RoomFilter initialFilters={filters} loadRooms={loadRooms} />
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

export default connect(mapState, mapDispatch)(SearchRoomPage);
