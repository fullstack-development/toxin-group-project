export const makeRequired = (value: string): string | null => (!value ? 'Заполните это поле' : null);
