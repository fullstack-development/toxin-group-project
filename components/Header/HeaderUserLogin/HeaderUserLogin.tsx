import * as S from './HeaderUserLogin.styles';

const HeaderUserLogin: React.FC = (): JSX.Element => (
  <S.HeaderUserLogin>
    <S.HeaderLoginButton isLink={false} isFlat>
      Войти
    </S.HeaderLoginButton>
    <S.HeaderLoginButton isLink={false} isFilled isFlat>
      Зарегистрироваться
    </S.HeaderLoginButton>
  </S.HeaderUserLogin>
);

export default HeaderUserLogin;
