const fieldValidator = (fieldName: string, value: string):string => {
  let emailValid;
  let nameValid;

  switch (fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      return !emailValid && 'Некорректный email';
    case 'name':
      nameValid = value.match(/^[a-zA-ZА-Яа-я]+$/);
      return !nameValid && 'Имя может содеражть только буквенные символы';
    default:
      break;
  }
};

export default fieldValidator;
