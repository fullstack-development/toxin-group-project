import { useEffect } from 'react';
import { connect } from 'react-redux';

import { BookedRoom } from 'api/entities/types';
import MainLayout from 'components/MainLayout/MainLayout';
import Preloader from 'components/Rooms/components/Preloader/Preloader';
import { loadBookedRooms } from 'redux/Booking/redux/actions';

import RoomsList from './components/RoomsList/RoomsList';
import * as S from './SelectedRoomsPage.style';

type AvailableRooms = {
  current?: BookedRoom[];
  history?: BookedRoom[];
};

type Props = {
  getBookedRooms: (email: string) => void;
  bookedRooms: AvailableRooms;
  isLoadingData: boolean;
  userEmail: string;
};

const SelectedRoomsPage: React.FC<Props> = ({
  bookedRooms,
  userEmail,
  isLoadingData,
  getBookedRooms,
}: Props): JSX.Element => {
  useEffect(() => {
    getBookedRooms(userEmail);
  }, [getBookedRooms, userEmail]);

  return (
    <MainLayout>
      <S.Container>
        <S.Title>Ваши забронированные номера:</S.Title>
        <S.RoomsListContainer>
          {isLoadingData ? <Preloader /> : bookedRooms && <RoomsList rooms={bookedRooms.current} />}
        </S.RoomsListContainer>
        <S.SubTitle>История забронированных номеров:</S.SubTitle>
        <S.RoomsListContainer>
          {isLoadingData ? <Preloader /> : bookedRooms && <RoomsList rooms={bookedRooms.history} />}
        </S.RoomsListContainer>
      </S.Container>
    </MainLayout>
  );
};

const mapState = (state) => ({
  bookedRooms: state.BookingReducer.bookedRooms,
  isLoadingData: state.BookingReducer.isLoadingData,
  userEmail: state.AuthReducer.userEmail,
});

const mapDispatch = {
  getBookedRooms: loadBookedRooms,
};

export default connect(mapState, mapDispatch)(SelectedRoomsPage);
