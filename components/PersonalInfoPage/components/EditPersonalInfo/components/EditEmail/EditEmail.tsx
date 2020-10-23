import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import { User } from 'api/Firebase/modules/Authentication/types';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import { emailUpdateRequest } from 'redux/EmailUpdate/redux/actions';
import { AppState } from 'redux/store.types';
import { emailValidator } from 'shared/helpers/validators';

const mapState = (state: AppState) => ({
  ...state.emailUpdateReducer,
});

const mapDispatch = { startEmailUpdateProcess: emailUpdateRequest };

type Props = {
  user: User;
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

export default connect(mapState, mapDispatch)(EditEmail);
