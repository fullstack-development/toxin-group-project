import React from 'react';

import SearchRoomForm from 'components/SearchRoomForm/SearchRoomForm';

import * as S from './UI-CardsLayout.styles';

const UICardsLayout: React.FC = (): JSX.Element => (
  <S.Container>
    <SearchRoomForm />
  </S.Container>
);

export default UICardsLayout;
