import { useTranslation } from 'react-i18next';

import NavMenu from 'components/NavMenu/NavMenu';

import * as S from './HeaderUserProfile.styles';

type Props = {
  displayName?: string;
};

const HeaderUserProfile: React.FC<Props> = ({ displayName }: Props): JSX.Element => {
  const { t } = useTranslation('HeaderUserProfile');

  const ProfileLink = [
    {
      name: displayName,
      path: '/account-settings',
      subMenu: [
        { name: t('HeaderProfile:To profile'), path: '/account-settings' },
        { name: t('HeaderProfile:Logout'), path: '/logout' },
      ],
    },
  ];

  return (
    <S.HeaderUserProfile>
      <NavMenu menu={ProfileLink} />
    </S.HeaderUserProfile>
  );
};

export default HeaderUserProfile;
