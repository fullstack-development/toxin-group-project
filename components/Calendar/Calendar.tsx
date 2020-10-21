import React, { useState, useEffect, useRef } from 'react';
import { DateUtils, DayModifiers } from 'react-day-picker';

import TextButton from 'components/TextButton/TextButton';
import { months, weekdaysShort } from 'shared/helpers/validators';

import * as S from './Calendar.styles';
import NavBar from './components/NavBar/NavBar';

type SelectedDate = null | Date;

type DaysSelection = {
  from: SelectedDate;
  to: SelectedDate;
  enteredTo?: SelectedDate;
};

type Props = {
  onChangeVisible: (isVisible: boolean) => void;
  onApply?: (...args: unknown[]) => unknown;
  onSelectDate?: (data: DaysSelection) => void;
  onClose?: () => void;
} & S.CalendarContainer;

const Calendar = ({
  onChangeVisible,
  onApply,
  onClose,
  onSelectDate,
  isVisible = false,
}: Props): JSX.Element => {
  const [selectedDays, handleSelectDays] = useState<DaysSelection>({
    from: null,
    to: null,
    enteredTo: null,
  });
  const htmlContainer = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e: Event) => {
      if (isVisible && !htmlContainer.current.contains(e.target)) {
        onChangeVisible(false);
        if (onClose) onClose();
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [isVisible, onChangeVisible, onClose]);

  const applySelectingDays = (newRange: DaysSelection) => {
    handleSelectDays(newRange);
    if (onSelectDate) onSelectDate(newRange);
  };

  const handleDayClick = (day: SelectedDate, modifiers: DayModifiers): void => {
    if (modifiers.disabled) return;

    const range: DaysSelection = DateUtils.addDayToRange(day, selectedDays);

    applySelectingDays(range);
  };

  const handleApplyButtonClick = (): void => {
    onChangeVisible(false);

    if (onApply) onApply();
  };

  const clearSelectedDate = (): void => {
    const clearedData = { from: undefined, to: undefined };

    applySelectingDays(clearedData);
  };

  const { from, to } = selectedDays;
  const modifiers = { start: from, end: selectedDays.to };

  return (
    <S.CalendarContainer isVisible={isVisible} ref={htmlContainer}>
      <S.Calendar
        showOutsideDays
        modifiers={modifiers}
        months={months}
        weekdaysShort={weekdaysShort}
        selectedDays={[from, { from, to }]}
        disabledDays={{ before: new Date() }}
        onDayClick={handleDayClick}
        navbarElement={<NavBar />}
      />
      <S.CalendarControls>
        <TextButton type="button" isSecondary onClick={clearSelectedDate}>
          Очистить
        </TextButton>
        <TextButton type="button" onClick={handleApplyButtonClick}>
          Применить
        </TextButton>
      </S.CalendarControls>
    </S.CalendarContainer>
  );
};

export default Calendar;
