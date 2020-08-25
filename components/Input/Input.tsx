/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

import { composeValidators, makeRequired, Validator } from 'shared/helpers/validators';

import {
  StyledInput, Field, LabelText, MaskedField, ErrorMessage,
} from './Input.styles';

type InputProps = {
  name: string;
  placeholder: string;
  type: string;
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

  const handleChange = (e: React.ChangeEvent) => {
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
    <StyledInput>
      <label>
        <LabelText>{label}</LabelText>
        {mask ? (
          <MaskedField
            placeholder={placeholder}
            mask={mask}
            type={type}
            name={name}
            value={value}
            onChange={(e) => onChange(e)}
            onBlur={handleBlur}
          />
        ) : (
          <Field
            {...rest}
            placeholder={placeholder}
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}
        <ErrorMessage>{error}</ErrorMessage>
      </label>
    </StyledInput>
  );
};

export default Input;
