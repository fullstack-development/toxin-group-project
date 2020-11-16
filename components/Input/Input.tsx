import { useState, InputHTMLAttributes, memo } from 'react';

import { composeValidators, makeRequired, Validator } from 'shared/helpers/validators';

import * as S from './Input.styles';

export type InputProps = {
  validators?: Array<Validator>;
  label?: string;
  mask?: Array<RegExp | string>;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = memo(
  ({ name, placeholder, type, value, label, mask, validators, onChange, ...rest }: InputProps) => {
    const [error, setError] = useState('');

    const validate = (inputValue: string | number | readonly string[]) => {
      const allValidators = rest.required ? validators.concat([makeRequired]) : validators;
      const validator = composeValidators(allValidators);
      setError(validator(inputValue));
    };

    const handleBlur = () => {
      if (validators) {
        validate(value);
      }
    };

    return (
      <S.Input>
        <label>
          {label && <S.LabelText>{label}</S.LabelText>}
          {mask ? (
            <S.MaskedField
              {...rest}
              placeholder={placeholder}
              mask={mask}
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={handleBlur}
            />
          ) : (
            <S.Field
              {...rest}
              placeholder={placeholder}
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={handleBlur}
            />
          )}
        </label>
        <S.ErrorMessage>{error}</S.ErrorMessage>
      </S.Input>
    );
  },
);

export default Input;
