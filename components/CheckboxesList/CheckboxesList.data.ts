import defaultFilters from 'components/SearchRoomForm/defaultFilters';
import i18next from 'services/i18next';

import { Option } from './CheckboxesList.types';

const { wideCorridor, invalidHelper } = defaultFilters.accessibility;
const { smoking, keepPets, largeNumberOfPersons } = defaultFilters.opportunities;
const { breakfast, desk, chair, crib, tv, shampoo } = defaultFilters.additionalAmenities;

export const checkboxesListData: Required<Option[]> = [
  { name: 'opportunities.smoking', label: i18next.t('Allowed smoking'), isChecked: smoking },
  { name: 'opportunities.keepPets', label: i18next.t('Allowed with pets'), isChecked: keepPets },
  {
    name: 'opportunities.largeNumberOfPersons',
    label: i18next.t('Guests can be invited (up to 10 people)'),
    isChecked: largeNumberOfPersons,
  },
];

export const richCheckboxesListData: Required<Option[]> = [
  {
    name: 'accessibility.wideCorridor',
    title: i18next.t('Wide corridor'),
    label: i18next.t('The width of the corridors in the room is at least 91 cm.'),
    isChecked: wideCorridor,
  },
  {
    name: 'accessibility.invalidHelper',
    title: i18next.t('Disabled assistant'),
    label: i18next.t('A specialist will meet you on the 1st floor and walk you to your room.'),
    isChecked: invalidHelper,
  },
];

export const expandableCheckboxesListData: Required<Option[]> = [
  { name: 'additionalAmenities.breakfast', label: i18next.t('Breakfast'), isChecked: breakfast },
  { name: 'additionalAmenities.desk', label: i18next.t('Desk'), isChecked: desk },
  { name: 'additionalAmenities.chair', label: i18next.t('Feeding chair'), isChecked: chair },
  { name: 'additionalAmenities.crib', label: i18next.t('Crib'), isChecked: crib },
  { name: 'additionalAmenities.TV', label: i18next.t('Televisor'), isChecked: tv },
  { name: 'additionalAmenities.shampoo', label: i18next.t('Shampoo'), isChecked: shampoo },
];
