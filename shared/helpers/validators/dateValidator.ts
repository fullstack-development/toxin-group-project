const isCorrectDate = (value: string): boolean => {
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

export const dateValidator = (date: string): string | null => (date && isCorrectDate(date) ? null : 'Некорректная дата');
