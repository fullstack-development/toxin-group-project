import { useTranslation } from 'react-i18next';

import NavAccountSettings from 'components/NavAccountSettings/NavAccountSettings';

import PersonalInfo from '../PersonalInfo/PersonalInfo';
import * as S from './MainContent.styles';

const MainContent = (): JSX.Element => {
  const { t } = useTranslation('AccountSettings');

  return (
    <S.MainContent>
      <NavAccountSettings title={t('Personal info')} />
      <S.Title>{t('Personal info')}</S.Title>
      <PersonalInfo />
    </S.MainContent>
  );
};

export default MainContent;
