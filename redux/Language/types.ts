import { CHANGE_LANGUAGE_SUCCESS } from './constants';

export type LanguageState = {
  currentLanguage: string | null;
};

export type Action<Z, T> = {
  type: Z;
  payload?: T;
};

export type ChangeLanguage = Action<typeof CHANGE_LANGUAGE_SUCCESS, string>;

export type LanguageActions = ChangeLanguage;
