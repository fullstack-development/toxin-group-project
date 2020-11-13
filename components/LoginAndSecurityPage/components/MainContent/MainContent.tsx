import { useTranslation } from 'react-i18next';

import NavAccountSettings from 'components/NavAccountSettings/NavAccountSettings';

import Login from '../Login/Login';
import * as S from './MainContent.styles';

const MainContent = (): JSX.Element => {
  const { t } = useTranslation('AccountSettings');

  return (
    <S.MainContent>
      <NavAccountSettings title={t('Login & security')} />
      <S.Title>{t('Login & security')}</S.Title>
      <Login />
    </S.MainContent>
  );
};
export default MainContent;
