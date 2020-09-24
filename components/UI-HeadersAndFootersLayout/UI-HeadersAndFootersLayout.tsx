import React from 'react';

import Footer from 'components/Footer/Footer';

import * as S from './UI-HeadersAndFootersLayout.styles';

const UIHeadersAndFootersLayout: React.FC = (): JSX.Element => (
  <S.Container>
    <Footer />
  </S.Container>
);

export default UIHeadersAndFootersLayout;
