import i18next from 'shared/lang';

import { NavProps } from './FooterNav.types';

const data: Required<NavProps> = {
  items: [
    {
      title: i18next.t('Navigation'),
      items: [
        {
          href: '/mock',
          text: i18next.t('About us'),
        },
        {
          href: '/mock',
          text: i18next.t('News'),
        },
        {
          href: '/mock',
          text: i18next.t('Support'),
        },
        {
          href: '/mock',
          text: i18next.t('Services'),
        },
      ],
    },
    {
      title: i18next.t('About us'),
      items: [
        {
          href: '/mock',
          text: i18next.t('About service'),
        },
        {
          href: '/mock',
          text: i18next.t('Our team'),
        },
        {
          href: '/mock',
          text: i18next.t('Vacancies'),
        },
        {
          href: '/mock',
          text: i18next.t('Investors'),
        },
      ],
    },
    {
      title: i18next.t('Support'),
      items: [
        {
          href: '/mock',
          text: i18next.t('Agreements'),
        },
        {
          href: '/mock',
          text: i18next.t('Communities'),
        },
        {
          href: '/mock',
          text: i18next.t('Contact us'),
        },
      ],
    },
  ],
};

export default data;
