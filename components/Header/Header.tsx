import MenuIcon from '@material-ui/icons/Menu';
import { useState, useEffect } from 'react';

import NavMenu from 'components/NavMenu/NavMenu';
import NavLinks from 'components/NavMenu/NavMenu.data';

import * as S from './Header.styles';
import { HeaderProps } from './Header.types';
import HeaderUserLogin from './HeaderUserLogin/HeaderUserLogin';
import HeaderUserProfile from './HeaderUserProfile/HeaderUserProfile';

const Header: React.FC<HeaderProps> = ({ authData }: HeaderProps): JSX.Element => {
  const [isOpenMobileMenu, setMobileMenuStatus] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 900) setMobileMenuStatus(false);
  }, []);

  const changeOpenMenuStatus = () => setMobileMenuStatus(!isOpenMobileMenu);

  return (
    <S.Header>
      <S.HeaderLogoWrapper>
        <S.HeaderLogo isLink />
        <S.HamburgerButtonWrapper>
          <MenuIcon onClick={changeOpenMenuStatus} />
        </S.HamburgerButtonWrapper>
      </S.HeaderLogoWrapper>
      {isOpenMobileMenu && (
        <>
          <NavMenu menu={NavLinks} />
          <S.AccountPanel>
            {authData ? <HeaderUserProfile authData={authData} /> : <HeaderUserLogin />}
          </S.AccountPanel>
        </>
      )}
    </S.Header>
  );
};

export default Header;
