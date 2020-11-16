import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { cardsData } from './Cards.fuxure';
import * as S from './Cards.styles';

const Cards = memo(() => {
  const { t } = useTranslation('AccountSettings');

  return (
    <S.Cards>
      {cardsData.map(({ title, description, href }) => (
        <S.Item key={title}>
          <S.Card href={href}>
            <S.Title>{t(title)}</S.Title>
            <S.Description>{t(description)}</S.Description>
          </S.Card>
        </S.Item>
      ))}
    </S.Cards>
  );
});

export default Cards;
