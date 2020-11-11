import { Lang } from 'services/i18next/types';

import { ChangeLanguageRequest } from '../model';

export const changeLanguage = (newLanguage: Lang): ChangeLanguageRequest => ({
  type: 'CHANGE_LANGUAGE_REQUEST',
  payload: newLanguage,
});
