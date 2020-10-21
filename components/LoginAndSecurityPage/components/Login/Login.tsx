import { useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import PopUp from 'components/PopUp/PopUp';
import TextButton from 'components/TextButton/TextButton';
import { passwordUpdateRequest } from 'redux/PasswordUpdate/redux/actions';

import * as S from './Login.styles';

type Props = {
  user: firebase.User;
  statusText: string;
  startPasswordUpdateProcess: ({ user, currentPassword, newPassword }) => void;
};

type State = {
  authReducer: Props;
  passwordUpdateReducer: Props;
};

type FormData = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const Login = ({ user, statusText, startPasswordUpdateProcess }: Props): JSX.Element => {
  const [isEdit, setEdit] = useState(false);
  const [isVisiblePopUp, setVisiblePopUp] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState('');

  useEffect(() => {
    setPopUpMessage(statusText);
  }, [statusText]);

  const onSubmit = ({ currentPassword, newPassword, confirmPassword }: FormData) => {
    if (newPassword === confirmPassword) {
      startPasswordUpdateProcess({ user, currentPassword, newPassword });
    } else {
      setPopUpMessage('Пароли не совпадают');
    }
    setVisiblePopUp(true);
  };

  const handleConfirmButtonClick = () => {
    setVisiblePopUp(false);
  };

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
        {isEdit && (
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <>
                <form onSubmit={handleSubmit}>
                  <Field
                    name="currentPassword"
                    type="password"
                    render={({ input }) => <Input {...input} label="Текущий пароль" />}
                  />
                  <Field
                    name="newPassword"
                    type="password"
                    render={({ input }) => <Input {...input} label="Новый пароль" />}
                  />
                  <Field
                    name="confirmPassword"
                    type="password"
                    render={({ input }) => <Input {...input} label="Подтвердите пароль" />}
                  />
                  <Button isFlat isFilled>
                    Обновить пароль
                  </Button>
                </form>
                {isVisiblePopUp && popUpMessage && (
                  <PopUp message={popUpMessage} onConfirmButtonClick={handleConfirmButtonClick} />
                )}
              </>
            )}
          />
        )}
      </S.Content>
    </S.Login>
  );
};

const mapState = (state: State) => ({
  user: state.authReducer.user,
  statusText: state.passwordUpdateReducer.statusText,
});

const mapDispatch = { startPasswordUpdateProcess: passwordUpdateRequest };

export default connect(mapState, mapDispatch)(Login);
