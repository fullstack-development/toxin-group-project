import { useEffect } from 'react';
import { Form } from 'react-final-form';

import { Filters } from 'api/entities/types';
import CheckboxesList from 'components/CheckboxesList/CheckboxesList';
import {
  checkboxesListData,
  expandableCheckboxesListData,
  richCheckboxesListData,
} from 'components/CheckboxesList/CheckboxesList.data';
import Dropdown from 'components/Dropdown/Dropdown';
import { guestsGroups, guestsItems, amenitiesItems } from 'components/Dropdown/Dropdown.data';
import Expander from 'components/Expander/Expander';
import RangeSlider from 'components/RangeSlider/RangeSlider';
import TimePicker from 'components/TimePicker/TimePicker';

import * as S from './RoomFilter.styles';
import { Props } from './RoomFilter.types';

const oneWeek = 7 * 60 * 60 * 24 * 1000;

const defaultInitialFilters: Filters = {
  price: {
    from: 5000,
    to: 10000,
  },
  booked: {
    from: Date.now(),
    to: Date.now() + oneWeek,
  },
  amenities: {
    bedrooms: 1,
    beds: 1,
    bathrooms: 0,
  },
  additionalAmenities: {
    breakfast: false,
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

const RoomFilter: React.FC<Props> = ({
  initialFilters = defaultInitialFilters,
  handleRequest,
}: Props) => {
  const handleFormSubmit = async (values?: Filters) => {
    await handleRequest(values || defaultInitialFilters);
  };

  useEffect(() => {
    handleFormSubmit();
  }, []);

  return (
    <Form
      onSubmit={handleFormSubmit}
      initialValues={initialFilters || defaultInitialFilters}
      render={({ handleSubmit, initialValues }) => {
        const { guests } = initialValues;
        const updatedDropdownProps = guestsItems.map((item) => ({
          ...item,
          initialValue: (guests && guests[item.inputName]) || item.initialValue,
        }));

        console.log(updatedDropdownProps);
        return (
          <S.RoomFilter>
            <form onSubmit={handleSubmit}>
              <S.TimePickerWrapper>
                <TimePicker
                  type="single"
                  name="booked"
                  dateFromLabelText="даты пребывания в отеле"
                  dateFrom={new Date(initialValues.booked.from)}
                  dateTo={new Date(initialValues.booked.to)}
                />
              </S.TimePickerWrapper>
              <S.DropdownWrapper>
                <S.Title elementType="dropdown">Гости</S.Title>
                <Dropdown
                  placeholder="Сколько гостей"
                  name="guests"
                  enableControls={false}
                  groups={guestsGroups}
                  items={updatedDropdownProps}
                />
              </S.DropdownWrapper>
              <S.SliderWrapper>
                <RangeSlider
                  name="price"
                  title="диапазон цены"
                  initialValue={[initialValues.price.from, initialValues.price.to]}
                />
                <S.SliderDescription>Стоимость за сутки пребывания в номере</S.SliderDescription>
              </S.SliderWrapper>
              <S.CheckboxWrapper>
                <S.Title elementType="checkbox">Checkbox buttons</S.Title>
                <CheckboxesList roomOptions={checkboxesListData} />
              </S.CheckboxWrapper>
              <S.CheckboxWrapper>
                <S.Title elementType="checkbox">Доступность</S.Title>
                <CheckboxesList roomOptions={richCheckboxesListData} />
              </S.CheckboxWrapper>
              <S.DropdownWrapper>
                <S.Title elementType="dropdown">Удобства номера</S.Title>
                <Dropdown
                  placeholder="Удобства номера"
                  enableControls={false}
                  name="amenities"
                  items={amenitiesItems}
                />
              </S.DropdownWrapper>
              <S.CheckboxWrapper>
                <Expander title="дополнительные удобства" isDefaultOpen={false}>
                  <CheckboxesList roomOptions={expandableCheckboxesListData} />
                </Expander>
              </S.CheckboxWrapper>
              <S.SubmitButton isFilled>Применить</S.SubmitButton>
            </form>
          </S.RoomFilter>
        );
      }}
    />
  );
};

export default RoomFilter;
