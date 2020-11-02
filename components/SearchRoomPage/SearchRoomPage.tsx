import { useRouter } from 'next/router';
import { connect } from 'react-redux';

import { Filters } from 'api/entities/types';
import MainLayout from 'components/MainLayout/MainLayout';
import Preloader from 'components/Preloader/Preloader';
import { Props as RoomProps } from 'components/Room/Room.types';
import RoomFilter from 'components/RoomFilter/RoomFilter';
import Rooms from 'components/Rooms/Rooms';
import defaultFilters from 'components/SearchRoomForm/defaultFilters';
import { requestRooms } from 'redux/Booking/redux/actions';
import { AppState } from 'redux/store.types';

import * as S from './SearchRoomPage.styles';
import getPassedFilters from './utils/getPassedFilters';

type StateProps = {
  rooms: RoomProps[];
  isPending: boolean;
};

const mapState = (state: AppState): StateProps => ({
  rooms: state.booking.rooms,
  isPending: state.booking.isPending,
});

const mapDispatch = {
  getRooms: requestRooms,
};

type Props = StateProps & typeof mapDispatch;

const SearchRoomPage: React.FC<Props> = ({ rooms, getRooms, isPending }: Props) => {
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
          <RoomFilter initialFilters={filters} loadRooms={loadRooms} isPending={isPending} />
        </S.FilterContainer>
        <S.RoomsContainer>
          <S.RoomsTitle>Номера, которые мы для вас подобрали</S.RoomsTitle>
          {isPending && (
            <S.PreloaderWrapper>
              <Preloader />
            </S.PreloaderWrapper>
          )}
          {rooms.length ? (
            <Rooms rooms={rooms} />
          ) : (
            !isPending && <span>По вашему запросу не найдено результатов :(</span>
          )}
        </S.RoomsContainer>
      </S.Container>
    </MainLayout>
  );
};

export default connect(mapState, mapDispatch)(SearchRoomPage);
