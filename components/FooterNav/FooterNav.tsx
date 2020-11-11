import { memo } from 'react';

import NavItem from './components/NavItem';
import footerNavData from './FooterNav.data';
import * as S from './FooterNav.styles';
import { NavProps } from './FooterNav.types';

const FooterNav = memo(({ items = footerNavData.items }: NavProps) => (
  <S.Container>{items && items.map((item) => <NavItem key={item.title} {...item} />)}</S.Container>
));

FooterNav.displayName = 'FooterNav';

export default FooterNav;
