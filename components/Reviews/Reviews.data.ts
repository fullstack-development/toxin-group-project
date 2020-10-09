import { Props } from 'components/Comment/Comment.types';

const reviews: Required<Props[]> = [
  {
    avatarUrl: 'avatar-male.jpg',
    userName: 'Мурад Сарафанов',
    date: new Date('2020-09-27 12:03:14'),
    text:
      'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
    likesCount: 12,
  },
  {
    avatarUrl: 'avatar-female.jpg',
    userName: 'Патрисия Стёклышкова',
    date: new Date('2020-09-27 12:03:14'),
    text:
      'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент',
    likesCount: 2,
  },
];

export { reviews };
