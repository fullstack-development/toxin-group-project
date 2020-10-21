import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import { emailUpdateRequest } from 'redux/EmailUpdate/redux/actions';
import { emailValidator } from 'shared/helpers/validators';

import PopUp from '../PopUp/PopUp';

type Props = {
  user: firebase.User;
  email: string;
  statusText: string;
  startEmailUpdateProcess: ({ user, email }) => void;
};

type State = {
  emailUpdateReducer: Props;
};

const EditEmail = ({ user, email, statusText, startEmailUpdateProcess }: Props): JSX.Element => {
  const [isVisiblePopUp, setVisiblePopUp] = useState(false);

  const onSubmit = ({ email: emailForUpdate }: { email: string }) => {
    startEmailUpdateProcess({ user, email: emailForUpdate });
    setVisiblePopUp(true);
  };

  const handleConfirmButtonClick = () => {
    setVisiblePopUp(false);
  };

  return (
    <Form
      initialValues={{ email }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            <Field
              name="email"
              type="email"
              render={({ input }) => (
                <Input {...input} placeholder="Email" validators={[emailValidator]} />
              )}
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
  statusText: state.emailUpdateReducer.statusText,
});

const mapDispatch = { startEmailUpdateProcess: emailUpdateRequest };

export default connect(mapState, mapDispatch)(EditEmail);
