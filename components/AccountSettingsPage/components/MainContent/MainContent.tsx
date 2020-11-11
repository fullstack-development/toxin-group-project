import { memo } from 'react';

import Cards from '../Cards/Cards';
import * as S from './MainContent.styles';

const MainContent = memo(() => (
  <S.MainContent>
    <S.Title>Аккаунт</S.Title>
    <Cards />
  </S.MainContent>
));

MainContent.displayName = 'MainContent';

export default MainContent;
