import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { useState } from 'react';

import NavMenu from 'components/NavMenu/NavMenu';
import NavLinks from 'components/NavMenu/NavMenu.data';

import * as S from './Header.styles';
import HeaderUserLogin from './HeaderUserLogin/HeaderUserLogin';
import HeaderUserProfile from './HeaderUserProfile/HeaderUserProfile';

export type Props = {
  isAuthSuccess: boolean;
  displayName?: string;
};

const Header: React.FC<Props> = ({ isAuthSuccess, displayName }: Props): JSX.Element => {
  const [isOpenMobileMenu, setMobileMenuStatus] = useState(false);

  const changeOpenMenuStatus = () => setMobileMenuStatus(!isOpenMobileMenu);

  return (
    <S.Header>
      <S.HeaderLogoWrapper>
        <S.HeaderLogo isLink />
        <S.HamburgerButtonWrapper onClick={changeOpenMenuStatus}>
          {isOpenMobileMenu ? <MenuOpenIcon /> : <MenuIcon />}
        </S.HamburgerButtonWrapper>
      </S.HeaderLogoWrapper>
      <S.MobileMenu isShown={isOpenMobileMenu}>
        <NavMenu menu={NavLinks} />
        <S.AccountPanel>
          {isAuthSuccess ? <HeaderUserProfile displayName={displayName} /> : <HeaderUserLogin />}
        </S.AccountPanel>
      </S.MobileMenu>
    </S.Header>
  );
};

export default Header;
