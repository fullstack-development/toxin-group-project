export const isCorrectDate = (value: string) => {
  const parms = value.split(/[\.\-\/]/);
  const year = parseInt(parms[2], 10);
  const month = parseInt(parms[1], 10);
  const day = parseInt(parms[0], 10);
  const date = new Date(year, month - 1, day, 0, 0, 0, 0);
  return (
    month === date.getMonth() + 1
    && day === date.getDate()
    && year === date.getFullYear()
  );
};

export const mustBeRequired = (value) => (value ? null : 'Заполните это поле!');
export const mustBeEmail = (value) => (/@/.exec(value)
  ? null
  : "Адрес электронной почты должен содержать символ '@'");
export const mustBeDate = (value = '') => (isCorrectDate(value) ? null : 'Некорректная дата');
export const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), null);
