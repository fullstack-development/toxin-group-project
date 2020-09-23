import React from 'react';

import NavMenu from 'components/NavMenu/NavMenu';

import * as S from './UI-HeadersAndFootersLayout.styles';

const UIHeadersAndFootersLayout: React.FC = (): JSX.Element => (
  <S.Container>
    <NavMenu
      menu={[
        { name: 'О нас', path: '/mock-about-us', isActive: true },
        {
          name: 'Услуги',
          path: '/mock-services',
          subMenu: [
            { name: 'sub-услуги', path: '/mock-sub-services' },
            { name: 'sub-услуги', path: '/mock-sub-services' },
            { name: 'sub-услуги', path: '/mock-sub-services' },
          ],
        },
        { name: 'Вакансии', path: '/mock-vacancies' },
        { name: 'Новости', path: '/mock-news' },
        {
          name: 'Соглашения',
          path: '/mock-agreements',
          subMenu: [
            { name: 'sub-соглашения', path: '/mock-sub-agreements' },
            { name: 'sub-соглашения', path: '/mock-sub-agreements' },
            { name: 'sub-соглашения', path: '/mock-sub-agreements' },
          ],
        },
      ]}
    />
  </S.Container>
);

export default UIHeadersAndFootersLayout;
