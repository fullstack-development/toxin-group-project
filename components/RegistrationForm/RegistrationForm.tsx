import { Field, Form } from 'react-final-form';

import RadioButton from 'components/RadioButton/RadioButton';
import Toggle from 'components/Toggle/Toggle';
import { emailValidator, dateValidator, dateFormatMask } from 'shared/helpers/validators';

import * as S from './RegistrationForm.styles';

const RegistrationForm: React.FC = (): JSX.Element => {
  const submitRegistrationForm = (formData: React.FormEvent<HTMLFormElement>): void => {
    formData;
  };

  return (
    <Form
      onSubmit={submitRegistrationForm}
      render={() => (
        <form>
          <S.RegistrationForm>
            <S.Title>Регистрация аккаунта</S.Title>
            <Field
              name="user-name"
              render={(props) => (
                <S.InputWrapper {...props.input} {...props.meta} placeholder="Имя" />
              )}
            />
            <Field
              name="user-surname"
              render={(props) => (
                <S.InputWrapper {...props.input} {...props.meta} placeholder="Фамилия" />
              )}
            />
            <S.RadioButtonsWrapper>
              <RadioButton value="gender-man" name="gender" label="Мужчина" />
              <RadioButton value="gender-woman" name="gender" label="Женщина" />
            </S.RadioButtonsWrapper>
            <Field
              name="date-birthday"
              render={(props) => (
                <S.InputWrapper
                  {...props.input}
                  {...props.meta}
                  label="Дата рождения"
                  placeholder="ДД.ММ.ГГГГ"
                  validators={[dateValidator]}
                  mask={dateFormatMask}
                />
              )}
            />
            <S.AccountEntryWrapper>
              <Field
                name="email"
                type="email"
                render={(props) => (
                  <S.InputWrapper
                    {...props.input}
                    {...props.meta}
                    label="Данные для входа в сервис"
                    validators={[emailValidator]}
                  />
                )}
              />
              <Field
                name="account-password"
                type="password"
                render={(props) => (
                  <S.InputWrapper {...props.input} {...props.meta} placeholder="Пароль" />
                )}
              />
            </S.AccountEntryWrapper>
            <Toggle name="special-offers" label="Получать спецпредложения" />
            <S.RegisterButton isFlat isLink={false} isFilled>
              Перейти к оплате
            </S.RegisterButton>
            <S.AlreadyRegisterWrapper>
              <span>Уже есть аккаунт на Toxin</span>
              <S.EntryButton isLink={false}>Войти</S.EntryButton>
            </S.AlreadyRegisterWrapper>
          </S.RegistrationForm>
        </form>
      )}
    />
  );
};

export default RegistrationForm;
