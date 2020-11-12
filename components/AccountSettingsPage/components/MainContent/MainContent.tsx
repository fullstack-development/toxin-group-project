import { useTranslation } from 'react-i18next';

import Cards from '../Cards/Cards';
import * as S from './MainContent.styles';

const MainContent = (): JSX.Element => {
  const { t } = useTranslation('AccountSettings');

  return (
    <S.MainContent>
      <S.Title>{t('Account')}</S.Title>
      <Cards />
    </S.MainContent>
  );
};

export default MainContent;
