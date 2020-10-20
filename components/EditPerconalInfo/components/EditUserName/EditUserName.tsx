import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import { usernameUpdateRequest } from 'redux/UsernameUpdate/redux/actions';

import PopUp from '../PopUp/PopUp';

type Props = {
  user: firebase.User;
  displayName: string;
  statusText: string;
  startUsernameUpdateProcess: ({ user, displayName }) => void;
};

type State = {
  usernameUpdateReducer: Props;
};

type FormData = {
  name: string;
  surname: string;
};

const EditUserName = ({
  user,
  displayName,
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
          {isVisiblePopUp && statusText && (
            <PopUp message={statusText} onConfirmButtonClick={handleConfirmButtonClick} />
          )}
        </>
      )}
    />
  );
};

const mapState = (state: State) => ({
  statusText: state.usernameUpdateReducer.statusText,
});

const mapDispatch = { startUsernameUpdateProcess: usernameUpdateRequest };

export default connect(mapState, mapDispatch)(EditUserName);
