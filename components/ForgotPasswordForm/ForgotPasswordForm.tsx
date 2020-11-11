import { Form, Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import { passwordReset, completionPasswordReset } from 'redux/Auth/redux/actions';
import { AppState } from 'redux/store.types';
import { emailValidator } from 'shared/helpers/validators/emailValidator';

import * as S from './ForgotPasswordForm.style';

type StateProps = {
  isCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isCompleted: state.auth.isPasswordResetCompleted,
  statusText: state.auth.passwordResetStatusText,
});

const mapDispatch = {
  startPasswordReset: passwordReset,
  stopPasswordReset: completionPasswordReset,
};

type FormData = {
  email: string;
};

type Props = StateProps & typeof mapDispatch;

const ForgotPasswordForm = ({
  isCompleted,
  statusText,
  startPasswordReset,
  stopPasswordReset,
}: Props): JSX.Element => {
  const onFormSubmit = ({ email }: FormData) => {
    startPasswordReset(email);
  };
  const { t } = useTranslation(['ForgotPasswordForm', 'Buttons']);

  return (
    <S.ForgotPasswordForm>
      <S.Title>{t('Account recovery')}</S.Title>
      <Form
        onSubmit={onFormSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="email"
              type="email"
              render={({ input, meta }) => (
                <S.InputWrapper
                  {...input}
                  {...meta}
                  label={t('Email address')}
                  placeholder="Email"
                  validators={[emailValidator]}
                />
              )}
            />
            <S.NextButton isFlat isFilled>
              {t('Buttons:Next')}
            </S.NextButton>
          </form>
        )}
      />
      {isCompleted && (
        <PopUpNotification message={statusText} onConfirmButtonClick={stopPasswordReset} />
      )}
    </S.ForgotPasswordForm>
  );
};

export default connect(mapState, mapDispatch)(ForgotPasswordForm);
