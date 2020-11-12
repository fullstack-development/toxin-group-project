import { DispatchEvent } from 'react-redux';

import { Lang } from 'services/i18next/types';

import { CHANGE_LANGUAGE_REQUEST } from '../constants';

const changeLanguage = (newLanguage: Lang): DispatchEvent => ({
  type: CHANGE_LANGUAGE_REQUEST,
  payload: newLanguage,
});

export { changeLanguage };
