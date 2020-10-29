import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import { User } from 'api/Firebase/modules/Authentication/types';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import { usernameUpdateRequest, usernameUpdateCompleted } from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.types';

interface IStateProps {
  isCompleted: boolean;
  statusText: string;
}

const mapState = (state: AppState): IStateProps => ({
  isCompleted: state.profile.isUsernameUpdateCompleted,
  statusText: state.profile.usernameUpdateStatusText,
});

const mapDispatch = {
  startUsernameUpdateProcess: usernameUpdateRequest,
  stopUsernameUpdateProcess: usernameUpdateCompleted,
};

type Props = {
  user: User;
  displayName: string;
} & ReturnType<typeof mapState> &
  typeof mapDispatch;

type FormData = {
  name: string;
  surname: string;
};

const EditDisplayName = ({
  user,
  displayName,
  isCompleted,
  statusText,
  startUsernameUpdateProcess,
  stopUsernameUpdateProcess,
}: Props): JSX.Element => {
  const onSubmit = ({ name, surname }: FormData) => {
    startUsernameUpdateProcess({ user, displayName: `${name} ${surname}` });
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
          {isCompleted && (
            <PopUpNotification
              message={statusText}
              onConfirmButtonClick={stopUsernameUpdateProcess}
            />
          )}
        </>
      )}
    />
  );
};

export default connect(mapState, mapDispatch)(EditDisplayName);
