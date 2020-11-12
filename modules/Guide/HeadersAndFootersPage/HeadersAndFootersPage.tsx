import React from 'react';

import { Footer, Header } from 'shared/view/components';

import * as S from './HeadersAndFootersPage.styles';

const HeadersAndFootersPage: React.FC = (): JSX.Element => (
  <S.Container>
    <Header wasFinishedAuthChecking />
    <Header wasFinishedAuthChecking />
    <Footer />
  </S.Container>
);

export { HeadersAndFootersPage };
