import React from 'react';

import AccountEntry from 'components/AccountEntry/AccountEntry';
import SearchRoomForm from 'components/SearchRoomForm/SearchRoomForm';

import * as S from './UI-CardsLayout.styles';

const UICardsLayout: React.FC = (): JSX.Element => (
  <S.Container>
    <SearchRoomForm />
    <S.AccountEntryWrapper>
      <AccountEntry />
    </S.AccountEntryWrapper>
  </S.Container>
);

export default UICardsLayout;
