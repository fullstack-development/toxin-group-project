import React from 'react';

import FooterNav from 'components/FooterNav/FooterNav';
import footerNavData from 'components/FooterNav/FooterNav.data.json';

import * as S from './UI-HeadersAndFootersLayout.styles';

const UIHeadersAndFootersLayout: React.FC = (): JSX.Element => (
  <S.Container>
    <FooterNav items={footerNavData.items} />
  </S.Container>
);

export default UIHeadersAndFootersLayout;
