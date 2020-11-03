import defaultFilters from 'components/SearchRoomForm/defaultFilters';
import i18next from 'services/i18next';

import { Item, Group } from './Dropdown.types';

export const guestsGroups: Required<Group[]> = [
  {
    name: 'guests',
    wordForms: [i18next.t('A guest'), i18next.t('Guest'), i18next.t('Guests')],
  },
];

const { adults, children, babies } = defaultFilters.guests;

export const guestsItems: Required<Item[]> = [
  {
    title: i18next.t('Adults'),
    inputName: 'adults',
    initialValue: adults,
    groupName: 'guests',
  },
  {
    title: i18next.t('Children'),
    initialValue: children,
    inputName: 'children',
    groupName: 'guests',
  },
  {
    title: i18next.t('Babies'),
    inputName: 'babies',
    initialValue: babies,
    wordForms: [i18next.t('A baby'), i18next.t('Baby'), i18next.t('Babies')],
  },
];

const { beds, bathrooms, bedrooms } = defaultFilters.amenities;

export const amenitiesItems: Required<Item[]> = [
  {
    title: i18next.t('Bedrooms'),
    inputName: 'bedrooms',
    initialValue: bedrooms,
    wordForms: [i18next.t('A bedroom'), i18next.t('Bedroom'), i18next.t('Bedrooms')],
  },
  {
    title: i18next.t('Beds'),
    inputName: 'beds',
    initialValue: beds,
    wordForms: [i18next.t('A bed'), i18next.t('Bed'), i18next.t('Beds')],
  },
  {
    title: i18next.t('Bathrooms'),
    inputName: 'bathrooms',
    initialValue: bathrooms,
    wordForms: [i18next.t('A bathroom'), i18next.t('Bathroom'), i18next.t('Bathrooms')],
  },
];
