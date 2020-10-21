type Data = {
  title: string;
  component: string;
  value?: string;
  description?: string;
};

const data: Required<Data[]> = [
  {
    title: 'Имя по документам',
    component: 'userName',
    description:
      'Имя, указанное в загранпаспорте, водительском удостоверении или другом выездном документе.',
  },
  {
    title: 'Пол',
    value: 'Мужчина',
    component: 'gender',
  },
  {
    title: 'Дата рождения',
    component: 'birthday',
    value: '15.07.1995',
  },
  {
    title: 'Электронный адрес',
    component: 'email',
    description: 'Укажите адрес, к которому у вас есть постоянный доступ.',
  },
  {
    title: 'Подписки',
    component: 'subscription',
    value: 'Доступные виды подписок',
    description: 'Выберите какие новостные рассылки вы хотели бы получать',
  },
];

export { data };
