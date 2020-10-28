import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import { User } from 'api/Firebase/modules/Authentication';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import { passwordUpdateRequest, passwordUpdateCompleted } from 'redux/PasswordUpdate/redux/actions';
import { AppState } from 'redux/store.types';

interface IStateProps {
  user: User;
  isCompleted: boolean;
  statusText: string;
}

const mapState = (state: AppState): IStateProps => ({
  user: state.authReducer.user,
  isCompleted: state.passwordUpdateReducer.isCompleted,
  statusText: state.passwordUpdateReducer.statusText,
});

const mapDispatch = {
  startPasswordUpdateProcess: passwordUpdateRequest,
  stopPasswordUpdateProcess: passwordUpdateCompleted,
};

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
  stopPasswordUpdateProcess,
}: Props): JSX.Element => {
  const onSubmit = ({ currentPassword, newPassword, confirmPassword }: FormData) => {
    startPasswordUpdateProcess({ user, currentPassword, newPassword, confirmPassword });
  };

  const isUserRegistered = user.providerData.some((value) => value.providerId === 'password');

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            {isUserRegistered && (
              <Field
                name="currentPassword"
                type="password"
                render={({ input }) => <Input {...input} minLength={6} label="Текущий пароль" />}
              />
            )}
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
          {isCompleted && (
            <PopUpNotification
              message={statusText}
              onConfirmButtonClick={stopPasswordUpdateProcess}
            />
          )}
        </>
      )}
    />
  );
};

export default connect(mapState, mapDispatch)(PasswordUpdate);
