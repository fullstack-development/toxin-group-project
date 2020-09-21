import { Field } from 'react-final-form';

import * as S from './RadioButton.styles';

type RadioProps = {
  name: string;
  label: string;
  value: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton: React.FC<RadioProps> = ({
  name, label, checked, value, onChange,
}: RadioProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <Field
      name={name}
      value={value}
      onChange={handleChange}
      checked={checked}
      type="radio"
      render={(props) => (
        <S.RadioButton>
          <S.HiddenInput {...props.input} />
          <S.Checkmark />
          <S.Label>{label}</S.Label>
        </S.RadioButton>
      )}
    />
  );
};

export default RadioButton;
