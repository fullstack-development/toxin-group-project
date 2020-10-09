import { Form } from 'react-final-form';

import api from 'api/api';
import ArrowButton from 'components/ArrowButton/ArrowButton';
import Dropdown from 'components/Dropdown/Dropdown';
import TimePicker from 'components/TimePicker/TimePicker';

import * as S from './SearchRoomForm.styles';

type SearchRoomFormProps = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};
const testRoomFilter = {
  price: { from: 3000, to: 10000 },
  booked: {
    from: new Date().getTime(),
    to: new Date(Date.now() + 1000000000).getTime(),
  },
  amenities: {
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
  },
  additionalAmenities: {
    breakfast: false,
    desk: false,
    chair: false,
    crib: false,
    tv: false,
    shampoo: true,
  },
  accessibility: {
    wideCorridor: true,
    invalidHelper: false,
  },
  opportunities: {
    smoking: true,
    keepPets: false,
    largeNumberOfPersons: false,
  },
};
const handleDBRequest = (e) => {
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
                labelName="search-room"
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
                groups={[
                  {
                    name: 'guests',
                    wordForms: ['гость', 'гостя', 'гостей'],
                  },
                ]}
                items={[
                  {
                    title: 'взрослые',
                    groupName: 'guests',
                  },
                  {
                    title: 'дети',
                    groupName: 'guests',
                  },
                  {
                    title: 'младенцы',
                    wordForms: ['младенец', 'младенца', 'младенцев'],
                  },
                ]}
              />
            </S.DropdownWrapper>
            <ArrowButton isLink={false} isFilled type="button" onClick={handleDBRequest}>
              Подобрать номер
            </ArrowButton>
          </form>
        )}
      />
    </S.SearchRoomForm>
  );
};

export default SearchRoomForm;
