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

type StateProps = {
  isPending: boolean;
  isSuccess: boolean;
  isCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isPending: state.profile.isUpdateAdditionalUserDataPending,
  isSuccess: state.profile.isUpdateAdditionalUserDataSuccess,
  isCompleted: state.profile.isUpdateAdditionalUserDataCompleted,
  statusText: state.profile.updateAdditionalUserDataStatusText,
});

const mapDispatch = {
  startUpdateAdditionalUserData: updateAdditionalUserData,
  stopUpdateAdditionalUserData: updateAdditionalUserDataCompleted,
};

type OwnProps = {
  user: User;
  birthday: string;
  onChanged: (title: string) => void;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

type FormData = {
  birthday: string;
};

const EditBirthday = ({
  user,
  birthday,
  isPending,
  isSuccess,
  isCompleted,
  statusText,
  onChanged,
  startUpdateAdditionalUserData,
  stopUpdateAdditionalUserData,
}: Props): JSX.Element => {
  const onSubmit = ({ birthday: newBirthday }: FormData) => {
    startUpdateAdditionalUserData({ user, data: { birthDate: newBirthday } });
  };

  useEffect(() => {
    stopUpdateAdditionalUserData();
  }, [stopUpdateAdditionalUserData]);

  const handleConfirmButtonClick = () => {
    stopUpdateAdditionalUserData();
    if (isSuccess) onChanged('');
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
            <Button disabled={isPending} isFlat isFilled>
              Сохранить
            </Button>
          </form>
          {isCompleted && (
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
export default connect(mapState, mapDispatch)(EditBirthday);
