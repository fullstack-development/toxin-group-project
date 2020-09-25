import React from 'react';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import * as S from './UI-HeadersAndFootersLayout.styles';

const UIHeadersAndFootersLayout: React.FC = (): JSX.Element => (
  <S.Container>
    <Header authData={{ userName: 'Юлий Цезарь', pathToProfile: '/mock-user' }} />
    <Footer />
  </S.Container>
);

export default UIHeadersAndFootersLayout;
