const fieldValidator = (fieldName: string, value: string):string => {
  let emailValid;
  let nameValid;
  let errorMessage;

  switch (fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      errorMessage = !emailValid && 'Некорректный email';
      break;
    case 'name':
      nameValid = value.match(/^[a-zA-ZА-Яа-я]+$/);
      errorMessage = !nameValid && 'Имя может содеражть только буквенные символы';
      break;
    default:
      break;
  }

  return errorMessage;
};

export default fieldValidator;
