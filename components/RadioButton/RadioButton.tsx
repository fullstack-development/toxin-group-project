import * as S from './RadioButton.styles';

type RadioProps = {
  name: string;
  label: string;
  checked?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton: React.FC<RadioProps> = ({
  name, label, checked, value, onChange,
}: RadioProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <S.RadioButton>
      <S.HiddenInput type="radio" name={name} checked={checked} value={value} onChange={handleChange} />
      <S.Checkmark />
      <S.Label>{label}</S.Label>
    </S.RadioButton>
  );
};

export default RadioButton;
