import { useState } from 'react';
import { Field } from 'react-final-form';

import * as S from './RangeSlider.styles';

type Props = {
  initialValue: number[];
  name: string;
  max?: number;
  min?: number;
  step?: number;
  currency?: string;
  title?: string;
};

const RangeSlider: React.FC<Props> = ({
  initialValue,
  name,
  max = 16000,
  min = 0,
  step = 100,
  currency = '₽',
  title,
}: Props) => {
  const [value, setValue] = useState(initialValue);

  const getValueWithSpaces = (currentValue: number): string => {
    return currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '); // TODO: использовать функцию для форматирования даты из helper'ов
  };

  const getValuesRangeString = () => {
    return `${getValueWithSpaces(value[0])}${currency} - ${getValueWithSpaces(
      value[1],
    )}${currency}`;
  };

  return (
    <Field
      name={name}
      parse={() => value}
      render={({ input }) => {
        const handleChange = (_, currentValue) => {
          setValue(currentValue);
        };

        return (
          <>
            <S.Description title={title}>
              {title && <S.Title>{title}</S.Title>}
              <S.Value>{getValuesRangeString()}</S.Value>
            </S.Description>
            <S.RangeSlider
              aria-labelledby={name}
              max={max}
              min={min}
              onChange={handleChange}
              onPointerUp={input.onChange}
              value={value}
              step={step}
            />
          </>
        );
      }}
    />
  );
};

export default RangeSlider;
