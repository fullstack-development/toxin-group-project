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
const testRoomFilter = {
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

const SearchRoomForm: React.FC<SearchRoomFormProps> = ({ onSubmit }: SearchRoomFormProps) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    onSubmit(e);
  };

  return (
    <S.SearchRoomForm>
      <S.Title>Найдём номера под ваши пожелания</S.Title>
      <Form
        onSubmit={handleFormSubmit}
        render={() => (
          <form>
            <S.TimePickerWrapper>
              <TimePicker
                type="double"
                name="search-room-date"
                dateFromLabelText="прибытие"
                dateToLabelText="выезд"
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
            <ArrowButton isFilled type="button" onClick={getRooms}>
              Подобрать номер
            </ArrowButton>
          </form>
        )}
      />
    </S.SearchRoomForm>
  );
};

export default SearchRoomForm;
