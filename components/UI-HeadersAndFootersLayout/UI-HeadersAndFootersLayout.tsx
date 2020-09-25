import React from 'react';

import Footer from 'components/Footer/Footer';
import NavMenu from 'components/NavMenu/NavMenu';
import NavLinks from 'components/NavMenu/NavMenu.data';

import * as S from './UI-HeadersAndFootersLayout.styles';

const UIHeadersAndFootersLayout: React.FC = (): JSX.Element => (
  <S.Container>
    <NavMenu menu={NavLinks} />
    <Footer />
  </S.Container>
);

export default UIHeadersAndFootersLayout;
