import React from 'react';

import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

import * as S from './UI-CardsLayout.styles';

const UICardsLayout: React.FC = (): JSX.Element => (
  <S.Container>
    <RegistrationForm />
  </S.Container>
);

export default UICardsLayout;
