import i18next from 'shared/lang';

import { NavMenuLink } from './NavMenu.types';

const NavLinks: NavMenuLink[] = [
  { name: i18next.t('About us'), path: '/mock-about-us', isActive: true },
  {
    name: i18next.t('Services'),
    path: '/mock-services',
    subMenu: [
      { name: 'sub-услуги-one', path: '/mock-sub-services-one' },
      { name: 'sub-услуги-two', path: '/mock-sub-services-two' },
      { name: 'sub-услуги-three', path: '/mock-sub-services-three' },
    ],
  },
  { name: i18next.t('Vacancies'), path: '/mock-vacancies' },
  { name: i18next.t('News'), path: '/mock-news' },
  {
    name: i18next.t('Agreements'),
    path: '/mock-agreements',
    subMenu: [
      { name: 'sub-соглашения-one', path: '/mock-sub-agreements-one' },
      { name: 'sub-соглашения-two', path: '/mock-sub-agreements-two' },
      { name: 'sub-соглашения-three', path: '/mock-sub-agreements-three' },
    ],
  },
];

export { NavLinks };
