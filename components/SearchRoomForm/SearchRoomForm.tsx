import { Form } from 'react-final-form';

import api from 'api/api';
import ArrowButton from 'components/ArrowButton/ArrowButton';
import Dropdown from 'components/Dropdown/Dropdown';
import { guestsGroups, guestsItems } from 'components/Dropdown/Dropdown.data';
import TimePicker from 'components/TimePicker/TimePicker';

import * as S from './SearchRoomForm.styles';

type SearchRoomFormProps = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};
export const testRoomFilter = {
  price: { from: 2000, to: 7000 },
  booked: {
    from: new Date().getTime(),
    to: new Date(Date.now() + 1000000000).getTime(),
  },
  amenities: {
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
  },
  additionalAmenities: {
    breakfast: true,
    desk: false,
    chair: false,
    crib: false,
    tv: false,
    shampoo: false,
  },
  accessibility: {
    wideCorridor: false,
    invalidHelper: false,
  },
  opportunities: {
    smoking: false,
    keepPets: false,
    largeNumberOfPersons: false,
  },
};
const getRooms = (e) => {
  e.preventDefault;
  api.booking.filterRooms(testRoomFilter).then((data) => console.log(data));
};

const twoWeeks = 60 * 60 * 24 * 7 * 1000 * 2;

const dateFrom = new Date();
const dateTo = new Date(Date.now() + twoWeeks);
dateFrom.setHours(0, 0, 0, 0);
dateTo.setHours(0, 0, 0, 0);

const DEFAULT_OPTIONS = {
  dates: {
    from: dateFrom.getTime(),
    to: dateTo.getTime(),
  },
};

const SearchRoomForm: React.FC<SearchRoomFormProps> = ({ onSubmit }: SearchRoomFormProps) => {
  const handleFormSubmit = (values) => {
    console.log(values);
    // getRooms(e);
  };

  return (
    <S.SearchRoomForm>
      <S.Title>Найдём номера под ваши пожелания</S.Title>
      <Form
        initialValues={{
          'search-room-date': DEFAULT_OPTIONS.dates,
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
                dateFrom={new Date(DEFAULT_OPTIONS.dates.from)}
                dateTo={new Date(DEFAULT_OPTIONS.dates.to)}
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
              onClick={getRooms}
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
