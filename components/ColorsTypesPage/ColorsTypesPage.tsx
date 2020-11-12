import { useTranslation } from 'react-i18next';

import UIColorsList from 'components/UI-ColorsList/UI-ColorsList';
import UILogo from 'components/UI-Logo/UI-Logo';
import UITypesList from 'components/UI-TypesList/UI-TypesList';

import { colors, types } from './ColorsTypesPage.data';
import * as S from './ColorsTypesPage.styles';

const ColorsTypesPage: React.FC = () => {
  const { t } = useTranslation('ColorsTypesPage');

  return (
    <S.ColorsTypesLayout>
      <S.Logo>
        <UILogo />
      </S.Logo>
      <S.Content>
        <S.Title>{t('Color palette and text variations')}</S.Title>
        <S.Wrapper>
          <UIColorsList colors={colors} />
          <UITypesList types={types} />
        </S.Wrapper>
      </S.Content>
    </S.ColorsTypesLayout>
  );
};

export default ColorsTypesPage;
