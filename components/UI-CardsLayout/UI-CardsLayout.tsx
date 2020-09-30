import React from 'react';

import AccountEntry from 'components/AccountEntry/AccountEntry';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import SearchRoomForm from 'components/SearchRoomForm/SearchRoomForm';

import * as S from './UI-CardsLayout.styles';

const UICardsLayout: React.FC = (): JSX.Element => (
  <S.Container>
    <S.SearchRoomFormWrapper>
      <SearchRoomForm />
    </S.SearchRoomFormWrapper>
    <S.RegistrationFormWrapper>
      <RegistrationForm />
    </S.RegistrationFormWrapper>
    <S.AccountEntryWrapper>
      <AccountEntry />
    </S.AccountEntryWrapper>
  </S.Container>
);

export default UICardsLayout;
