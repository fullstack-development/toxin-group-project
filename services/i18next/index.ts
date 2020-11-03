import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { FALLBACK_LANGUAGE } from './constants';
import { ru } from './locales/index';

const resources = {
  ru: { ...ru },
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: FALLBACK_LANGUAGE,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
