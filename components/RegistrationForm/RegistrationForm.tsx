import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
import { Field, Form } from 'react-final-form';

import Api from 'api/api';
import { ProfileData } from 'api/entities/types';
import { UserCredential } from 'api/types';
import Input from 'components/Input/Input';
import RadioButton from 'components/RadioButton/RadioButton';
import Toggle from 'components/Toggle/Toggle';
import { emailValidator, dateValidator, dateFormatMask } from 'shared/helpers/validators';

import * as S from './RegistrationForm.styles';

type SnackbarState = {
  isOpen: boolean;
  text: string;
  theme?: string;
};

const RegistrationForm: React.FC = (): JSX.Element => {
  const [snackBarStatus, changeSnackBarStatus] = useState<SnackbarState>({
    isOpen: false,
    text: '',
    theme: '',
  });

  const handleSnackBarClose = () =>
    changeSnackBarStatus({
      ...snackBarStatus,
      isOpen: false,
    });

  const handleRegistrationFormSubmit = (formData: ProfileData): void => {
    const { email, password, name, surname, birthDate, gender, receiveOffers } = formData;

    Api.auth
      .signUp({
        email,
        password,
        name,
        surname,
        birthDate,
        gender,
        receiveOffers,
      })
      .then(({ user }: UserCredential) => {
        if (user) {
          changeSnackBarStatus({
            isOpen: true,
            text: 'Аккаунт успешно зарегестрирован, перенаправление на страницу авторизации...',
            theme: 'success',
          });

          setTimeout(() => {
            window.location.href = '/auth';
          }, 3000);
        }
      })
      .catch((error) => {
        changeSnackBarStatus({
          isOpen: true,
          text: error.message,
          theme: 'error',
        });
      });
  };

  return (
    <>
      <Form
        onSubmit={handleRegistrationFormSubmit}
        render={({ handleSubmit }) => (
          <S.RegistrationForm onSubmit={handleSubmit}>
            <S.Title>Регистрация аккаунта</S.Title>
            <Field
              name="name"
              render={({ input, meta }) => (
                <S.InputWrapper {...input} {...meta} placeholder="Имя" />
              )}
            />
            <Field
              name="surname"
              render={({ input, meta }) => (
                <S.InputWrapper {...input} {...meta} placeholder="Фамилия" />
              )}
            />
            <S.RadioButtonsWrapper>
              <RadioButton value="male" name="gender" label="Мужчина" />
              <RadioButton value="female" name="gender" label="Женщина" />
            </S.RadioButtonsWrapper>
            <Field
              name="birthDate"
              type="text"
              render={({ input, rest }) => (
                <Input
                  {...rest}
                  {...input}
                  placeholder="ДД.ММ.ГГГГ"
                  label="Дата рождения"
                  validators={[dateValidator]}
                  mask={dateFormatMask}
                />
              )}
            />
            <S.AccountEntryWrapper>
              <Field
                name="email"
                type="email"
                render={({ input, meta }) => (
                  <S.InputWrapper
                    {...input}
                    {...meta}
                    required
                    label="Данные для входа в сервис"
                    placeholder="Email"
                    validators={[emailValidator]}
                  />
                )}
              />
              <Field
                name="password"
                type="password"
                render={({ input, meta }) => (
                  <S.InputWrapper {...input} {...meta} required placeholder="Пароль" />
                )}
              />
            </S.AccountEntryWrapper>
            <S.SpecialOfferWrapper>
              <Toggle name="receiveOffers" label="Получать спецпредложения" />
            </S.SpecialOfferWrapper>
            <S.RegisterButton isFlat isLink={false} isFilled>
              Перейти к оплате
            </S.RegisterButton>
            <S.AlreadyRegisterWrapper>
              <span>Уже есть аккаунт на Toxin</span>
              <S.EntryButton isLink href="/auth">
                Войти
              </S.EntryButton>
            </S.AlreadyRegisterWrapper>
          </S.RegistrationForm>
        )}
      />
      <S.CustomSnackBar
        theme={snackBarStatus.theme}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackBarStatus.isOpen}
        autoHideDuration={3000}
        onClose={handleSnackBarClose}
        message={snackBarStatus.text}
        action={
          <>
            <IconButton
              size="medium"
              aria-label="close"
              color="inherit"
              onClick={handleSnackBarClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </>
  );
};

export default RegistrationForm;
