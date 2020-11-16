import { memo, useEffect } from 'react';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { animateScroll as scroll } from 'react-scroll';

import CheckboxesList from 'components/CheckboxesList/CheckboxesList';
import {
  checkboxesListData,
  expandableCheckboxesListData,
  richCheckboxesListData,
} from 'components/CheckboxesList/CheckboxesList.fuxure';
import { Option } from 'components/CheckboxesList/CheckboxesList.model';
import Dropdown from 'components/Dropdown/Dropdown';
import { guestsGroups, guestsItems, amenitiesItems } from 'components/Dropdown/Dropdown.fuxure';
import { Item } from 'components/Dropdown/Dropdown.model';
import Expander from 'components/Expander/Expander';
import Slider from 'components/Slider/Slider';
import TimePicker from 'components/TimePicker/TimePicker';
import {
  Accessibility,
  AdditionalAmenities,
  Amenities,
  Filters,
  Opportunities,
} from 'services/api/entities/types';

import { OptionName, Props } from './RoomFilter.model';
import * as S from './RoomFilter.styles';

const getDropdownProps = (defaultProps: Item[], updatedProps: Amenities) => {
  return defaultProps.map((item) => ({
    ...item,
    initialValue: updatedProps[item.inputName],
  }));
};

const getOptionName = (name: string): OptionName => {
  const [, option] = name.split('.');
  return option as OptionName;
};

const getCheckboxProps = (
  defaultProps: Option[],
  updatedProps: Opportunities | Accessibility | AdditionalAmenities,
) => {
  return defaultProps.map((item) => ({
    ...item,
    isChecked: Boolean(updatedProps[getOptionName(item.name)]),
  }));
};

const RoomFilter = memo(({ initialFilters, loadRooms, isPending = false }: Props) => {
  const handleFormSubmit = (values?: Filters) => {
    loadRooms(values);
    scroll.scrollToTop();
  };

  const { t } = useTranslation(['RoomFilter', 'Buttons']);

  useEffect(() => {
    loadRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Form
      onSubmit={handleFormSubmit}
      initialValues={initialFilters}
      render={({ handleSubmit, initialValues }) => {
        const { guests } = initialValues;
        const updatedDropdownProps = guestsItems.map((item) => ({
          ...item,
          initialValue: (guests && guests[item.inputName]) || item.initialValue,
        }));

        return (
          <S.RoomFilter>
            <form onSubmit={handleSubmit}>
              <S.TimePickerWrapper>
                <TimePicker
                  type="single"
                  name="booked"
                  dateFromLabelText={t('Dates of stay in hotel')}
                  dateFrom={new Date(initialValues.booked.from)}
                  dateTo={new Date(initialValues.booked.to)}
                />
              </S.TimePickerWrapper>
              <S.DropdownWrapper>
                <S.Title elementType="dropdown">{t('Guests')}</S.Title>
                <Dropdown
                  placeholder={t('How many guests')}
                  name="guests"
                  enableControls={false}
                  groups={guestsGroups}
                  items={updatedDropdownProps}
                />
              </S.DropdownWrapper>
              <S.SliderWrapper>
                <Slider
                  name="price"
                  title={t('Price range')}
                  initialValue={[initialValues.price.from, initialValues.price.to]}
                  showValue
                />
                <S.SliderDescription>{t('Cost per day of stay in the room')}</S.SliderDescription>
              </S.SliderWrapper>
              <S.CheckboxWrapper>
                <S.Title elementType="checkbox">{t('Checkbox buttons')}</S.Title>
                <CheckboxesList
                  roomOptions={getCheckboxProps(checkboxesListData, initialValues.opportunities)}
                />
              </S.CheckboxWrapper>
              <S.CheckboxWrapper>
                <S.Title elementType="checkbox">{t('Availability')}</S.Title>
                <CheckboxesList
                  roomOptions={getCheckboxProps(
                    richCheckboxesListData,
                    initialValues.accessibility,
                  )}
                />
              </S.CheckboxWrapper>
              <S.DropdownWrapper>
                <S.Title elementType="dropdown">{t('Room amenities')}</S.Title>
                <Dropdown
                  placeholder={t('Room amenities')}
                  enableControls={false}
                  name="amenities"
                  items={getDropdownProps(amenitiesItems, initialValues.amenities)}
                />
              </S.DropdownWrapper>
              <S.CheckboxWrapper>
                <Expander title={t('Additional amenities')} isDefaultOpen={false}>
                  <CheckboxesList
                    roomOptions={getCheckboxProps(
                      expandableCheckboxesListData,
                      initialValues.additionalAmenities,
                    )}
                  />
                </Expander>
              </S.CheckboxWrapper>
              <S.SubmitButton disabled={isPending} isFilled>
                {t('Buttons:Apply')}
              </S.SubmitButton>
            </form>
          </S.RoomFilter>
        );
      }}
    />
  );
});

export default RoomFilter;
