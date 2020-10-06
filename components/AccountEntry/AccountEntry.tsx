import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
import { Field, Form } from 'react-final-form';

import ArrowButton from 'components/ArrowButton/ArrowButton';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

import * as S from './AccountEntry.styled';

type userData = {
  email: string;
  password: string;
};

type Props = {
  hasAuth: boolean;
  authStatusText: string;
  requestToAuth: ({ email, password }) => void;
};

type SnackBar = {
  isShown: boolean;
  text: string;
  theme?: string;
};

const AccountEntry: React.FC<Props> = (props: Props): JSX.Element => {
  const { hasAuth, authStatusText, requestToAuth } = props;

  const [snackBar, setSnackBarStatus] = useState<SnackBar>({
    isShown: false,
    text: '',
    theme: 'error',
  });

  const handleFormSubmit = (formData: userData): void => {
    const { email, password } = formData;

    requestToAuth({ email, password });

    setSnackBarStatus({
      ...snackBar,
      isShown: !hasAuth ?? true,
    });
  };

  const hideSnackBar = (): void => {
    setSnackBarStatus({
      ...snackBar,
      isShown: false,
    });
  };

  return (
    <S.AccountEntry>
      <S.Title>Войти</S.Title>
      <Form
        onSubmit={handleFormSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <S.FieldsWrapper>
              <Field
                name="email"
                type="email"
                render={({ input, meta }) => <Input {...input} {...meta} placeholder="Email" />}
              />
              <Field
                name="password"
                type="password"
                render={({ input, meta }) => <Input {...input} {...meta} placeholder="Пароль" />}
              />
            </S.FieldsWrapper>
            <ArrowButton isLink={false} isFilled>
              Войти
            </ArrowButton>
            <S.ToRegisterWrapper>
              <span>Нет аккаунта на Toxin?</span>
              <Button isLink href="/registration">
                Создать
              </Button>
            </S.ToRegisterWrapper>
          </form>
        )}
      />
      <S.CustomSnackBar
        theme={hasAuth ? 'success' : 'error'}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackBar.isShown}
        autoHideDuration={3000}
        onClose={hideSnackBar}
        message={authStatusText}
        action={
          <>
            <IconButton size="medium" aria-label="close" color="inherit" onClick={hideSnackBar}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </S.AccountEntry>
  );
};

export default AccountEntry;
