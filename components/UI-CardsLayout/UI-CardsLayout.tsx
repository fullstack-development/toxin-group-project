import React from 'react';

import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import SearchRoomForm from 'components/SearchRoomForm/SearchRoomForm';

import * as S from './UI-CardsLayout.styles';

const UICardsLayout: React.FC = (): JSX.Element => (
  <S.Container>
    <SearchRoomForm />
    <RegistrationForm />
  </S.Container>
);

export default UICardsLayout;
