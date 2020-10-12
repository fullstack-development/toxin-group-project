import { Form } from 'react-final-form';

import ArrowButton from 'components/ArrowButton/ArrowButton';
import Dropdown from 'components/Dropdown/Dropdown';
import { guestsGroups, guestsItems } from 'components/Dropdown/Dropdown.data';
import TimePicker from 'components/TimePicker/TimePicker';

import * as S from './SearchRoomForm.styles';

type SearchRoomFormProps = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
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
            <ArrowButton isLink={false} isFilled>
              Подобрать номер
            </ArrowButton>
          </form>
        )}
      />
    </S.SearchRoomForm>
  );
};

export default SearchRoomForm;
