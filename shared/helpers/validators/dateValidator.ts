const isCorrectDate = (value: string): boolean => {
  const params = value.split(/[\.\-\/]/);
  const year = parseInt(params[2], 10);
  const month = parseInt(params[1], 10);
  const day = parseInt(params[0], 10);
  const date = new Date(year, month - 1, day, 0, 0, 0, 0);
  return (
    month === date.getMonth() + 1
    && day === date.getDate()
    && year === date.getFullYear()
  );
};

export const dateValidator = (date: string): string | null => (date && isCorrectDate(date) ? null : 'Некорректная дата');
export const dateFormatMask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];
