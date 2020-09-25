import React from 'react';

import FooterNav from 'components/FooterNav/FooterNav';
import footerNavData from 'components/FooterNav/FooterNav.data.json';
import NavMenu from 'components/NavMenu/NavMenu';
import NavLinks from 'components/NavMenu/NavMenu.data';

import * as S from './UI-HeadersAndFootersLayout.styles';

const UIHeadersAndFootersLayout: React.FC = (): JSX.Element => (
  <S.Container>
    <NavMenu menu={NavLinks} />
    <FooterNav items={footerNavData.items} />
  </S.Container>
);

export default UIHeadersAndFootersLayout;
