import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Api from 'api/api';
import MainLayout from 'components/MainLayout/MainLayout';
import Rooms from 'components/Rooms/Rooms';

import * as S from './SelectedRoomsPage.style';

const SelectedRoomsPage: React.FC = (): JSX.Element => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Api.booking.getBookedHistory('s').then((data) => setRooms(data));
  }, []);
  // Api.booking
  //   .setBookedByUser({
  //     apartmentId: 28,
  //     from: new Date(Date.now() - 160000000),
  //     to: new Date(Date.now() - 140000000),
  //     reservationBy: 's',
  //   })
  //   .then((result) => console.log('вродь забронировали', result));
  console.log(rooms);

  return (
    <MainLayout>
      <S.Container>
        <S.Title>Ваши забронированные номера:</S.Title>
        <S.RoomsListContainer>
          <Rooms rooms={rooms} />
        </S.RoomsListContainer>
        <S.SubTitle>История забронированных номеров:</S.SubTitle>
        <S.RoomsListContainer>
          <Rooms rooms={rooms} />
        </S.RoomsListContainer>
      </S.Container>
    </MainLayout>
  );
};

const mapState = (state) => ({});

const mapDispatch = {};

export default connect(mapState, mapDispatch)(SelectedRoomsPage);
