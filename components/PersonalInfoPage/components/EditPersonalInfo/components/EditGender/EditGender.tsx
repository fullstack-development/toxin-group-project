import { useEffect } from 'react';
import { Form } from 'react-final-form';
import { connect } from 'react-redux';

import { User } from 'api/Firebase/modules/Authentication/types';
import Button from 'components/Button/Button';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import RadioButton from 'components/RadioButton/RadioButton';
import {
  updateAdditionalUserData,
  updateAdditionalUserDataCompleted,
} from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.types';

import * as S from './EditGender.styles';

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
  gender: string;
  onChanged: (title: string) => void;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

type FormData = {
  gender: 'female' | 'male';
};

const EditGender = ({
  user,
  gender,
  isPending,
  isSuccess,
  isCompleted,
  statusText,
  onChanged,
  startUpdateAdditionalUserData,
  stopUpdateAdditionalUserData,
}: Props): JSX.Element => {
  const onSubmit = ({ gender: newGender }: FormData) => {
    startUpdateAdditionalUserData({ user, data: { gender: newGender } });
  };

  useEffect(() => {
    stopUpdateAdditionalUserData();
  }, [stopUpdateAdditionalUserData]);

  const mapGender = {
    Мужчина: 'male',
    Женщина: 'female',
  };

  const handleConfirmButtonClick = () => {
    stopUpdateAdditionalUserData();
    if (isSuccess) onChanged('');
  };

  return (
    <Form
      initialValues={{ gender: mapGender[gender] }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            <S.Gender>
              <RadioButton name="gender" value="male" label="Мужчина" />
              <RadioButton name="gender" value="female" label="Женщина" />
            </S.Gender>
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

export default connect(mapState, mapDispatch)(EditGender);
