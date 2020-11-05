import { NavMenuLink } from './NavMenu.types';

const NavLinks: NavMenuLink[] = [
  { name: 'About us', path: '/mock-about-us', isActive: true },
  {
    name: 'Services',
    path: '/mock-services',
    subMenu: [
      { name: 'sub-услуги-one', path: '/mock-sub-services-one' },
      { name: 'sub-услуги-two', path: '/mock-sub-services-two' },
      { name: 'sub-услуги-three', path: '/mock-sub-services-three' },
    ],
  },
  { name: 'Vacancies', path: '/mock-vacancies' },
  { name: 'News', path: '/mock-news' },
  {
    name: 'Agreements',
    path: '/mock-agreements',
    subMenu: [
      { name: 'sub-соглашения-one', path: '/mock-sub-agreements-one' },
      { name: 'sub-соглашения-two', path: '/mock-sub-agreements-two' },
      { name: 'sub-соглашения-three', path: '/mock-sub-agreements-three' },
    ],
  },
];

export { NavLinks };
