import { i18next } from 'services/i18next';
import { getNounInDeclension } from 'shared/helpers/getNounInDeclension';

const DECLENSION = {
  seconds: ['секунда', 'секунды', 'секунд'],
  minutes: ['минута', 'минуты', 'минут'],
  hours: ['час', 'часа', 'часов'],
  days: ['день', 'дня', 'дней'],
};

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};

function getReviewDate(date: Date): string {
  const currentDate = Date.now();
  const timeHasPassed = currentDate - date.getTime();

  const seconds = timeHasPassed / 1000;
  if (seconds < 60) {
    const roundedSeconds = Math.floor(seconds);

    return `${roundedSeconds} ${getNounInDeclension(
      roundedSeconds,
      DECLENSION.seconds,
    )} ${i18next.t('Ago')}`;
  }

  const minutes = seconds / 60;
  if (minutes < 60) {
    const roundedMinutes = Math.floor(minutes);

    return `${roundedMinutes} ${getNounInDeclension(
      roundedMinutes,
      DECLENSION.minutes,
    )} ${i18next.t('Ago')}`;
  }

  const hours = minutes / 60;
  if (hours < 24) {
    const roundedHours = Math.floor(hours);

    return `${roundedHours} ${getNounInDeclension(roundedHours, DECLENSION.hours)} ${i18next.t(
      'Ago',
    )}`;
  }

  const days = hours / 24;
  if (days < 30) {
    const roundedDays = Math.floor(days);

    return `${roundedDays} ${getNounInDeclension(roundedDays, DECLENSION.days)} ${i18next.t(
      'Ago',
    )}`;
  }

  return date.toLocaleDateString(i18next.language, options);
}

export { getReviewDate };
