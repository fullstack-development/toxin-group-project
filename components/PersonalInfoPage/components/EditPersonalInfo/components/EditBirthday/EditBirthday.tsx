import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import { User } from 'api/Firebase/modules/Authentication/types';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import { AppState } from 'redux/store.types';
import {
  updateAdditionalUserDataRequest,
  updateAdditionalUserDataCompleted,
} from 'redux/UpdateAdditionalUserData/redux/actions';
import { dateValidator, dateFormatMask } from 'shared/helpers/validators';

interface IStateProps {
  isCompleted: boolean;
  statusText: string;
}

const mapState = (state: AppState): IStateProps => state.updateAdditionalUserDataReducer;

const mapDispatch = {
  startUpdateAdditionalUserDataProcess: updateAdditionalUserDataRequest,
  stopUpdateAdditionalUserDataProcess: updateAdditionalUserDataCompleted,
};

type Props = {
  user: User;
  birthday: string;
} & ReturnType<typeof mapState> &
  typeof mapDispatch;

type FormData = {
  birthday: string;
};

const EditBirthday = ({
  user,
  birthday,
  isCompleted,
  statusText,
  startUpdateAdditionalUserDataProcess,
  stopUpdateAdditionalUserDataProcess,
}: Props): JSX.Element => {
  const onSubmit = ({ birthday: newBirthday }: FormData) => {
    startUpdateAdditionalUserDataProcess({ user, data: { birthDate: newBirthday } });
  };

  return (
    <Form
      initialValues={{ birthday }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            <Field
              name="birthday"
              render={({ input }) => (
                <Input
                  {...input}
                  placeholder="ДД.ММ.ГГГГ"
                  validators={[dateValidator]}
                  mask={dateFormatMask}
                />
              )}
            />
            <Button isFlat isFilled>
              Сохранить
            </Button>
          </form>
          {isCompleted && (
            <PopUpNotification
              message={statusText}
              onConfirmButtonClick={stopUpdateAdditionalUserDataProcess}
            />
          )}
        </>
      )}
    />
  );
};
export default connect(mapState, mapDispatch)(EditBirthday);
