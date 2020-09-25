import { FormHTMLAttributes } from 'react';
import { Field } from 'react-final-form';

import { emailValidator } from 'shared/helpers/validators';

import { InputProps } from '../Input/Input';
import * as S from './SubscriptionField.styles';

type SubscriptionProps = InputProps & FormHTMLAttributes<HTMLFormElement>;

const SubscriptionField: React.FC<InputProps> = ({ action, ...rest }: SubscriptionProps) => (
  <Field
    name="email"
    type="email"
    render={(props) => (
      <S.Container>
        <S.Input {...props.input} {...props.meta} {...rest} validators={[emailValidator]} />
        <S.SubmitButton aria-label="Отправить" />
      </S.Container>
    )}
  />
);

export default SubscriptionField;
