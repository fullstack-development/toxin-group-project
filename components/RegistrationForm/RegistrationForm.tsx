import { Form } from 'react-final-form';

import Button from 'components/Button/Button';
import RadioButton from 'components/RadioButton/RadioButton';

import * as S from './RegistrationForm.styles';

const RegistrationForm: React.FC = (): JSX.Element => {
  const submitRegistrationForm = () => true;

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
            <S.InputWrapper name="date-birthday" placeholder="ДД.ММ.ГГГГ" label="Дата рождения" />
            <S.AccountEntryWrapper>
              <S.InputWrapper
                name="account-email"
                placeholder="Email"
                label="Данные для входа в сервис"
              />
              <S.InputWrapper name="account-password" placeholder="Пароль" />
            </S.AccountEntryWrapper>
            <RadioButton
              value="receive-special-offers"
              name="special-offers"
              label="Получать спецпредложения"
            />
            <S.Row>
              <span>Уже есть аккаунт на Toxin</span>
              <Button isLink={false}>Войти</Button>
            </S.Row>
          </S.RegistrationForm>
        </form>
      )}
    />
  );
};

export default RegistrationForm;
