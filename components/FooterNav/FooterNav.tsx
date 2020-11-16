import NavItem from './components/NavItem';
import footerNavData from './FooterNav.fuxure';
import { NavProps } from './FooterNav.model';
import * as S from './FooterNav.styles';

const FooterNav: React.FC<NavProps> = ({ items = footerNavData.items }: NavProps) => (
  <S.Container>{items && items.map((item) => <NavItem key={item.title} {...item} />)}</S.Container>
);
export default FooterNav;
