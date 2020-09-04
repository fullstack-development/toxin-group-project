import { useState } from 'react';

import { composeValidators, makeRequired, Validator } from 'shared/helpers/validators';

import * as S from './Input.styles';

type InputProps = {
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  validators?: Array<Validator>;
  label?: string;
  isRequired?: boolean;
  mask?: Array<RegExp | string>;
  onChange: (e: React.ChangeEvent) => void;
};

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  type,
  value,
  label,
  mask,
  isRequired,
  validators,
  onChange,
  ...rest
}: InputProps) => {
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const validate = (inputValue: string) => {
    const allValidators = isRequired ? validators.concat([makeRequired]) : validators;
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
        <S.LabelText>{label}</S.LabelText>
        {mask ? (
          <S.MaskedField
            placeholder={placeholder}
            mask={mask}
            type={type}
            name={name}
            value={value}
            tabIndex={0}
            onChange={(e) => onChange(e)}
            onBlur={handleBlur}
          />
        ) : (
          <S.Field
            {...rest}
            placeholder={placeholder}
            type={type}
            name={name}
            value={value}
            tabIndex={0}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}
        <S.ErrorMessage>{error}</S.ErrorMessage>
      </label>
    </S.Input>
  );
};

export default Input;
