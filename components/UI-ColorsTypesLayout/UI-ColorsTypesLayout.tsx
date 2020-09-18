import UIColorsList from 'components/UI-ColorsList/UI-ColorsList';
import UILogo from 'components/UI-Logo/UI-Logo';
import UITypesList from 'components/UI-TypesList/UI-TypesList';

import colorsListData from './ColorsList.data.json';
import typesListData from './TypesList.data.json';
import * as S from './UI-ColorsTypesLayout.styles';

const ColorsTypesLayout: React.FC = () => (
  <S.ColorsTypesLayout>
    <S.Logo>
      <UILogo />
    </S.Logo>
    <S.Content>
      <S.Title>Цветовая палитра и вариации текста</S.Title>
      <S.Wrapper>
        <UIColorsList colors={colorsListData} />
        <UITypesList types={typesListData} />
      </S.Wrapper>
    </S.Content>
  </S.ColorsTypesLayout>

);

export default ColorsTypesLayout;
