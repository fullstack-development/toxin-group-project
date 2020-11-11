import { memo, useState } from 'react';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import ClipLoader from 'react-spinners/ClipLoader';

import ArrowButton from 'components/ArrowButton/ArrowButton';
import Dropdown from 'components/Dropdown/Dropdown';
import { guestsGroups, guestsItems } from 'components/Dropdown/Dropdown.data';
import TimePicker from 'components/TimePicker/TimePicker';

import defaultFilters from './defaultFilters';
import * as S from './SearchRoomForm.styles';

const defaultBookingDates = defaultFilters.booked;

const SearchRoomForm = memo(() => {
  const [isFormSubmission, setFormSubmission] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmission(true);
  };
  const { t } = useTranslation(['SearchRoomForm', 'RoomFilter']);

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
                dateFromLabelText={t('Arrival')}
                dateToLabelText={t('Departure')}
                dateFrom={new Date(defaultBookingDates.from)}
                dateTo={new Date(defaultBookingDates.to)}
              />
            </S.TimePickerWrapper>
            <S.DropdownWrapper>
              <S.DropdownTitle>{t('RoomFilter:Guests')}</S.DropdownTitle>
              <Dropdown
                placeholder={t('How many guests')}
                name="guests"
                enableControls
                groups={guestsGroups}
                items={guestsItems}
              />
            </S.DropdownWrapper>
            {isFormSubmission ? (
              <S.ProcessButton isFilled isDisabled={isFormSubmission} type="button">
                {t('RoomFilter:Loading rooms ...')}
                <S.PreloaderWrapper>
                  <ClipLoader size={22} color="#FFF" />
                </S.PreloaderWrapper>
              </S.ProcessButton>
            ) : (
              <ArrowButton
                href={`/search-room?values=${JSON.stringify(values)}`}
                isFilled
                type="button"
                onClick={handleFormSubmit}
              >
                {t('Search for a room')}
              </ArrowButton>
            )}
          </form>
        )}
      />
    </S.SearchRoomForm>
  );
});

SearchRoomForm.displayName = 'SeacrhRoomForm';

export default SearchRoomForm;
