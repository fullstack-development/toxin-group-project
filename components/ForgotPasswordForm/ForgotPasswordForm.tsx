import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import { passwordResetCompleted, passwordResetRequest } from 'redux/Auth/redux/actions';
import { AppState } from 'redux/store.types';
import { emailValidator } from 'shared/helpers/validators/emailValidator';

import * as S from './ForgotPasswordForm.style';

interface StateProps {
  isCompleted: boolean;
  statusText: string;
}

const mapState = (state: AppState): StateProps => ({
  isCompleted: state.auth.isPasswordResetCompleted,
  statusText: state.auth.passwordResetStatusText,
});

const mapDispatch = {
  startPasswordResetProcess: passwordResetRequest,
  stopPasswordResetProcess: passwordResetCompleted,
};

type FormData = {
  email: string;
};

type Props = StateProps & typeof mapDispatch;

const ForgotPasswordForm = ({
  isCompleted,
  statusText,
  startPasswordResetProcess,
  stopPasswordResetProcess,
}: Props): JSX.Element => {
  const onFormSubmit = ({ email }: FormData) => {
    startPasswordResetProcess(email);
  };

  return (
    <S.ForgotPasswordForm>
      <S.Title>Восстановление аккаунта</S.Title>
      <Form
        onSubmit={onFormSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="email"
              type="email"
              render={({ input }) => (
                <S.InputWrapper
                  {...input}
                  label="Адрес электронной почты"
                  placeholder="Email"
                  validators={[emailValidator]}
                />
              )}
            />
            <S.NextButton isFlat isFilled>
              Далее
            </S.NextButton>
          </form>
        )}
      />
      {isCompleted && (
        <PopUpNotification message={statusText} onConfirmButtonClick={stopPasswordResetProcess} />
      )}
    </S.ForgotPasswordForm>
  );
};

export default connect(mapState, mapDispatch)(ForgotPasswordForm);
