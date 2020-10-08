import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
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
  isAuthSuccess: boolean;
  isAuthProcessNow: boolean;
  authStatusText: string;
  requestToAuth: ({ email, password }) => void;
  breakAuthProcess: () => void;
};

const AccountEntry: React.FC<Props> = (props: Props): JSX.Element => {
  const {
    isAuthSuccess,
    isAuthProcessNow,
    authStatusText,
    requestToAuth,
    breakAuthProcess,
  } = props;

  const handleFormSubmit = (formData: userData): void => {
    const { email, password } = formData;

    requestToAuth({ email, password });
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
        theme={isAuthSuccess ? 'success' : 'error'}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={isAuthProcessNow}
        autoHideDuration={3000}
        onClose={breakAuthProcess}
        message={authStatusText}
        action={
          <>
            <IconButton size="medium" aria-label="close" color="inherit" onClick={breakAuthProcess}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </S.AccountEntry>
  );
};

export default AccountEntry;
