import { ChangeEvent, memo } from 'react';

import * as S from './Checkbox.styles';

type Props = {
  name: string;
  isChecked?: boolean;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  title?: string;
};

const Checkbox = memo(({ name, isChecked, label, title, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <S.Checkbox>
      <S.HiddenCheckbox
        name={name}
        type="checkbox"
        defaultChecked={isChecked}
        onChange={handleChange}
      />
      <S.Checkmark />
      <S.Label title={title}>
        {title && <S.Title>{title}</S.Title>}
        <span>{label}</span>
      </S.Label>
    </S.Checkbox>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
