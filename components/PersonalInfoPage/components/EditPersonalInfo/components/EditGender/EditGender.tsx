import { memo, useEffect } from 'react';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import Button from 'components/Button/Button';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import RadioButton from 'components/RadioButton/RadioButton';
import {
  updateAdditionalUserData,
  updateAdditionalUserDataCompleted,
} from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.model';
import { User } from 'services/api/Firebase/modules/Authentication/types';

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
  onChange: (title: string) => void;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

type FormData = {
  gender: 'female' | 'male';
};

const EditGender = memo(
  ({
    user,
    gender,
    isPending,
    isSuccess,
    isCompleted,
    statusText,
    onChange,
    startUpdateAdditionalUserData,
    stopUpdateAdditionalUserData,
  }: Props) => {
    const onSubmit = ({ gender: newGender }: FormData) => {
      startUpdateAdditionalUserData({ user, data: { gender: newGender } });
    };

    useEffect(() => {
      stopUpdateAdditionalUserData();
    }, [stopUpdateAdditionalUserData]);

    const mapGender = {
      Male: 'male',
      Female: 'female',
      Мужчина: 'male',
      Женщина: 'female',
    };

    const handleConfirmButtonClick = () => {
      stopUpdateAdditionalUserData();
      if (isSuccess) onChange('');
    };

    const { t } = useTranslation('PersonalInfo');

    return (
      <Form
        initialValues={{ gender: mapGender[gender] }}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <>
            <form onSubmit={handleSubmit}>
              <S.Gender>
                <RadioButton name="gender" value="male" label={t('Male')} />
                <RadioButton name="gender" value="female" label={t('Female')} />
              </S.Gender>
              <Button disabled={isPending} isFlat isFilled>
                {t('Save')}
              </Button>
            </form>
            {isCompleted && (
              <PopUpNotification
                message={t(statusText)}
                onConfirmButtonClick={handleConfirmButtonClick}
              />
            )}
          </>
        )}
      />
    );
  },
);

export default connect(mapState, mapDispatch)(EditGender);
