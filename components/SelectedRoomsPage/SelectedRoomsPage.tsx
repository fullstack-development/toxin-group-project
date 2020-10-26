import { useEffect } from 'react';
import { connect } from 'react-redux';

import { BookedRoom } from 'api/entities/types';
import MainLayout from 'components/MainLayout/MainLayout';
// import Rooms from 'components/Rooms/Rooms';
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
  userEmail: string;
};

const SelectedRoomsPage: React.FC<Props> = ({
  bookedRooms,
  userEmail,
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
          {bookedRooms && <RoomsList rooms={bookedRooms.current} />}
        </S.RoomsListContainer>
        <S.SubTitle>История забронированных номеров:</S.SubTitle>
        <S.RoomsListContainer>
          {bookedRooms && <RoomsList rooms={bookedRooms.history} />}
        </S.RoomsListContainer>
      </S.Container>
    </MainLayout>
  );
};

const mapState = (state) => ({
  bookedRooms: state.BookingReducer.bookedRooms,
  userEmail: state.AuthReducer.userEmail,
});

const mapDispatch = {
  getBookedRooms: loadBookedRooms,
};

export default connect(mapState, mapDispatch)(SelectedRoomsPage);
