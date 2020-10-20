import React, { useState } from 'react';

import api from 'api/api';
import AccountEntry from 'components/AccountEntry/AccountEntry';
import Button from 'components/Button/Button';
import ForgotPasswordForm from 'components/ForgotPasswordForm/ForgotPasswordForm';
import OrderForm from 'components/OrderForm/OrderForm';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import Room from 'components/Room/Room';
import Rooms from 'components/Rooms/Rooms';
import roomsList from 'components/Rooms/Rooms.data';
import SearchRoomForm from 'components/SearchRoomForm/SearchRoomForm';

import * as S from './CardsPage.styles';

const CardsPage: React.FC = (): JSX.Element => {
  const [rooms, setRooms] = useState([]);

  Promise.resolve(roomsList).then((data) => setRooms(data));

  const loadRoom = async () => {
    const room = await api.apartments.updateAll();
    console.log(room);
  };

  // eslint-disable-next-line no-console
  const mockAuthFunction = () => console.log('Auth is done!');

  return (
    <S.Container>
      {/* <SearchRoomForm />
      <Button onClick={loadRoom}>Загрузка</Button> */}
      <OrderForm roomNumber={888} roomType="люкс" roomPrice={9990} />
      {/* <S.RoomsWrapper>
        <Rooms rooms={rooms} />
      </S.RoomsWrapper>
      <Room price={9900} number={888} reviewCount={65} reviewsHref="/mock" href="/mock" />
      <Room
        price={9900}
        number={888}
        reviewCount={65}
        reviewsHref="/mock"
        href="/mock"
        roomType="люкс"
      />
      <S.SearchRoomFormWrapper>
        <SearchRoomForm />
      </S.SearchRoomFormWrapper>
      <S.RegistrationFormWrapper>
        <RegistrationForm />
      </S.RegistrationFormWrapper>
      <S.AccountEntryWrapper>
        <AccountEntry
          isAuthSuccess={false}
          isAuthProcessNow={false}
          authStatusText=""
          requestToAuthWithGoogle={mockAuthFunction}
          requestToAuth={mockAuthFunction}
          breakAuthProcess={mockAuthFunction}
        />
      </S.AccountEntryWrapper>
      <S.ForgotPasswordWrapper>
        <ForgotPasswordForm />
      </S.ForgotPasswordWrapper> */}
    </S.Container>
  );
};

export default CardsPage;
