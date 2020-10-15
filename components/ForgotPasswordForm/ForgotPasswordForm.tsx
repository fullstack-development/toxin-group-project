import { useState } from 'react';
import { Form, Field } from 'react-final-form';

import api from 'api/api';
import { emailValidator } from 'shared/helpers/validators/emailValidator';

import PopUp from './components/PopUp/PopUp';
import * as S from './ForgotPasswordForm.style';

type FormData = {
  email: string;
};

const ForgotPasswordForm = (): JSX.Element => {
  const [messagePopUp, setMessagePopUp] = useState('');
  const [isVisiblePopUp, setVisiblePopUp] = useState(false);

  const onFormSubmit = async ({ email }: FormData): Promise<void> => {
    try {
      await api.auth.resetPassword(email);
      setMessagePopUp(`Ссылка для восстановления пароля была отправлена на ${email}`);
    } catch (err) {
      setMessagePopUp('Произошла ошибка, повторите попытку позже.');
    } finally {
      setVisiblePopUp(true);
    }
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
        <PopUp message={messagePopUp} onConfirmButtonClick={handleConfirmButtonClick} />
      )}
    </S.ForgotPasswordForm>
  );
};

export default ForgotPasswordForm;
