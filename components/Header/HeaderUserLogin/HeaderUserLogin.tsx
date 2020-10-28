import { useTranslation } from 'react-i18next';

import * as S from './HeaderUserLogin.styles';

const HeaderUserLogin: React.FC = (): JSX.Element => {
  const { t } = useTranslation('HeaderUserLogin');

  return (
    <S.HeaderUserLogin>
      <S.HeaderLoginButton href="/auth" isFlat>
        {t('Sign in')}
      </S.HeaderLoginButton>
      <S.HeaderLoginButton href="/registration" isFilled isFlat>
        {t('Sign up')}
      </S.HeaderLoginButton>
    </S.HeaderUserLogin>
  );
};

export default HeaderUserLogin;
