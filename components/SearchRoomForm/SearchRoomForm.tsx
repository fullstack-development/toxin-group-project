import { Form } from 'react-final-form';

import ArrowButton from 'components/ArrowButton/ArrowButton';
import Dropdown from 'components/Dropdown/Dropdown';
import { guestsGroups, guestsItems } from 'components/Dropdown/Dropdown.data';
import TimePicker from 'components/TimePicker/TimePicker';

import defaultFilters from './defaultFilters';
import * as S from './SearchRoomForm.styles';

type SearchRoomFormProps = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

const defaultBookingDates = defaultFilters.booked;

const SearchRoomForm: React.FC<SearchRoomFormProps> = ({ onSubmit }: SearchRoomFormProps) => {
  const handleFormSubmit = (values) => {
    // console.log(values);
  };

  return (
    <S.SearchRoomForm>
      <S.Title>Найдём номера под ваши пожелания</S.Title>
      <Form
        initialValues={{
          'search-room-date': {
            from: defaultBookingDates.from.getTime(),
            to: defaultBookingDates.to.getTime(),
          },
          guests: Object.fromEntries(
            guestsItems
              .filter((item) => item.initialValue)
              .map((item) => [item.inputName, item.initialValue]),
          ),
        }}
        onSubmit={handleFormSubmit}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <S.TimePickerWrapper>
              <TimePicker
                type="double"
                name="search-room-date"
                dateFromLabelText="прибытие"
                dateToLabelText="выезд"
                dateFrom={defaultBookingDates.from}
                dateTo={defaultBookingDates.to}
              />
            </S.TimePickerWrapper>
            <S.DropdownWrapper>
              <S.DropdownTitle>гости</S.DropdownTitle>
              <Dropdown
                placeholder="Сколько гостей"
                name="guests"
                enableControls
                groups={guestsGroups}
                items={guestsItems}
              />
            </S.DropdownWrapper>
            <ArrowButton
              href={`/search-room?values=${JSON.stringify(values)}`}
              isFilled
              type="button"
            >
              Подобрать номер
            </ArrowButton>
          </form>
        )}
      />
    </S.SearchRoomForm>
  );
};

export default SearchRoomForm;
