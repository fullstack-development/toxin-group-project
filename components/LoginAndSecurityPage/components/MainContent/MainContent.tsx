import { memo } from 'react';

import NavAccountSettings from 'components/NavAccountSettings/NavAccountSettings';

import Login from '../Login/Login';
import * as S from './MainContent.styles';

const MainContent = memo(() => (
  <S.MainContent>
    <NavAccountSettings title="Вход и безопасность" />
    <S.Title>Вход и безопасность</S.Title>
    <Login />
  </S.MainContent>
));

MainContent.displayName = 'MainContent';

export default MainContent;
