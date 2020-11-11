import { memo } from 'react';

import NavMenu from 'components/NavMenu/NavMenu';

import * as S from './HeaderUserProfile.styles';

type Props = {
  displayName?: string;
};

const HeaderUserProfile = memo(({ displayName }: Props) => {
  const ProfileLink = [
    {
      name: displayName,
      path: '/profile',
      subMenu: [
        { name: 'Перейти в профиль', path: '/account-settings' },
        { name: 'Выход', path: '/logout' },
      ],
    },
  ];

  return (
    <S.HeaderUserProfile>
      <NavMenu menu={ProfileLink} />
    </S.HeaderUserProfile>
  );
});

HeaderUserProfile.displayName = 'HeaderUserProfile';

export default HeaderUserProfile;
