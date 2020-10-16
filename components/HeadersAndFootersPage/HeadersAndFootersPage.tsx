import React from 'react';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import * as S from './HeadersAndFootersPage.styles';

const HeadersAndFootersPage: React.FC = (): JSX.Element => (
  <S.Container>
    <Header wasFinishedAuthChecking />
    <Header wasFinishedAuthChecking />
    <Footer />
  </S.Container>
);

export default HeadersAndFootersPage;
