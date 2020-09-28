import { Form } from 'react-final-form';

import RadioButton from 'components/RadioButton/RadioButton';
import Toggle from 'components/Toggle/Toggle';
import { dateValidator, dateFormatMask } from 'shared/helpers/validators';

import * as S from './RegistrationForm.styles';

const RegistrationForm: React.FC = (): JSX.Element => {
  const submitRegistrationForm = (formData: React.FormEvent<HTMLFormElement>): void => {
    console.log(formData);
  };

  return (
    <Form
      onSubmit={submitRegistrationForm}
      render={() => (
        <form>
          <S.RegistrationForm>
            <S.Title>Регистрация аккаунта</S.Title>
            <S.InputWrapper name="user-name" placeholder="Имя" />
            <S.InputWrapper name="user-surname" placeholder="Фамилия" />
            <S.RadioButtonsWrapper>
              <RadioButton value="gender-man" name="gender" label="Мужчина" />
              <RadioButton value="gender-woman" name="gender" label="Женщина" />
            </S.RadioButtonsWrapper>
            <S.InputWrapper
              name="date-birthday"
              placeholder="ДД.ММ.ГГГГ"
              label="Дата рождения"
              validators={[dateValidator]}
              mask={dateFormatMask}
            />
            <S.AccountEntryWrapper>
              <S.InputWrapper
                name="account-email"
                placeholder="Email"
                label="Данные для входа в сервис"
              />
              <S.InputWrapper name="account-password" placeholder="Пароль" />
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
