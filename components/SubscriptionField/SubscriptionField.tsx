import { FormHTMLAttributes } from 'react';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { emailValidator } from 'shared/helpers/validators';

import { InputProps } from '../Input/Input';
import * as S from './SubscriptionField.styles';

type SubscriptionProps = InputProps & FormHTMLAttributes<HTMLFormElement>;

// eslint-disable-next-line no-console
const handleSubmitClick = (values) => console.log(values);

const SubscriptionField: React.FC<InputProps> = ({ action, ...rest }: SubscriptionProps) => {
  const { t } = useTranslation('SubscriptionField');

  return (
    <Form
      onSubmit={handleSubmitClick}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="email"
            type="email"
            render={(props) => (
              <S.Container>
                <S.Input {...props.input} {...props.meta} {...rest} validators={[emailValidator]} />
                <S.SubmitButton aria-label={t('Send')} />
              </S.Container>
            )}
          />
        </form>
      )}
    />
  );
};

export default SubscriptionField;
