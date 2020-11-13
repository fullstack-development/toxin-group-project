import { Lang } from 'services/i18next/types';

import { ChangeLanguageRequest } from '../model';

const changeLanguage = (newLanguage: Lang): ChangeLanguageRequest => ({
  type: 'CHANGE_LANGUAGE_REQUEST',
  payload: newLanguage,
});

export { changeLanguage };
