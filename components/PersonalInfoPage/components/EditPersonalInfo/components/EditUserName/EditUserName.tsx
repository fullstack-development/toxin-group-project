import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import { AppState } from 'redux/store.types';
import { usernameUpdateRequest } from 'redux/UsernameUpdate/redux/actions';

const mapState = (state: AppState) => ({
  ...state.usernameUpdateReducer,
});

const mapDispatch = { startUsernameUpdateProcess: usernameUpdateRequest };

type Props = {
  user: firebase.User;
  displayName: string;
} & ReturnType<typeof mapState> &
  typeof mapDispatch;

type FormData = {
  name: string;
  surname: string;
};

const EditUserName = ({
  user,
  displayName,
  isCompleted,
  statusText,
  startUsernameUpdateProcess,
}: Props): JSX.Element => {
  const [isVisiblePopUp, setVisiblePopUp] = useState(false);

  const onSubmit = ({ name, surname }: FormData) => {
    startUsernameUpdateProcess({ user, displayName: `${name} ${surname}` });
    setVisiblePopUp(true);
  };

  const handleConfirmButtonClick = () => {
    setVisiblePopUp(false);
  };

  const [name, surname] = displayName.split(' ');

  return (
    <Form
      initialValues={{ name, surname }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            <Field
              name="name"
              render={({ input }) => <Input {...input} label="Имя" placeholder="Имя" />}
            />
            <Field
              name="surname"
              render={({ input }) => <Input {...input} label="Фамилия" placeholder="Фамилия" />}
            />
            <Button isFlat isFilled>
              Сохранить
            </Button>
          </form>
          {isVisiblePopUp && isCompleted && (
            <PopUpNotification
              message={statusText}
              onConfirmButtonClick={handleConfirmButtonClick}
            />
          )}
        </>
      )}
    />
  );
};

export default connect(mapState, mapDispatch)(EditUserName);
