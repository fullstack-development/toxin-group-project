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
  isCompleted: boolean;
  statusText: string;
};

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
  gender: string;
} & StateProps &
  typeof mapDispatch;

type FormData = {
  gender: string;
};

const EditGender = ({
  user,
  gender,
  isCompleted,
  statusText,
  startUpdateAdditionalUserData,
  stopUpdateAdditionalUserData,
}: Props): JSX.Element => {
  const onSubmit = ({ gender: newGender }: FormData) => {
    startUpdateAdditionalUserData({ user, data: { gender: newGender } });
  };

  useEffect(() => {
    stopUpdateAdditionalUserData();
  }, [stopUpdateAdditionalUserData]);

  return (
    <Form
      initialValues={{ gender }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            <S.Gender>
              <RadioButton name="gender" value="Мужчина" label="Мужчина" />
              <RadioButton name="gender" value="Женщина" label="Женщина" />
            </S.Gender>
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

export default connect(mapState, mapDispatch)(EditGender);
