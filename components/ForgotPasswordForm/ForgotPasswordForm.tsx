import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import { request } from 'redux/ResetPassword/redux/actions';
import { emailValidator } from 'shared/helpers/validators/emailValidator';

import PopUp from './components/PopUp/PopUp';
import * as S from './ForgotPasswordForm.style';

type Props = {
  statusText: string;
  startProcess: (email: string) => void;
};

type State = {
  reducer: Props;
};

type FormData = {
  email: string;
};

const ForgotPasswordForm = ({ startProcess, statusText }: Props): JSX.Element => {
  const [isVisiblePopUp, setVisiblePopUp] = useState(false);

  const onFormSubmit = ({ email }: FormData) => {
    startProcess(email);
    setVisiblePopUp(true);
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
      {isVisiblePopUp && statusText && (
        <PopUp message={statusText} onConfirmButtonClick={handleConfirmButtonClick} />
      )}
    </S.ForgotPasswordForm>
  );
};

const mapState = (state: State) => ({
  statusText: state.reducer.statusText,
});

const mapDispatch = {
  startProcess: request,
};

export default connect(mapState, mapDispatch)(ForgotPasswordForm);
