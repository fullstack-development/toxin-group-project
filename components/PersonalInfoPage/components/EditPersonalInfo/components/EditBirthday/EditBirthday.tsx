import { useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import { User } from 'api/Firebase/modules/Authentication/types';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import {
  updateAdditionalUserData,
  updateAdditionalUserDataCompleted,
} from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.types';
import { dateValidator, dateFormatMask } from 'shared/helpers/validators';

interface StateProps {
  isCompleted: boolean;
  statusText: string;
}

const mapState = (state: AppState): StateProps => ({
  isCompleted: state.profile.isUpdateAdditionalUserDataCompleted,
  statusText: state.profile.updateAdditionalUserDataStatusText,
});

const mapDispatch = {
  startUpdateAdditionalUserData: updateAdditionalUserData,
  stopUpdateAdditionalUserData: updateAdditionalUserDataCompleted,
};

type Props = {
  user: User;
  birthday: string;
} & StateProps &
  typeof mapDispatch;

type FormData = {
  birthday: string;
};

const EditBirthday = ({
  user,
  birthday,
  isCompleted,
  statusText,
  startUpdateAdditionalUserData,
  stopUpdateAdditionalUserData,
}: Props): JSX.Element => {
  const onSubmit = ({ birthday: newBirthday }: FormData) => {
    startUpdateAdditionalUserData({ user, data: { birthDate: newBirthday } });
  };

  useEffect(() => {
    stopUpdateAdditionalUserData();
  }, [stopUpdateAdditionalUserData]);

  return (
    <Form
      initialValues={{ birthday }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            <Field
              name="birthday"
              validate={dateValidator}
              render={({ input }) => (
                <Input
                  {...input}
                  validators={[dateValidator]}
                  placeholder="ДД.ММ.ГГГГ"
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
              onConfirmButtonClick={stopUpdateAdditionalUserData}
            />
          )}
        </>
      )}
    />
  );
};
export default connect(mapState, mapDispatch)(EditBirthday);
