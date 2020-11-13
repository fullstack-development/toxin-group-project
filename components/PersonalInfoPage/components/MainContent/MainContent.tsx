import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import NavAccountSettings from 'components/NavAccountSettings/NavAccountSettings';

import PersonalInfo from '../PersonalInfo/PersonalInfo';
import * as S from './MainContent.styles';

const MainContent = memo(() => {
  const { t } = useTranslation('AccountSettings');

  return (
    <S.MainContent>
      <NavAccountSettings title={t('Personal info')} />
      <S.Title>{t('Personal info')}</S.Title>
      <PersonalInfo />
    </S.MainContent>
  );
});

MainContent.displayName = 'MainContent';

export default MainContent;
