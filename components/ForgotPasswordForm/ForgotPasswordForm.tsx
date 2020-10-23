import { useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import { passwordResetRequest } from 'redux/PasswordReset/redux/actions';
import { AppState } from 'redux/store.types';
import { emailValidator } from 'shared/helpers/validators/emailValidator';

import * as S from './ForgotPasswordForm.style';

const mapState = (state: AppState) => state.passwordResetReducer;

const mapDispatch = {
  startPasswordResetProcess: passwordResetRequest,
};

type FormData = {
  email: string;
};

type Props = ReturnType<typeof mapState> & typeof mapDispatch;

const ForgotPasswordForm = ({
  isCompleted,
  statusText,
  startPasswordResetProcess,
}: Props): JSX.Element => {
  const [isVisiblePopUp, setVisiblePopUp] = useState(false);

  useEffect(() => {
    setVisiblePopUp(isCompleted);
  }, [isCompleted]);

  const onFormSubmit = ({ email }: FormData) => {
    startPasswordResetProcess(email);
  };

  const handleConfirmButtonClick = () => {
    setVisiblePopUp(false);
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
      {isVisiblePopUp && (
        <PopUpNotification message={statusText} onConfirmButtonClick={handleConfirmButtonClick} />
      )}
    </S.ForgotPasswordForm>
  );
};

export default connect(mapState, mapDispatch)(ForgotPasswordForm);
