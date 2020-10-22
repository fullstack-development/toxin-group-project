import { useState } from 'react';

import TextButton from 'components/TextButton/TextButton';

import PasswordUpdate from '../PasswordUpdate/PasswordUpdate';
import * as S from './Login.styles';

const Login = (): JSX.Element => {
  const [isEdit, setEdit] = useState(false);

  return (
    <S.Login>
      <S.Title>Вход</S.Title>
      <S.Header>
        <S.Subtitle>Пароль</S.Subtitle>
        <TextButton type="button" onClick={() => setEdit(!isEdit)}>
          {isEdit ? 'Отменить' : 'Изменить'}
        </TextButton>
      </S.Header>
      <S.Content>
        <S.Description>{isEdit ? '' : 'Изменение текущего пароля'}</S.Description>
        {isEdit && <PasswordUpdate />}
      </S.Content>
    </S.Login>
  );
};

export default Login;
