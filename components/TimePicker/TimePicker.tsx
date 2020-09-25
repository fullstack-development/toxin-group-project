import React, { useState } from 'react';
import { Field } from 'react-final-form';

import Calendar from '../Calendar/Calendar';
import Input from '../Input/Input';
import * as S from './TimePicker.styles';

type TimePickerProps = {
  labelName: string;
  dateFrom?: Date;
  dateTo?: Date;
  dateFromLabelText?: string;
  dateToLabelText?: string;
  onChange?: (e: React.ChangeEvent) => void;
} & S.ContainerElement;

const TimePicker: React.FC<TimePickerProps> = (props: TimePickerProps): JSX.Element => {
  const { type, dateFrom, dateTo, labelName, dateFromLabelText, dateToLabelText } = props;
  const [isCalendarVisible, setCalendarVisibility] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState({
    from: dateFrom,
    to: dateTo,
  });

  const { from, to } = selectedDateRange;

  const getDateFrom = (): string => {
    const dateOptions: { day: string; month: string } = {
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

  const openCalendar = (): void => {
    setCalendarVisibility(true);
  };

  const closeCalendar = (): void => {
    setCalendarVisibility(false);
  };

  return (
    <S.Container>
      <S.ContainerElement type={type} onClick={openCalendar}>
        <Field
          name={`${labelName}-date-from`}
          type="text"
          render={(fieldProps) => (
            <Input
              {...fieldProps.input}
              {...fieldProps.meta}
              value={from ? getDateFrom() : getMaskedDate()}
              label={dateFromLabelText}
              placeholder="date from"
              readOnly
            />
          )}
        />
        <S.ExpandIcon />
      </S.ContainerElement>
      {type === 'double' && (
        <S.ContainerElement onClick={openCalendar}>
          <Field
            name={`${labelName}-date-to`}
            render={(fieldProps) => (
              <Input
                {...fieldProps.input}
                {...fieldProps.meta}
                value={to ? to.toLocaleDateString('ru-RU') : getMaskedDate()}
                label={dateToLabelText}
                placeholder="date to"
                readOnly
              />
            )}
          />
          <S.ExpandIcon />
        </S.ContainerElement>
      )}
      {isCalendarVisible && (
        <Calendar
          isVisible={isCalendarVisible}
          onSelectDate={setSelectedDateRange}
          onApply={closeCalendar}
          onClose={closeCalendar}
        />
      )}
    </S.Container>
  );
};

export default TimePicker;
