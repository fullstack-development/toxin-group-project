import { Option } from './CheckboxesList.types';

export const checkboxesListData: Required<Option[]> = [
  { name: 'opportunities.smoking', label: 'Можно курить' },
  { name: 'opportunities.keepPets', label: 'Можно с питомцами' },
  {
    name: 'opportunities.largeNumberOfPersons',
    label: 'Можно пригласить гостей (до 10 человек)',
  },
];

export const richCheckboxesListData: Required<Option[]> = [
  {
    name: 'accessibility.wideCorridor',
    title: 'Широкий коридор',
    label: 'Ширина коридоров в номере не менее 91 см.',
  },
  {
    name: 'accessibility.invalidHelper',
    title: 'Помощник для инвалидов',
    label: 'На 1 этаже вас встретит специалист и проводит до номера.',
  },
];

export const expandableCheckboxesListData: Required<Option[]> = [
  { name: 'additionalAmenities.breakfast', label: 'Завтрак' },
  { name: 'additionalAmenities.desk', label: 'Письменный стол' },
  { name: 'additionalAmenities.chair', label: 'Стул для кормления' },
  { name: 'additionalAmenities.crib', label: 'Кроватка' },
  { name: 'additionalAmenities.TV', label: 'Телевизор' },
  { name: 'additionalAmenities.shampoo', label: 'Шампунь' },
];
