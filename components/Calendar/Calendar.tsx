import React, { useState } from 'react';
import { DateUtils } from 'react-day-picker';

import { months, weekdaysShort } from 'shared/helpers/validators/dateValidators';

import * as S from './Calendar.styles';

type daysSelection = {
  from: boolean | Date;
  to: boolean | Date;
  enteredTo?: boolean | Date;
};

type Calendar = {
  isVisible?: boolean;
  onSelectDate?: (day: any) => void;
  onApply?: () => void;
}

const Calendar: React.FC<Calendar> = (props: Calendar) => {
  const has = Object.prototype.hasOwnProperty;
  const { onApply, onSelectDate, isVisible } = props;
  const [selectedDays, handleSelectDays] = useState<daysSelection>({
    from: false,
    to: false,
    enteredTo: null,
  });

  const isSelectingFirstDay = (dateFrom, dateTo, currentDay) => {
    const isBeforeFirstDay = dateFrom && DateUtils.isDayBefore(currentDay, dateFrom);
    const isRangeSelected = dateFrom && dateTo;
    return !dateFrom || isBeforeFirstDay || isRangeSelected;
  };

  const handleDayMouseEnter = (day) => {
    const { from, to } = selectedDays;

    if (!isSelectingFirstDay(from, to, day)) {
      handleSelectDays({
        ...selectedDays,
        enteredTo: day,
      });
    }
  };

  const handleDayClick = (day) => {
    const range: daysSelection = DateUtils.addDayToRange(day, selectedDays);

    handleSelectDays(range);

    if (has.call(props, 'onSelectDate')) onSelectDate(range);
  };

  const handleApplyButtonClick = (e) => {
    e.preventDefault();

    if (has.call(props, 'onApply')) onApply();
  };

  const clearSelectedDate = (e) => {
    e.preventDefault();

    const clearedData = {
      from: undefined,
      to: undefined,
    };

    handleSelectDays(clearedData);

    if (has.call(props, 'onSelectDate')) onSelectDate(clearedData);
  };

  const { from, to } = selectedDays;
  const modifiers = { start: from, end: selectedDays.to };

  return (
    <S.CalendarContainer isVisible={isVisible}>
      <S.Calendar
        modifiers={modifiers}
        months={months}
        weekdaysShort={weekdaysShort}
        selectedDays={[from, { from, to }]}
        onDayClick={handleDayClick}
        onDayMouseEnter={handleDayMouseEnter}
      />
      <S.CalendarControls>
        <S.CalendarButton type="basic" onClick={clearSelectedDate}> Очистить </S.CalendarButton>
        <S.CalendarButton type="primary" onClick={handleApplyButtonClick}> Применить </S.CalendarButton>
      </S.CalendarControls>
    </S.CalendarContainer>
  );
};

export default Calendar;
