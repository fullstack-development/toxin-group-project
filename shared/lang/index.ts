import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    accountEntry: {
      entry: 'SignIn',
      googleAccountEntry: 'SignIn with account google',
      withoutToxinAccount: 'No toxin account?',
      createAccount: 'SignUp',
      password: 'Password',
    },
  },
  ru: {
    accountEntry: {
      entry: 'Войти',
      googleAccountEntry: 'Вход через аккаунт Google',
      withoutToxinAccount: 'Нет аккаунта на Toxin?',
      createAccount: 'Создать',
      password: 'Пароль',
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
