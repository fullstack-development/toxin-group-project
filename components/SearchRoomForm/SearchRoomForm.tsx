import { Form } from 'react-final-form';

import api from 'api/api';
import ArrowButton from 'components/ArrowButton/ArrowButton';
import Dropdown from 'components/Dropdown/Dropdown';
import TimePicker from 'components/TimePicker/TimePicker';

import * as S from './SearchRoomForm.styles';

type SearchRoomFormProps = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};
const handleDBRequest = (e) => {
  e.preventDefault;
  console.log('request');
  api.booking
    .filterRooms({
      price: {
        from: 5000,
        to: 10000,
      },
      booked: {
        timestampFrom: new Date().getTime(),
        timestampTo: new Date(Date.now() + 1000000000).getTime(),
      },
      amenities: {
        bathrooms: 1,
        bedrooms: 1,
        beds: 1,
      },
      additionalAmenities: {
        breakfast: false,
        chair: false,
        crib: true,
        desk: true,
        shampoo: true,
        tv: false,
      },
      accessibility: {
        invalidHelper: false,
        wideCorridor: false,
      },
      opportunities: {
        keepPets: true,
        largeNumberOfPersons: false,
        smoking: false,
      },
    })
    .then((data) => console.log(data));
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
            <ArrowButton isLink={false} isFilled onClick={handleDBRequest} type="button">
              Подобрать номер
            </ArrowButton>
          </form>
        )}
      />
    </S.SearchRoomForm>
  );
};

export default SearchRoomForm;
