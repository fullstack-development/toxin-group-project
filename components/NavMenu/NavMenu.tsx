import { useState } from 'react';

import * as S from './NavMenu.styles';

type NavMenu = {
  menu: {
    name: string;
    path: string;
    isActive?: boolean;
    subMenu?: {
      name: string;
      path: string;
    }[];
  }[];
};

const NavMenu: React.FC<NavMenu> = ({ menu }: NavMenu): JSX.Element => {
  const [isShowSubMenu, setSubMenuShowStatus] = useState(false);

  return (
    <S.NavContainer>
      {menu &&
        menu.map((link) => {
          const { isActive, name, path, subMenu } = link;
          const expandSubMenu = () => setSubMenuShowStatus(true);
          const collapseSubMenu = () => setSubMenuShowStatus(false);

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
              {subMenu && <S.ExpandIcon />}
              {subMenu && (
                <S.SubMenuContainer isShow={isShowSubMenu} onMouseOut={collapseSubMenu}>
                  {subMenu.map((subMenuLink) => {
                    return (
                      <S.SubMenuLink
                        target="_blank"
                        rel="noopener noreferrer"
                        key={subMenuLink.name}
                        href={subMenuLink.path}
                      >
                        {subMenuLink.name}
                      </S.SubMenuLink>
                    );
                  })}
                </S.SubMenuContainer>
              )}
            </S.Link>
          );
        })}
    </S.NavContainer>
  );
};

export default NavMenu;
