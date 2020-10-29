import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import { User } from 'api/Firebase/modules/Authentication/types';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import { emailUpdateRequest, emailUpdateCompleted } from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.types';
import { emailValidator } from 'shared/helpers/validators';

interface IStateProps {
  isCompleted: boolean;
  statusText: string;
}

const mapState = (state: AppState): IStateProps => ({
  isCompleted: state.profile.isEmailUpdateCompleted,
  statusText: state.profile.emailUpdateStatusText,
});

const mapDispatch = {
  startEmailUpdateProcess: emailUpdateRequest,
  stopEmailUpdateProcess: emailUpdateCompleted,
};

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
  stopEmailUpdateProcess,
}: Props): JSX.Element => {
  const onSubmit = ({ email: emailForUpdate }: { email: string }) => {
    startEmailUpdateProcess({ user, email: emailForUpdate });
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
              validate={emailValidator}
              render={({ input }) => (
                <Input {...input} placeholder="Email" validators={[emailValidator]} />
              )}
            />
            <Button isFlat isFilled>
              Сохранить
            </Button>
          </form>
          {isCompleted && (
            <PopUpNotification message={statusText} onConfirmButtonClick={stopEmailUpdateProcess} />
          )}
        </>
      )}
    />
  );
};

export default connect(mapState, mapDispatch)(EditEmail);
