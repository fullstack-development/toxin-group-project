import { NavItem } from './components/NavItem';
import { footerNavData } from './FooterNav.data';
import * as S from './FooterNav.styles';
import { NavProps } from './FooterNav.types';

const FooterNav: React.FC<NavProps> = ({ items = footerNavData.items }: NavProps) => (
  <S.Container>{items && items.map((item) => <NavItem key={item.title} {...item} />)}</S.Container>
);
export { FooterNav };
