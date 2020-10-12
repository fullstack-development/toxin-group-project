import React, { useState } from 'react';

import AccountEntry from 'components/AccountEntry/AccountEntry';
import ForgotPasswordForm from 'components/ForgotPasswordForm/ForgotPasswordForm';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import Room from 'components/Room/Room';
import Rooms from 'components/Rooms/Rooms';
import roomsList from 'components/Rooms/Rooms.data';
import SearchRoomForm from 'components/SearchRoomForm/SearchRoomForm';

import * as S from './CardsPage.styles';

const CardsPage: React.FC = (): JSX.Element => {
  const [rooms, setRooms] = useState([]);
  Promise.resolve(roomsList).then((data) => setRooms(data));
  return (
    <S.Container>
      <SearchRoomForm />
      <S.RoomsWrapper>
        <Rooms rooms={rooms} />
      </S.RoomsWrapper>
      <Room price={9900} number={888} reviews={65} href="/mock" />
      <Room price={9900} number={888} reviews={65} href="/mock" roomType="люкс" />
      <S.SearchRoomFormWrapper>
        <SearchRoomForm />
      </S.SearchRoomFormWrapper>
      <S.RegistrationFormWrapper>
        <RegistrationForm />
      </S.RegistrationFormWrapper>
      <S.AccountEntryWrapper>
        <AccountEntry />
      </S.AccountEntryWrapper>
      <S.ForgotPasswordWrapper>
        <ForgotPasswordForm />
      </S.ForgotPasswordWrapper>
    </S.Container>
  );
};

export default CardsPage;
