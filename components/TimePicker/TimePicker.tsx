import React, { useState } from 'react';

import Calendar from '../Calendar/Calendar';
import Input from '../Input/Input';
import * as S from './TimePicker.styles';

type TimePickerProps = {
  type?: 'single' | 'double';
  onChange?: (e: React.ChangeEvent) => void;
  dateFrom?: Date,
  dateTo?: Date,
}

const TimePicker: React.FC<TimePickerProps> = (props: TimePickerProps) => {
  const { type, dateFrom, dateTo } = props;
  const [isCalendarVisible, setCalendarVisibility] = useState(true);
  const [selectedDateRange, setSelectedDateRange] = useState({
    from: dateFrom,
    to: dateTo,
  });

  const { from, to } = selectedDateRange;

  const getDateFrom = (): string => {
    const dateOptions: { day: string, month: string } = {
      day: 'numeric',
      month: 'short',
    };

    const selectedDateFrom: string = from.toLocaleDateString('ru-RU', dateOptions).replace('.', '');
    let selectedDateTo: string;

    if (to) {
      selectedDateTo = to.toLocaleDateString('ru-RU', dateOptions).replace('.', '');
    }

    return type === 'single'
      ? `${`${selectedDateFrom}`} ${to ? `- ${selectedDateTo}` : ''}`
      : from.toLocaleDateString('ru-RU');
  };

  const getMaskedDate = (): string => (type === 'single' ? 'Выберите дату' : 'ДД.ММ.ГГГГ');

  return (
    <S.Form>
      <S.FormElement type={type} onClick={() => { setCalendarVisibility(true); }}>
        <Input
          value={from ? getDateFrom() : getMaskedDate()}
          name="date from"
          label="date Dropdown"
          placeholder="date from"
          onChange={() => {}}
        />
        <S.ExpandIcon />
      </S.FormElement>
      {type === 'double' && (
        <S.FormElement onClick={() => { setCalendarVisibility(true); }}>
          <Input
            value={to ? to.toLocaleDateString('ru-RU') : getMaskedDate()}
            name="date to"
            label="date Dropdown"
            placeholder="date to"
            onChange={() => {}}
          />
          <S.ExpandIcon />
        </S.FormElement>
      )}
      {
        isCalendarVisible && (
          <Calendar
            isVisible={isCalendarVisible}
            onSelectDate={setSelectedDateRange}
            onApply={() => { setCalendarVisibility(false); }}
          />
        )
      }
    </S.Form>
  );
};

export default TimePicker;
