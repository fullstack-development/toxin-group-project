import { memo } from 'react';

import UIColorsList from 'components/UI-ColorsList/UI-ColorsList';
import UILogo from 'components/UI-Logo/UI-Logo';
import UITypesList from 'components/UI-TypesList/UI-TypesList';

import { colors, types } from './ColorsTypesPage.data';
import * as S from './ColorsTypesPage.styles';

const ColorsTypesPage = memo(() => (
  <S.ColorsTypesLayout>
    <S.Logo>
      <UILogo />
    </S.Logo>
    <S.Content>
      <S.Title>Цветовая палитра и вариации текста</S.Title>
      <S.Wrapper>
        <UIColorsList colors={colors} />
        <UITypesList types={types} />
      </S.Wrapper>
    </S.Content>
  </S.ColorsTypesLayout>
));

ColorsTypesPage.displayName = 'ColorsTypesPage';

export default ColorsTypesPage;
