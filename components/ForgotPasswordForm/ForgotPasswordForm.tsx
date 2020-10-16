import { Form, Field } from 'react-final-form';

import { emailValidator } from 'shared/helpers/validators/emailValidator';

import * as S from './ForgotPasswordForm.style';

const ForgotPasswordForm = (): JSX.Element => {
  const handleForgotPasswordFormSubmit = (formData: React.FormEvent<HTMLFormElement>): void => {
    formData;
  };

  return (
    <S.ForgotPasswordForm>
      <S.Title>Восстановление аккаунта</S.Title>
      <Form
        onSubmit={handleForgotPasswordFormSubmit}
        render={() => (
          <form>
            <Field
              name="email"
              type="email"
              render={({ input, meta }) => (
                <S.InputWrapper
                  {...input}
                  {...meta}
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
    </S.ForgotPasswordForm>
  );
};

export default ForgotPasswordForm;
