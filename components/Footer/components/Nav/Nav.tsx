import { memo } from 'react';

import FooterNav from 'components/FooterNav/FooterNav';

import * as S from './Nav.styles';

const Nav = memo(() => (
  <S.Nav>
    <FooterNav />
  </S.Nav>
));

export default Nav;
