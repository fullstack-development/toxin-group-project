import { useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import PopUp from 'components/PopUp/PopUp';
import { passwordUpdateRequest } from 'redux/PasswordUpdate/redux/actions';
import { AppState } from 'redux/store.types';

const mapState = (state: AppState) => ({
  user: state.authReducer.user,
  isCompleted: state.passwordUpdateReducer.isCompleted,
  statusText: state.passwordUpdateReducer.statusText,
});

const mapDispatch = { startPasswordUpdateProcess: passwordUpdateRequest };

type Props = ReturnType<typeof mapState> & typeof mapDispatch;

type FormData = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const PasswordUpdate = ({
  user,
  isCompleted,
  statusText,
  startPasswordUpdateProcess,
}: Props): JSX.Element => {
  const [isVisiblePopUp, setVisiblePopUp] = useState(false);

  useEffect(() => {
    setVisiblePopUp(isCompleted);
  }, [isCompleted]);

  const onSubmit = ({ currentPassword, newPassword, confirmPassword }: FormData) => {
    startPasswordUpdateProcess({ user, currentPassword, newPassword, confirmPassword });
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
              render={({ input }) => <Input {...input} minLength={6} label="Текущий пароль" />}
            />
            <Field
              name="newPassword"
              type="password"
              render={({ input }) => <Input {...input} minLength={6} label="Новый пароль" />}
            />
            <Field
              name="confirmPassword"
              type="password"
              render={({ input }) => <Input {...input} minLength={6} label="Подтвердите пароль" />}
            />
            <Button isFlat isFilled>
              Обновить пароль
            </Button>
          </form>
          {isVisiblePopUp && (
            <PopUp message={statusText} onConfirmButtonClick={handleConfirmButtonClick} />
          )}
        </>
      )}
    />
  );
};

export default connect(mapState, mapDispatch)(PasswordUpdate);
