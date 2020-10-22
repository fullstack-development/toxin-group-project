import { useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import PopUp from 'components/PopUp/PopUp';
import { passwordUpdateRequest } from 'redux/PasswordUpdate/redux/actions';

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

const PasswordUpdate = ({ user, statusText, startPasswordUpdateProcess }: Props): JSX.Element => {
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
  );
};

const mapState = (state: State) => ({
  user: state.authReducer.user,
  statusText: state.passwordUpdateReducer.statusText,
});

const mapDispatch = { startPasswordUpdateProcess: passwordUpdateRequest };

export default connect(mapState, mapDispatch)(PasswordUpdate);
