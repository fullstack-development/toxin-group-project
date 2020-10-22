import { useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import { passwordResetRequest } from 'redux/PasswordReset/redux/actions';
import { emailValidator } from 'shared/helpers/validators/emailValidator';

import PopUp from './components/PopUp/PopUp';
import * as S from './ForgotPasswordForm.style';

type Props = {
  isCompleted: boolean;
  statusText: string;
  startPasswordResetProcess: (email: string) => void;
};

type State = {
  passwordResetReducer: Props;
};

type FormData = {
  email: string;
};

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
        <PopUp message={statusText} onConfirmButtonClick={handleConfirmButtonClick} />
      )}
    </S.ForgotPasswordForm>
  );
};

const mapState = (state: State) => ({
  isCompleted: state.passwordResetReducer.isCompleted,
  statusText: state.passwordResetReducer.statusText,
});

const mapDispatch = {
  startPasswordResetProcess: passwordResetRequest,
};

export default connect(mapState, mapDispatch)(ForgotPasswordForm);
