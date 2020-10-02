import React from 'react';

import AccountEntry from 'components/AccountEntry/AccountEntry';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import Room from 'components/Room/Room';
import Rooms from 'components/Rooms/Rooms';
import SearchRoomForm from 'components/SearchRoomForm/SearchRoomForm';

import * as S from './UI-CardsLayout.styles';

const UICardsLayout: React.FC = (): JSX.Element => (
  <S.Container>
    <S.RoomsWrapper>
      <Rooms />
    </S.RoomsWrapper>
    {/* <SearchRoomForm />
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
    </S.AccountEntryWrapper> */}
  </S.Container>
);

export default UICardsLayout;
