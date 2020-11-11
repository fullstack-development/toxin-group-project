import { memo } from 'react';

import * as S from './HeaderUserLogin.styles';

const HeaderUserLogin = memo(() => (
  <S.HeaderUserLogin>
    <S.HeaderLoginButton href="/auth" isFlat>
      Войти
    </S.HeaderLoginButton>
    <S.HeaderLoginButton href="/registration" isFilled isFlat>
      Зарегистрироваться
    </S.HeaderLoginButton>
  </S.HeaderUserLogin>
));

HeaderUserLogin.displayName = 'HeaderUserLogin';

export default HeaderUserLogin;
