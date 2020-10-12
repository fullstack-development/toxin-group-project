import React from 'react';

import AccountEntry from 'components/AccountEntry/AccountEntry';
import ForgotPasswordForm from 'components/ForgotPasswordForm/ForgotPasswordForm';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import Room from 'components/Room/Room';
import Rooms from 'components/Rooms/Rooms';
import SearchRoomForm from 'components/SearchRoomForm/SearchRoomForm';

import * as S from './CardsPage.styles';

const CardsPage: React.FC = (): JSX.Element => (
  <S.Container>
    <SearchRoomForm />
    <S.RoomsWrapper>
      <Rooms />
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
      <AccountEntry />
    </S.AccountEntryWrapper>
    <S.ForgotPasswordWrapper>
      <ForgotPasswordForm />
    </S.ForgotPasswordWrapper>
  </S.Container>
);

export default CardsPage;
