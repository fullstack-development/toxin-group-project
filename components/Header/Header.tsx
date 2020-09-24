import * as S from './Header.styles';
import { HeaderProps } from './Header.types';
import HeaderUserLogin from './HeaderUserLogin/HeaderUserLogin';
import HeaderUserProfile from './HeaderUserProfile/HeaderUserProfile';

const Header: React.FC<HeaderProps> = ({ authData }: HeaderProps): JSX.Element => {
  return (
    <S.Header>
      <S.HeaderLogo isLink href="/mock-main-page" />
      <S.AccountPanel>
        {authData ? <HeaderUserProfile authData={authData} /> : <HeaderUserLogin />}
      </S.AccountPanel>
    </S.Header>
  );
};

export default Header;
