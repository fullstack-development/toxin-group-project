import React from 'react';

import Room from 'components/Room/Room';
import SearchRoomForm from 'components/SearchRoomForm/SearchRoomForm';

import * as S from './UI-CardsLayout.styles';

Room;

const UICardsLayout: React.FC = (): JSX.Element => (
  <S.Container>
    <SearchRoomForm />
    <Room price="9 900" number={888} reviewCount={65} reviewsHref="/mock" href="/mock" />
    <Room
      price="9 900"
      number={888}
      reviewCount={65}
      reviewsHref="/mock"
      href="/mock"
      roomType="люкс"
    />
  </S.Container>
);

export default UICardsLayout;
