import { memo } from 'react';

import NavLink from './components/NavLink';
import * as S from './NavMenu.styles';
import { NavMain, NavMenuLink } from './NavMenu.model';

const NavMenu = memo(({ menu }: NavMain) => (
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
));

export default NavMenu;
