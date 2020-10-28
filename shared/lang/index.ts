import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Welcome to React': 'hello world',
    },
  },
  fr: {
    translation: {
      'Welcome to React': 'Bienvenue à React et react-i18next',
    },
  },
};

const accountEntry = {
  en: {
    translation: {
      aloha: 'privet',
    },
  },
};

i18next.use(initReactI18next).init({
  ns: ['resources', 'accountEntry'],
  lng: 'en',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
