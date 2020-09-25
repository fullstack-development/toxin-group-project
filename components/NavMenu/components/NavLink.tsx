import { useState, useRef, useEffect } from 'react';

import { NavMenuLink, NavSubMenu } from '../NavMenu.types';
import * as S from './NavLink.styles';

const NavLink: React.FC<NavMenuLink> = ({
  isActive,
  name,
  path,
  subMenu,
}: NavMenuLink): JSX.Element => {
  const LinkMenuRef = useRef(null);
  const [isShownSubMenu, setSubMenuShownStatus] = useState(false);
  const expandSubMenu = () => setSubMenuShownStatus(true);

  useEffect(() => {
    const handleDocumentMouseMove = (e: TouchEvent) => {
      if (isShownSubMenu && !LinkMenuRef.current.contains(e.target)) setSubMenuShownStatus(false);
    };

    document.addEventListener('mousemove', handleDocumentMouseMove);
    return () => document.removeEventListener('mousemove', handleDocumentMouseMove);
  }, [isShownSubMenu]);

  return (
    <S.NavLink ref={LinkMenuRef}>
      <S.Link
        isActive={isActive}
        key={name}
        href={path}
        onMouseOver={expandSubMenu}
        onTouchStart={expandSubMenu}
      >
        {name}
      </S.Link>
      {subMenu && (
        <>
          <S.ExpandIcon />
          <S.SubMenuContainer isShown={isShownSubMenu}>
            {subMenu.map((subMenuLink: NavSubMenu) => (
              <S.SubMenuLink key={subMenuLink.path} href={subMenuLink.path}>
                {subMenuLink.name}
              </S.SubMenuLink>
            ))}
          </S.SubMenuContainer>
        </>
      )}
    </S.NavLink>
  );
};

export default NavLink;
