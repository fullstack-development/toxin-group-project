import * as S from './Checkbox.styles';

type CheckboxProps = {
  name: string;
  isChecked?: boolean;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name, isChecked, value, label, onChange,
}: CheckboxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <S.Checkbox>
      <S.HiddenCheckbox name={name} type="checkbox" value={value} checked={isChecked} onChange={handleChange} />
      <S.Checkmark />
      <S.Label>{label}</S.Label>
    </S.Checkbox>
  );
};

export default Checkbox;
