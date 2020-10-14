import { Item, Group } from './Dropdown.types';

export const guestsGroups: Required<Group[]> = [
  {
    name: 'guests',
    wordForms: ['гость', 'гостя', 'гостей'],
  },
];

export const guestsItems: Required<Item[]> = [
  {
    title: 'взрослые',
    inputName: 'adults',
    initialValue: 2,
    groupName: 'guests',
  },
  {
    title: 'дети',
    initialValue: 0,
    inputName: 'children',
    groupName: 'guests',
  },
  {
    title: 'младенцы',
    inputName: 'babies',
    initialValue: 0,
    wordForms: ['младенец', 'младенца', 'младенцев'],
  },
];

export const amenitiesItems: Required<Item[]> = [
  {
    title: 'Спальни',
    inputName: 'bedrooms',
    wordForms: ['спальня', 'спальни', 'спален'],
  },
  {
    title: 'Кровати',
    inputName: 'beds',
    wordForms: ['кровать', 'кровати', 'кроватей'],
  },
  {
    title: 'Ванные комнаты',
    inputName: 'bathrooms',
    wordForms: ['ванная', 'ванные', 'ванных'],
  },
];
