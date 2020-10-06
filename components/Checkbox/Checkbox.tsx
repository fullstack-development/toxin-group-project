import * as S from './Checkbox.styles';

type CheckboxProps = {
  name: string;
  isChecked?: boolean;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  isChecked,
  value,
  label,
  title,
  onChange,
}: CheckboxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <S.Checkbox>
      <S.HiddenCheckbox
        name={name}
        type="checkbox"
        value={value}
        checked={isChecked}
        onChange={handleChange}
      />
      <S.Checkmark />
      <S.Label title={title}>
        {title && <S.Title>{title}</S.Title>}
        <span>{label}</span>
      </S.Label>
    </S.Checkbox>
  );
};

export default Checkbox;
