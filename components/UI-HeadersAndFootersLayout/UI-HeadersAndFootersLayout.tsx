import React from 'react';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import HeaderContainer from 'components/Header/HeaderContainer';

import * as S from './UI-HeadersAndFootersLayout.styles';

const UIHeadersAndFootersLayout: React.FC = (): JSX.Element => (
  <S.Container>
    <HeaderContainer />
    <Header />
    <Footer />
  </S.Container>
);

export default UIHeadersAndFootersLayout;
