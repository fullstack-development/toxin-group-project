import { memo, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import { usernameUpdate, completeUsernameUpdate } from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.model';
import { User } from 'services/api/Firebase/modules/Authentication';

type StateProps = {
  isPending: boolean;
  isSuccess: boolean;
  isCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isPending: state.profile.isUsernameUpdatePending,
  isSuccess: state.profile.isUsernameUpdateSuccess,
  isCompleted: state.profile.isUsernameUpdateCompleted,
  statusText: state.profile.usernameUpdateStatusText,
});

const mapDispatch = {
  startUsernameUpdate: usernameUpdate,
  stopUsernameUpdate: completeUsernameUpdate,
};

type OwnProps = {
  user: User;
  displayName: string;
  onChange: (title: string) => void;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

type FormData = {
  name: string;
  surname: string;
};

const EditDisplayName = memo(
  ({
    user,
    displayName,
    isPending,
    isSuccess,
    isCompleted,
    statusText,
    onChange,
    startUsernameUpdate,
    stopUsernameUpdate,
  }: Props) => {
    const onSubmit = ({ name, surname }: FormData) => {
      startUsernameUpdate({ user, displayName: `${name} ${surname}` });
    };

    const [name, surname] = displayName.split(' ');

    useEffect(() => {
      stopUsernameUpdate();
    }, [stopUsernameUpdate]);

    const handleConfirmButtonClick = () => {
      stopUsernameUpdate();
      if (isSuccess) onChange('');
    };

    const { t } = useTranslation('PersonalInfo');

    return (
      <Form
        initialValues={{ name, surname }}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <>
            <form onSubmit={handleSubmit}>
              <Field
                name="name"
                render={({ input }) => (
                  <Input
                    {...input}
                    label={t('First name')}
                    placeholder={t('First name')}
                    required
                  />
                )}
              />
              <Field
                name="surname"
                render={({ input }) => (
                  <Input {...input} label={t('Last name')} placeholder={t('Last name')} required />
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

export default connect(mapState, mapDispatch)(EditDisplayName);
