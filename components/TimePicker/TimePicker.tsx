import React, { useState } from 'react';

import Calendar from '../Calendar/Calendar';
import Input from '../Input/Input';
import * as S from './TimePicker.styles';

type TimePickerProps = {
  type?: 'single' | 'double';
  onChange?: (e: React.ChangeEvent) => void;
  dateFrom?: Date,
  dateTo?: Date,
  labelName: string;
}

const TimePicker: React.FC<TimePickerProps> = (props: TimePickerProps) => {
  const { type, dateFrom, dateTo, labelName } = props;
  const [isCalendarVisible, setCalendarVisibility] = useState(false);
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
    <S.Container>
      <S.ContainerElement type={type} onClick={() => { setCalendarVisibility(true); }}>
        <Input
          value={from ? getDateFrom() : getMaskedDate()}
          name={`${labelName} date from`}
          label="date Dropdown"
          placeholder="date from"
          onChange={() => {}}
        />
        <S.ExpandIcon />
      </S.ContainerElement>
      {type === 'double' && (
        <S.ContainerElement onClick={() => { setCalendarVisibility(true); }}>
          <Input
            value={to ? to.toLocaleDateString('ru-RU') : getMaskedDate()}
            name={`${labelName} date to`}
            label="date Dropdown"
            placeholder="date to"
            onChange={() => {}}
          />
          <S.ExpandIcon />
        </S.ContainerElement>
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
    </S.Container>
  );
};

export default TimePicker;
