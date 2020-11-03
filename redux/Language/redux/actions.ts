import { DispatchEvent } from 'react-redux';

import { CHANGE_LANGUAGE_REQUEST } from '../constants';

const changeLanguage = (newLanguage: string): DispatchEvent => ({
  type: CHANGE_LANGUAGE_REQUEST,
  payload: newLanguage,
});

export { changeLanguage };
