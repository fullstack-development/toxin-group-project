import { Lang } from 'services/i18next/types';

import { CHANGE_LANGUAGE_SUCCESS } from './constants';

export type LanguageState = {
  currentLanguage: string | null;
};

export type Action<Z, T> = {
  type: Z;
  payload?: T;
};

export type ChangeLanguage = Action<typeof CHANGE_LANGUAGE_SUCCESS, Lang>;

export type LanguageActions = ChangeLanguage;
