import NavLink from './components/NavLink';
import * as S from './NavMenu.styles';
import { NavMain, NavMenuLink } from './NavMenu.types';

const NavMenu: React.FC<NavMain> = ({ menu }: NavMain): JSX.Element => (
  <S.NavContainer>
    {menu && menu.map((link: NavMenuLink) => <NavLink key={link.name} {...link} />)}
  </S.NavContainer>
);

export default NavMenu;
