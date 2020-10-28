import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('SearchRoomForm');

  return (
    <S.SearchRoomForm>
      <S.Title>{t('We will find rooms according to your wishes')}</S.Title>
      <Form
        initialValues={{
          booked: {
            from: defaultBookingDates.from,
            to: defaultBookingDates.to,
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
                name="booked"
                dateFromLabelText={t('arrival')}
                dateToLabelText={t('departure')}
                dateFrom={new Date(defaultBookingDates.from)}
                dateTo={new Date(defaultBookingDates.to)}
              />
            </S.TimePickerWrapper>
            <S.DropdownWrapper>
              <S.DropdownTitle>{t('Guests')}</S.DropdownTitle>
              <Dropdown
                placeholder={t('How many guests')}
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
              {t('Choose number')}
            </ArrowButton>
          </form>
        )}
      />
    </S.SearchRoomForm>
  );
};

export default SearchRoomForm;
