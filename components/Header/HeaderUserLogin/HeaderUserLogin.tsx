import * as S from './HeaderUserLogin.styles';

const HeaderUserLogin: React.FC = (): JSX.Element => (
  <S.HeaderUserLogin>
    <S.HeaderLoginButton isFlat>Войти</S.HeaderLoginButton>
    <S.HeaderLoginButton isFilled isFlat>
      Зарегистрироваться
    </S.HeaderLoginButton>
  </S.HeaderUserLogin>
);

export default HeaderUserLogin;
