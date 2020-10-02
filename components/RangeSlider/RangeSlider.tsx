import { useState } from 'react';
import { Field } from 'react-final-form';

import * as S from './RangeSlider.styles';

type RangeSliderProps = {
  initialValue: number[];
  name: string;
  max?: number;
  min?: number;
  step?: number;
  currency?: string;
  title?: string;
};

const RangeSlider: React.FC<RangeSliderProps> = ({
  initialValue,
  name,
  max = 16000,
  min = 0,
  step = 100,
  currency = '₽',
  title,
}: RangeSliderProps) => {
  const [value, setValue] = useState(initialValue);

  const getValueWithSpaces = (currentValue: number): string => {
    return currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
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
              <S.Value>{`${getValueWithSpaces(value[0])}${currency} - ${getValueWithSpaces(
                value[1],
              )}${currency}`}</S.Value>
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
