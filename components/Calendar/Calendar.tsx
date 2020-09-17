import React, { useState, useEffect, useRef } from 'react';
import { DateUtils } from 'react-day-picker';

// import { months, weekdaysShort } from 'shared/helpers/validators/dateValidators';
import TextButton from 'components/TextButton/TextButton';

import * as S from './Calendar.styles';

type daysSelection = {
  from: Date;
  to: Date;
  enteredTo?: Date;
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
  const [isShown, setVisibility] = useState(isVisible);
  const htmlContainer = useRef(null);

  const handleDocumentClick = (e: Event) => {
    if (isShown && !htmlContainer.current.contains(e.target)) setVisibility(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  const isSelectingFirstDay = (dateFrom, dateTo, currentDay) => {
    console.log(dateFrom, dateTo, currentDay);
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

  const handleDayClick = (day): void => {
    const range: daysSelection = DateUtils.addDayToRange(day, selectedDays);

    handleSelectDays(range);

    if (has.call(props, 'onSelectDate')) onSelectDate(range);
  };

  const handleApplyButtonClick = (e): void => {
    e.preventDefault();

    setVisibility(false);

    if (has.call(props, 'onApply')) onApply();
  };

  const clearSelectedDate = (e): void => {
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
    <S.CalendarContainer isVisible={isShown} ref={htmlContainer}>
      <S.Calendar
        modifiers={modifiers}
        // months={months}
        // weekdaysShort={weekdaysShort}
        selectedDays={[from, { from, to }]}
        onDayClick={handleDayClick}
        onDayMouseEnter={handleDayMouseEnter}
      />
      <S.CalendarControls>
        <TextButton secondary onClick={clearSelectedDate}>Очистить</TextButton>
        <TextButton onClick={handleApplyButtonClick}>Применить</TextButton>
      </S.CalendarControls>
    </S.CalendarContainer>
  );
};

export default Calendar;
