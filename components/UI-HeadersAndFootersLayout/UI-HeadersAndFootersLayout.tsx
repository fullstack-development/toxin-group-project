import React from 'react';

import Footer from 'components/Footer/Footer';

import * as S from './UI-HeadersAndFootersLayout.styles';

const UIHeadersAndFootersLayout: React.FC = (): JSX.Element => (
  // <S.FooterContainer>
  <Footer
    subscription={{
      title: 'Подписка',
      text: 'Получайте специальные предложения и новости сервиса',
    }}
    description="Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»"
  />
  // </S.FooterContainer>
);

export default UIHeadersAndFootersLayout;
