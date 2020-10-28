import { Form, Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { emailValidator } from 'shared/helpers/validators/emailValidator';

import * as S from './ForgotPasswordForm.style';

const ForgotPasswordForm = (): JSX.Element => {
  const handleForgotPasswordFormSubmit = (formData: React.FormEvent<HTMLFormElement>): void => {
    formData;
  };
  const { t } = useTranslation('ForgotPasswordForm');

  return (
    <S.ForgotPasswordForm>
      <S.Title>{t('Account recovery')}</S.Title>
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
                  label={t('Email address')}
                  placeholder="Email"
                  validators={[emailValidator]}
                />
              )}
            />
            <S.NextButton isFlat isFilled>
              {t('Next')}
            </S.NextButton>
          </form>
        )}
      />
    </S.ForgotPasswordForm>
  );
};

export default ForgotPasswordForm;
