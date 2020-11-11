import NavLink from './components/NavLink';
import * as S from './NavMenu.styles';
import { NavMain, NavMenuLink } from './NavMenu.model';

const NavMenu: React.FC<NavMain> = ({ menu }: NavMain): JSX.Element => (
  <S.NavContainer>
    <ul>
      {menu &&
        menu.map((link: NavMenuLink) => (
          <S.ListItem key={link.name} withSubMenu={!!link.subMenu}>
            <NavLink {...link} />
          </S.ListItem>
        ))}
    </ul>
  </S.NavContainer>
);

export default NavMenu;
