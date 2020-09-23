import { useState } from 'react';

import { NavMenuLink, NavSubMenu } from '../NavMenu.types';
import * as S from './NavLink.styles';

const NavLink: React.FC<NavMenuLink> = ({
  isActive,
  name,
  path,
  subMenu,
}: NavMenuLink): JSX.Element => {
  const [isShownSubMenu, setSubMenuShownStatus] = useState(false);
  const expandSubMenu = () => setSubMenuShownStatus(true);
  const collapseSubMenu = () => setSubMenuShownStatus(false);

  return (
    <S.Link
      target="_blank"
      rel="noopener noreferrer"
      withSubMenu={!!subMenu}
      isActive={isActive}
      key={name}
      href={path}
      onMouseOver={expandSubMenu}
      onMouseOut={collapseSubMenu}
    >
      {name}
      {subMenu && (
        <>
          <S.ExpandIcon />
          <S.SubMenuContainer isShown={isShownSubMenu} onMouseOut={collapseSubMenu}>
            {subMenu.map((subMenuLink: NavSubMenu) => (
              <S.SubMenuLink
                target="_blank"
                rel="noopener noreferrer"
                key={subMenuLink.name}
                href={subMenuLink.path}
              >
                {subMenuLink.name}
              </S.SubMenuLink>
            ))}
          </S.SubMenuContainer>
        </>
      )}
    </S.Link>
  );
};

export default NavLink;
