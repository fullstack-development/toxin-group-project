import DayPicker, { DateUtils } from 'react-day-picker';
import React, { useState, useEffect } from 'react';

import Input from '../Input/Input';
import * as S from './DatePicker.styles';

type DatePickerProps = {
  isDropDown?: boolean;
  onChange: (e: React.ChangeEvent) => void;
}

const DatePicker: React.FC<DatePickerProps> = (props: DatePickerProps) => {
  const { isDropDown, onChange } = props;
  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const weekdaysShort = [
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб',
    'Вс',
  ];

  const [selectedDays, handleSelectDays] = useState({
    from: false,
    to: false,
  });

  const handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, selectedDays);
    handleSelectDays(range);
  };

  const { from, to } = selectedDays;

  return (
    <S.DatePickerContainer>
      <S.Form>
        <S.FormElement isDropDown={isDropDown}>
          <Input value={from || 'ДД.ММ.ГГГГ'} name="date from" onChange={onChange} label="date Dropdown" />
          <S.ExpandIcon />
        </S.FormElement>
        {!isDropDown
          && (
            <S.FormElement>
              <Input value={to || 'ДД.ММ.ГГГГ'} name="date to" onChange={onChange} label="date Dropdown" />
              <S.ExpandIcon />
            </S.FormElement>
          )}
      </S.Form>
      <S.DatePickerCalendar>
        <S.DatePicker
          months={months}
          weekdaysShort={weekdaysShort}
          selectedDays={[from, { from, to }]}
          onDayClick={handleDayClick}
        />
        <S.DatePickerControls>
          <S.DatePickerButton type={'basic'}> Очистить </S.DatePickerButton>
          <S.DatePickerButton type={'primary'}> Применить </S.DatePickerButton>
        </S.DatePickerControls>
      </S.DatePickerCalendar>
    </S.DatePickerContainer>
  );
};

export default DatePicker;
