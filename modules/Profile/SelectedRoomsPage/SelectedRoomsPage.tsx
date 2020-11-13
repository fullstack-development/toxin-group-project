import { useEffect } from 'react';
import { connect } from 'react-redux';

import { MainLayout } from 'features/shared/MainLayout/MainLayout';
import { loadBookedHistoryRooms } from 'redux/Booking/redux/actions';
import { AppState } from 'redux/store.types';
import { BookedRoomsHistory } from 'services/api/entities/types';
import { Preloader } from 'shared/view/elements';

import { RoomsList } from './components/RoomsList/RoomsList';
import * as S from './SelectedRoomsPage.style';

type StateProps = {
  bookedRooms: BookedRoomsHistory;
  isLoadingData: boolean;
  userEmail: string;
};

const mapState = (state: AppState): StateProps => ({
  bookedRooms: state.booking.bookedRooms,
  isLoadingData: state.booking.isPending,
  userEmail: state.auth.userEmail,
});

const mapDispatch = {
  getBookedRooms: loadBookedHistoryRooms,
};

type Props = StateProps & typeof mapDispatch;

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
          {isLoadingData && <Preloader />}
          {bookedRooms &&
            (bookedRooms.current.length ? (
              <RoomsList rooms={bookedRooms.current} />
            ) : (
              <S.Text>Нет забронированных номеров</S.Text>
            ))}
        </S.RoomsListContainer>
        <S.SubTitle>История забронированных номеров:</S.SubTitle>
        <S.RoomsListContainer>
          {isLoadingData && <Preloader />}
          {bookedRooms &&
            (bookedRooms.history.length ? (
              <RoomsList rooms={bookedRooms.history} />
            ) : (
              <S.Text>Пусто... Возможно, это будет ваша первая бронь ?</S.Text>
            ))}
        </S.RoomsListContainer>
      </S.Container>
    </MainLayout>
  );
};

const ConnectedComponent = connect(mapState, mapDispatch)(SelectedRoomsPage);
export { ConnectedComponent as SelectedRoomsPage };
