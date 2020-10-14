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
import defaultFilters from 'components/SearchRoomForm/defaultFilters';
import TimePicker from 'components/TimePicker/TimePicker';

import * as S from './RoomFilter.styles';
import { Props } from './RoomFilter.types';

const RoomFilter: React.FC<Props> = ({ initialFilters, handleRequest }: Props) => {
  const handleFormSubmit = async (values?: Filters) => {
    console.log(values);
    await handleRequest(values);
  };

  useEffect(() => {
    handleFormSubmit();
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

        // console.log(initialValues);

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
