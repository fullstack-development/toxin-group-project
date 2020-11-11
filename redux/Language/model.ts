import { ActionPayload } from 'redux/action.model';
import { Lang } from 'services/i18next/types';

export type LanguageState = {
  currentLanguage: string | null;
};

export type ChangeLanguageRequest = ActionPayload<'CHANGE_LANGUAGE_REQUEST', Lang>;
export type ChangeLanguageSuccess = ActionPayload<'CHANGE_LANGUAGE_SUCCESS', Lang>;

export type LanguageActions = ChangeLanguageRequest | ChangeLanguageSuccess;
