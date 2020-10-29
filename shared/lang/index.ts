import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

fetch('./locales/en/AccountEntry.json').then((data) => console.log('получили данные', data));

const resources = {
  en: {},

  ru: {},
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    react: {
      useSuspense: false,
    },

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
