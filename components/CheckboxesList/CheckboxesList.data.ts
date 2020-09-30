import { Option } from './CheckboxesList.types';

export const checkboxesListData: Required<Option[]> = [
  { name: 'opportunities', value: 'smoking', label: 'Можно курить' },
  { name: 'opportunities', value: 'keepPets', label: 'Можно с питомцами' },
  {
    name: 'opportunities',
    value: 'largeNumberOfPersons',
    label: 'Можно пригласить гостей (до 10 человек)',
  },
];

export const richCheckboxesListData: Required<Option[]> = [
  {
    name: 'accessibility',
    value: 'wideCorridor',
    title: 'Широкий коридор',
    label: 'Ширина коридоров в номере не менее 91 см.',
  },
  {
    name: 'accessibility',
    value: 'invalidHelper',
    title: 'Помощник для инвалидов',
    label: 'На 1 этаже вас встретит специалист и проводит до номера.',
  },
];

export const expandableCheckboxesListData: Required<Option[]> = [
  { name: 'roomOption', value: 'breakfast', label: 'Завтрак' },
  { name: 'roomOption', value: 'desk', label: 'Письменный стол' },
  { name: 'roomOption', value: 'chair', label: 'Стул для кормления' },
  { name: 'roomOption', value: 'crib', label: 'Кроватка' },
  { name: 'roomOption', value: 'TV', label: 'Телевизор' },
  { name: 'roomOption', value: 'shampoo', label: 'Шампунь' },
];
