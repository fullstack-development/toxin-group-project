import valueToIndex from './valueToIntex';

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

function getСommentDate(date: string): string {
  const targetDate = new Date(date);
  const currentDate = Date.now();

  const diff = currentDate - targetDate.valueOf();

  const seconds = diff / 1000;
  if (seconds < 60) {
    const roundedSeconds = Math.floor(seconds);

    return `${roundedSeconds} ${DECLENSION.seconds[valueToIndex(roundedSeconds)]} назад`;
  }

  const minutes = seconds / 60;
  if (minutes < 60) {
    const roundedMinutes = Math.floor(minutes);

    return `${roundedMinutes} ${DECLENSION.minutes[valueToIndex(roundedMinutes)]} назад`;
  }

  const hours = minutes / 60;
  if (hours < 24) {
    const roundedHours = Math.floor(hours);

    return `${roundedHours} ${DECLENSION.hours[valueToIndex(roundedHours)]} назад`;
  }

  const days = hours / 24;
  if (days < 30) {
    const roundedDays = Math.floor(days);

    return `${roundedDays} ${DECLENSION.days[valueToIndex(roundedDays)]} назад`;
  }

  return targetDate.toLocaleDateString('ru-RU', options);
}

export default getСommentDate;
