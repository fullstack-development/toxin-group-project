import { useState } from 'react';
import { connect } from 'react-redux';

import Api from 'api/api';
import MainLayout from 'components/MainLayout/MainLayout';
import Rooms from 'components/Rooms/Rooms';

import * as S from './SelectedRoomsPage.style';

const SelectedRoomsPage: React.FC = (): JSX.Element => {
  const [rooms, setRooms] = useState([]);

  Api.booking.getBookedByUser('s').then((data) => setRooms(data));

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

const mapState = (state) => ({

});

const mapDispatch = {

}

export default connect(mapState, mapDispatch)(SelectedRoomsPage);
