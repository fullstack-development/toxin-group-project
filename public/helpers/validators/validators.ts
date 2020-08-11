export const fieldValidator = (fieldName: string, value: string) => {
  switch (fieldName) {
    case 'email':
      const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      return !emailValid && 'Некорректный email';
    case 'name':
      const nameValid = value.match(/^[a-zA-ZА-Яа-я]+$/);
      return !nameValid && 'Имя может содеражть только буквенные символы';
    default:
      break;
  }
}