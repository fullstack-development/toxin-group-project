import React from 'react';

import NavMenu from 'components/NavMenu/NavMenu';
import NavLinks from 'components/NavMenu/NavMenu.data.json';

import * as S from './UI-HeadersAndFootersLayout.styles';

const UIHeadersAndFootersLayout: React.FC = (): JSX.Element => (
  <S.Container>
    <NavMenu menu={NavLinks} />
  </S.Container>
);

export default UIHeadersAndFootersLayout;
