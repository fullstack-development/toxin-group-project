import { memo } from 'react';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import * as S from './HeadersAndFootersPage.styles';

const HeadersAndFootersPage = memo(() => (
  <S.Container>
    <Header wasFinishedAuthChecking />
    <Header wasFinishedAuthChecking />
    <Footer />
  </S.Container>
));

HeadersAndFootersPage.displayName = 'HeadersAndFootersPage';

export default HeadersAndFootersPage;
