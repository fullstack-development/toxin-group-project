import { MouseEvent } from 'react';

import * as S from './NumberInput.styles';

type NumberInputProps = {
  min: number;
  max: number;
  currentValue: number;
  name: string;
  onIncrement: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  onDecrement: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
};

const NumberInput: React.FC<NumberInputProps> = ({
  min,
  max,
  currentValue,
  onDecrement,
  onIncrement,
  name,
}: NumberInputProps) => (
  <S.InputContainer>
    <S.Button disabled={currentValue === min} onClick={onDecrement} type="button">
      -
    </S.Button>
    <S.Input readOnly value={currentValue} name={name} />
    <S.Button disabled={currentValue === max} onClick={onIncrement} type="button">
      +
    </S.Button>
  </S.InputContainer>
);

export default NumberInput;
