const getAvatarByGender = (gender: string): string | null => {
  switch (gender) {
    case 'male':
    case 'Male':
    case 'Мужчина':
      return '/img/avatar-male.jpg';
    case 'female':
    case 'Female':
    case 'Женщина':
      return '/img/avatar-female.jpg';
    default:
      return null;
  }
};

export { getAvatarByGender };
