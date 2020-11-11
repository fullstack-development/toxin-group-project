import CircularProgress from '@material-ui/core/CircularProgress';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { useState } from 'react';

import NavMenu from 'components/NavMenu/NavMenu';
import { NavLinks } from 'components/NavMenu/NavMenu.fuxure';

import HeaderUserLogin from './components/HeaderUserLogin/HeaderUserLogin';
import HeaderUserProfile from './components/HeaderUserProfile/HeaderUserProfile';
import LanguageDropdown from './components/LanguageDropdown/LanguageDropdown';
import * as S from './Header.styles';

export type Props = {
  displayName?: string;
  wasFinishedAuthChecking: boolean;
};

const Header: React.FC<Props> = ({ displayName, wasFinishedAuthChecking }: Props): JSX.Element => {
  const [isOpenMobileMenu, setMobileMenuStatus] = useState(false);

  const changeOpenMenuStatus = () => setMobileMenuStatus(!isOpenMobileMenu);

  return (
    <S.Header>
      <S.HeaderLogoWrapper>
        <S.HeaderLogo />
        <S.HamburgerButtonWrapper onClick={changeOpenMenuStatus}>
          {isOpenMobileMenu ? <MenuOpenIcon /> : <MenuIcon />}
        </S.HamburgerButtonWrapper>
      </S.HeaderLogoWrapper>
      <S.MobileMenu isShown={isOpenMobileMenu}>
        <LanguageDropdown />
        <NavMenu menu={NavLinks} />
        {wasFinishedAuthChecking ? (
          <S.AccountPanel>
            {displayName ? <HeaderUserProfile displayName={displayName} /> : <HeaderUserLogin />}
          </S.AccountPanel>
        ) : (
          <CircularProgress />
        )}
      </S.MobileMenu>
    </S.Header>
  );
};

export default Header;
