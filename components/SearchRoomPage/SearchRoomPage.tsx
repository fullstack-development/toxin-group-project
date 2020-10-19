import { useRouter } from 'next/router';
import { connect } from 'react-redux';

import { Apartment, Filters } from 'api/entities/types';
import MainLayout from 'components/MainLayout/MainLayout';
import Preloader from 'components/Preloader/Preloader';
import { Props as RoomProps } from 'components/Room/Room.types';
import RoomFilter from 'components/RoomFilter/RoomFilter';
import Rooms from 'components/Rooms/Rooms';
import defaultFilters from 'components/SearchRoomForm/defaultFilters';
import { requestRooms as getRooms } from 'redux/Booking/redux/actions';

import * as S from './SearchRoomPage.styles';
import getPassedFilters from './utils/getPassedFilters';

type Props = {
  isRequestSuccessful: boolean;
  isPending: boolean;
  loadedRooms: RoomProps[];
  error: Error;
  requestRooms: (options: Filters) => Promise<Apartment[]>;
};

const SearchRoomPage: React.FC<Props> = ({ loadedRooms, requestRooms }: Props) => {
  const router = useRouter();

  const passedParams = getPassedFilters(router.asPath);

  const initialFilters: Filters = passedParams && {
    ...defaultFilters,
    ...passedParams,
  };

  const filters: Filters = initialFilters || defaultFilters;

  async function loadRooms(options?: Filters) {
    const currentFilters = options ? { ...filters, ...options } : { ...filters };
    router.push(`/search-room?&values=${JSON.stringify(currentFilters)}`);
    requestRooms(currentFilters);
  }

  return (
    <MainLayout>
      <S.Container>
        <S.FilterContainer>
          <RoomFilter initialFilters={filters} loadRooms={loadRooms} />
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
    </MainLayout>
  );
};

const mapState = (state) => ({ ...state.bookingReducer, loadedRooms: state.bookingReducer.rooms });

const mapDispatch = {
  requestRooms: getRooms,
};

export default connect(mapState, mapDispatch)(SearchRoomPage);
