import { Field } from 'react-final-form';

import * as S from './Toggle.styles';

type ToggleProps = {
  name: string;
  checked?: boolean;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Toggle: React.FC<ToggleProps> = ({ name, checked, label, value, onChange }: ToggleProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e);

  return (
    <Field
      name={name}
      checked={checked}
      value={value}
      onChange={handleChange}
      type="checkbox"
      render={(props) => (
        <S.Toggle>
          <S.HiddenInput {...props.input} />
          <S.Checkmark />
          <S.Label>{label}</S.Label>
        </S.Toggle>
      )}
    />
  );
};

export default Toggle;
