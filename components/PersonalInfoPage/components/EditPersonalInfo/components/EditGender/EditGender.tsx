import { useEffect } from 'react';
import { Form } from 'react-final-form';
import { connect } from 'react-redux';

import { User } from 'api/Firebase/modules/Authentication/types';
import Button from 'components/Button/Button';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import RadioButton from 'components/RadioButton/RadioButton';
import { AppState } from 'redux/store.types';
import {
  updateAdditionalUserDataRequest,
  updateAdditionalUserDataCompleted,
} from 'redux/UpdateAdditionalUserData/redux/actions';

import * as S from './EditGender.styles';

interface IStateProps {
  isCompleted: boolean;
  statusText: string;
}

const mapState = (state: AppState): IStateProps => ({
  isCompleted: state.updateAdditionalUserData.isCompleted,
  statusText: state.updateAdditionalUserData.statusText,
});

const mapDispatch = {
  startUpdateAdditionalUserDataProcess: updateAdditionalUserDataRequest,
  stopUpdateAdditionalUserDataProcess: updateAdditionalUserDataCompleted,
};

type Props = {
  user: User;
  gender: string;
} & ReturnType<typeof mapState> &
  typeof mapDispatch;

type FormData = {
  gender: string;
};

const EditGender = ({
  user,
  gender,
  isCompleted,
  statusText,
  startUpdateAdditionalUserDataProcess,
  stopUpdateAdditionalUserDataProcess,
}: Props): JSX.Element => {
  const onSubmit = ({ gender: newGender }: FormData) => {
    startUpdateAdditionalUserDataProcess({ user, data: { gender: newGender } });
  };

  useEffect(() => {
    stopUpdateAdditionalUserDataProcess();
  }, [stopUpdateAdditionalUserDataProcess]);

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
              onConfirmButtonClick={stopUpdateAdditionalUserDataProcess}
            />
          )}
        </>
      )}
    />
  );
};

export default connect(mapState, mapDispatch)(EditGender);
