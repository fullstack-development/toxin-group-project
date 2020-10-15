import NavMenu from 'components/NavMenu/NavMenu';

import { HeaderProps } from '../Header.types';
import * as S from './HeaderUserProfile.styles';

const HeaderUserProfile: React.FC<HeaderProps> = ({ authData }: HeaderProps): JSX.Element => {
  const { userName, pathToProfile } = authData;

  const dropdownLinks = [
    { name: 'Перейти в профиль', path: '/profile' },
    { name: 'Выход', path: '/logout' },
  ];

  return (
    <S.HeaderUserProfile>
      <NavMenu
        menu={[
          {
            name: userName,
            path: '/profile',
            subMenu: dropdownLinks,
          },
        ]}
      />
    </S.HeaderUserProfile>
  );
};

export default HeaderUserProfile;
