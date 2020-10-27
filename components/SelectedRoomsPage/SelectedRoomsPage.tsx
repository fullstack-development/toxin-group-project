import { useEffect } from 'react';
import { connect } from 'react-redux';

import { BookedRoomsHistory } from 'api/entities/types';
import MainLayout from 'components/MainLayout/MainLayout';
import Preloader from 'components/Preloader/Preloader';
import { loadBookedHistoryRooms } from 'redux/BookingHistory/redux/actions';
import { AppState } from 'redux/store.types';

import RoomsList from './components/RoomsList/RoomsList';
import * as S from './SelectedRoomsPage.style';

type StateProps = {
  bookedRooms: BookedRoomsHistory;
  isLoadingData: boolean;
  userEmail: string;
};

const mapState = (state: AppState): StateProps => ({
  bookedRooms: state.BookedHistoryReducer.bookedRooms,
  isLoadingData: state.BookedHistoryReducer.isLoadingData,
  userEmail: state.AuthReducer.userEmail,
});

const mapDispatch = {
  getBookedRooms: loadBookedHistoryRooms,
};

type Props = ReturnType<typeof mapState> & typeof mapDispatch;

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

export default connect(mapState, mapDispatch)(SelectedRoomsPage);
