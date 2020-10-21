import { useState } from 'react';

import MainLayout from 'components/MainLayout/MainLayout';
import Rooms from 'components/Rooms/Rooms';
import roomsList from 'components/Rooms/Rooms.data';

import * as S from './SelectedRoomsPage.style';

const SelectedRoomsPage: React.FC = (): JSX.Element => {
  const [rooms, setRooms] = useState([]);

  Promise.resolve(roomsList).then((data) => setRooms(data));

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

export default SelectedRoomsPage;
