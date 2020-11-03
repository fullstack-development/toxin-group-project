import i18next from 'services/i18next';

const isCorrectDate = (value: string): boolean => {
  const params = value.split(/[.\-/]/);
  const year = parseInt(params[2], 10);
  const month = parseInt(params[1], 10);
  const day = parseInt(params[0], 10);
  const date = new Date(year, month - 1, day, 0, 0, 0, 0);
  return month === date.getMonth() + 1 && day === date.getDate() && year === date.getFullYear();
};

const dateValidator = (date: string): string | null =>
  date && isCorrectDate(date) ? null : i18next.t('Invalid date');
const dateFormatMask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];

const months = [
  i18next.t('January'),
  i18next.t('February'),
  i18next.t('March'),
  i18next.t('April'),
  i18next.t('May'),
  i18next.t('June'),
  i18next.t('July'),
  i18next.t('August'),
  i18next.t('September'),
  i18next.t('October'),
  i18next.t('November'),
  i18next.t('December'),
];

const shortMonths = [
  i18next.t('Jan'),
  i18next.t('Feb'),
  i18next.t('Mar'),
  i18next.t('Apr'),
  i18next.t('May'),
  i18next.t('June'),
  i18next.t('Jul'),
  i18next.t('Aug'),
  i18next.t('Sep'),
  i18next.t('Oct'),
  i18next.t('Nov'),
  i18next.t('Dec'),
];

const weekdaysShort = [
  i18next.t('Mon'),
  i18next.t('Tue'),
  i18next.t('Wed'),
  i18next.t('Thu'),
  i18next.t('Fri'),
  i18next.t('Sat'),
  i18next.t('Sun'),
];

export { dateValidator, dateFormatMask, months, shortMonths, weekdaysShort };
