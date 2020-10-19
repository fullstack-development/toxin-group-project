import { Field } from 'react-final-form';

import * as S from './Toggle.styles';

type ToggleProps = {
  name: string;
  checked?: boolean;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Toggle: React.FC<ToggleProps> = ({ name, checked, label, value, onChange }: ToggleProps) => (
  <Field
    name={name}
    value={value}
    onChange={onChange}
    type="checkbox"
    render={(props) => (
      <S.Toggle>
        <S.HiddenInput {...props.input} checked={checked} />
        <S.Checkmark />
        {label && <S.Label>{label}</S.Label>}
      </S.Toggle>
    )}
  />
);

export default Toggle;
