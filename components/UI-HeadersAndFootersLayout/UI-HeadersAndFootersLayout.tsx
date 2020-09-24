import React from 'react';

import FooterNav from 'components/FooterNav/FooterNav';
import footerNavData from 'components/FooterNav/FooterNav.data.json';
import Header from 'components/Header/Header';

import * as S from './UI-HeadersAndFootersLayout.styles';

const UIHeadersAndFootersLayout: React.FC = (): JSX.Element => (
  <S.Container>
    <Header authData={{ userName: 'Юлий Цезарь', pathToProfile: '/mock-user' }} />
    <FooterNav items={footerNavData.items} />
  </S.Container>
);

export default UIHeadersAndFootersLayout;
