import * as S from './HeaderUserLogin.styles';

const HeaderUserLogin: React.FC = (): JSX.Element => (
  <S.HeaderUserLogin>
    <S.HeaderLoginButton href="/auth" isFlat>
      Войти
    </S.HeaderLoginButton>
    <S.HeaderLoginButton href="/registration" isFilled isFlat>
      Зарегистрироваться
    </S.HeaderLoginButton>
  </S.HeaderUserLogin>
);

export default HeaderUserLogin;
