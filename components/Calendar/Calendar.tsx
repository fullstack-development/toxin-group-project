import React, { useState, useEffect, useRef } from 'react';
import { DateUtils } from 'react-day-picker';

import TextButton from 'components/TextButton/TextButton';
import { months, weekdaysShort } from 'shared/helpers/validators/dateValidator';

import * as S from './Calendar.styles';

type DaysSelection = {
  from: SelectedDate;
  to: SelectedDate;
  enteredTo?: SelectedDate;
};

type Calendar = {
  isVisible?: boolean;
  onApply?: (...args: unknown[]) => unknown;
};

type SelectedDate = null | Date;

type NavBar = {
  onPreviousClick?(callback?: () => void): void;
  onNextClick?(callback?: () => void): void;
};

const NavBar = ({ onPreviousClick, onNextClick }: NavBar) => {
  const handlePreviousButtonClick = () => onPreviousClick();
  const handleNextButtonClick = () => onNextClick();

  return (
    <div>
      <S.NavBarButton type="button" onClick={handlePreviousButtonClick}>
        arrow_back
      </S.NavBarButton>
      <S.NavBarButton type="button" onClick={handleNextButtonClick}>
        arrow_forward
      </S.NavBarButton>
    </div>
  );
};

const Calendar: React.FC<Calendar> = (props: Calendar) => {
  const has = Object.prototype.hasOwnProperty;
  const { onApply, isVisible } = props;
  const [selectedDays, handleSelectDays] = useState<DaysSelection>({
    from: null,
    to: null,
    enteredTo: null,
  });
  const [isShown, setVisibility] = useState(isVisible);
  const htmlContainer = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e: Event) => {
      if (isShown && !htmlContainer.current.contains(e.target)) setVisibility(false);
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [isShown]);

  const isSelectingFirstDay = (
    dateFrom: SelectedDate,
    dateTo: SelectedDate,
    currentDay: SelectedDate,
  ) => {
    const isBeforeFirstDay = dateFrom && DateUtils.isDayBefore(currentDay, dateFrom);
    const isRangeSelected = dateFrom && dateTo;
    return !dateFrom || isBeforeFirstDay || isRangeSelected;
  };

  const handleDayMouseEnter = (day: SelectedDate) => {
    const { from, to } = selectedDays;

    if (!isSelectingFirstDay(from, to, day)) {
      handleSelectDays({
        ...selectedDays,
        enteredTo: day,
      });
    }
  };

  const handleDayClick = (day: SelectedDate): void => {
    const range: DaysSelection = DateUtils.addDayToRange(day, selectedDays);

    handleSelectDays(range);
  };

  const handleApplyButtonClick = (e: React.MouseEvent): void => {
    e.preventDefault();

    setVisibility(false);

    if (has.call(props, 'onApply')) onApply();
  };

  const clearSelectedDate = (e: React.MouseEvent): void => {
    e.preventDefault();

    const clearedData = {
      from: undefined,
      to: undefined,
    };

    handleSelectDays(clearedData);
  };

  const { from, to } = selectedDays;
  const modifiers = { start: from, end: selectedDays.to };

  return (
    <S.CalendarContainer isVisible={isShown} ref={htmlContainer}>
      <S.Calendar
        modifiers={modifiers}
        months={months}
        weekdaysShort={weekdaysShort}
        selectedDays={[from, { from, to }]}
        onDayClick={handleDayClick}
        onDayMouseEnter={handleDayMouseEnter}
        navbarElement={<NavBar />}
      />
      <S.CalendarControls>
        <TextButton isLink={false} isSecondary onClick={clearSelectedDate}>
          Очистить
        </TextButton>
        <TextButton isLink={false} onClick={handleApplyButtonClick}>
          Применить
        </TextButton>
      </S.CalendarControls>
    </S.CalendarContainer>
  );
};

export default Calendar;
