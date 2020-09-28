import { Field, Form } from 'react-final-form';

import ArrowButton from 'components/ArrowButton/ArrowButton';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

import * as S from './AccountEntry.styled';

const AccountEntry: React.FC = (): JSX.Element => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e;
  };

  return (
    <S.AccountEntry>
      <S.Title>Войти</S.Title>
      <Form
        onSubmit={handleFormSubmit}
        render={() => (
          <form>
            <S.FieldsWrapper>
              <Field
                name="user-email"
                type="email"
                render={({ input, meta }) => <Input {...input} {...meta} placeholder="Email" />}
              />
              <Field
                name="user-password"
                type="password"
                render={({ input, meta }) => <Input {...input} {...meta} placeholder="Пароль" />}
              />
            </S.FieldsWrapper>
            <ArrowButton isLink={false} isFilled>
              Войти
            </ArrowButton>
            <S.ToRegisterWrapper>
              <span>Нет аккаунта на Toxin?</span>
              <Button isLink={false}>Создать</Button>
            </S.ToRegisterWrapper>
          </form>
        )}
      />
    </S.AccountEntry>
  );
};

export default AccountEntry;
