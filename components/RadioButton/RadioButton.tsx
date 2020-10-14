import { Field } from 'react-final-form';

import * as S from './RadioButton.styles';

type RadioButtonProps = {
  name: string;
  label: string;
  value: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  label,
  checked,
  value,
  onChange,
}: RadioButtonProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <Field
      name={name}
      value={value}
      onChange={handleChange}
      type="radio"
      render={(props) => (
        <S.RadioButton>
          <S.HiddenInput {...props.input} checked={checked} />
          <S.Checkmark />
          <S.Label>{label}</S.Label>
        </S.RadioButton>
      )}
    />
  );
};

export default RadioButton;
