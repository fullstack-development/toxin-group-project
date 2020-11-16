import { memo, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import {
  updateAdditionalUserData,
  updateAdditionalUserDataCompleted,
} from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.types';
import { User } from 'services/api/Firebase/modules/Authentication/types';
import { dateValidator, dateFormatMask } from 'validators';

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
  onChange: (title: string) => void;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

type FormData = {
  birthday: string;
};

const EditBirthday = memo(
  ({
    user,
    birthday,
    isPending,
    isSuccess,
    isCompleted,
    statusText,
    onChange,
    startUpdateAdditionalUserData,
    stopUpdateAdditionalUserData,
  }: Props) => {
    const onSubmit = ({ birthday: newBirthday }: FormData) => {
      startUpdateAdditionalUserData({ user, data: { birthDate: newBirthday } });
    };

    useEffect(() => {
      stopUpdateAdditionalUserData();
    }, [stopUpdateAdditionalUserData]);

    const handleConfirmButtonClick = () => {
      stopUpdateAdditionalUserData();
      if (isSuccess) onChange('');
    };

    const { t } = useTranslation('PersonalInfo');

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
                    placeholder={t('DD.MM.YYYY')}
                    mask={dateFormatMask}
                  />
                )}
              />
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

export default connect(mapState, mapDispatch)(EditBirthday);
