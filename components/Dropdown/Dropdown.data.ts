import defaultFilters from 'components/SearchRoomForm/defaultFilters';

import { Item, Group } from './Dropdown.types';

export const guestsGroups: Required<Group[]> = [
  {
    name: 'guests',
    wordForms: ['гость', 'гостя', 'гостей'],
  },
];

const { adults, children, babies } = defaultFilters.guests;

export const guestsItems: Required<Item[]> = [
  {
    title: 'взрослые',
    inputName: 'adults',
    initialValue: adults,
    groupName: 'guests',
  },
  {
    title: 'дети',
    initialValue: children,
    inputName: 'children',
    groupName: 'guests',
  },
  {
    title: 'младенцы',
    inputName: 'babies',
    initialValue: babies,
    wordForms: ['младенец', 'младенца', 'младенцев'],
  },
];

const { beds, bathrooms, bedrooms } = defaultFilters.amenities;

export const amenitiesItems: Required<Item[]> = [
  {
    title: 'Спальни',
    inputName: 'bedrooms',
    initialValue: bedrooms,
    wordForms: ['спальня', 'спальни', 'спален'],
  },
  {
    title: 'Кровати',
    inputName: 'beds',
    initialValue: beds,
    wordForms: ['кровать', 'кровати', 'кроватей'],
  },
  {
    title: 'Ванные комнаты',
    inputName: 'bathrooms',
    initialValue: bathrooms,
    wordForms: ['ванная', 'ванные', 'ванных'],
  },
];
