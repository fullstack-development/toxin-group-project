import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import PopUp from 'components/PopUp/PopUp';
import { emailUpdateRequest } from 'redux/EmailUpdate/redux/actions';
import { AppState } from 'redux/store.types';
import { emailValidator } from 'shared/helpers/validators';

const mapState = (state: AppState) => ({
  isCompleted: state.emailUpdateReducer.isCompleted,
  statusText: state.emailUpdateReducer.statusText,
});

const mapDispatch = { startEmailUpdateProcess: emailUpdateRequest };

type Props = {
  user: firebase.User;
  email: string;
} & ReturnType<typeof mapState> &
  typeof mapDispatch;

const EditEmail = ({
  user,
  email,
  isCompleted,
  statusText,
  startEmailUpdateProcess,
}: Props): JSX.Element => {
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
          {isVisiblePopUp && isCompleted && (
            <PopUp message={statusText} onConfirmButtonClick={handleConfirmButtonClick} />
          )}
        </>
      )}
    />
  );
};

export default connect(mapState, mapDispatch)(EditEmail);
