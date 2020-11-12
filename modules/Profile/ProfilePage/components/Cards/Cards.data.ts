type CardsData = {
  title: string;
  description: string;
  href: string;
};

const cardsData: CardsData[] = [
  {
    title: 'Личная информация',
    description: 'Предоставьте личные и контактные данные',
    href: '/profile/personal-info',
  },
  {
    title: 'Вход и безопасность',
    description: 'Обновите пароль и обеспечьте безопасность аккаунта',
    href: './profile/login-and-security',
  },
  {
    title: 'Уведомления',
    description: 'Выберите настройки уведомлений и способы связи',
    href: './profile/notifications',
  },
  {
    title: 'Забронированные номера',
    description: 'Просмотрите все номера которые были забронированы вами',
    href: './profile/selected-rooms',
  },
];

export { cardsData };
