import i18next from 'services/i18next';

import { CHANGE_LANGUAGE_SUCCESS } from '../constants';
import { LanguageState, LanguageActions } from '../model';

const initialState: LanguageState = {
  currentLanguage: i18next.language,
};

const language = (state: LanguageState = initialState, action: LanguageActions): LanguageState => {
  switch (action.type) {
    case CHANGE_LANGUAGE_SUCCESS:
      return {
        ...state,
        currentLanguage: action.payload,
      };
    default:
      return state;
  }
};

export default language;
