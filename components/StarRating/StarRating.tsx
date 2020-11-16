import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { keywords } from './StarRating.fuxure';
import { StarRatingProps } from './StarRating.model';
import * as S from './StarRating.styles';

const StarRating = memo(({ rating = 0 }: StarRatingProps) => {
  const { t } = useTranslation('StarRating');
  const ratingTextKey = Object.values(keywords)[rating];
  const title = `${t('Room rating')} - ${ratingTextKey}`;

  return (
    <S.StarRating>
      <S.Title>{title}</S.Title>
      {Object.keys(keywords).map((key, index) => {
        if (index === 0) return '';

        const isActive = index <= rating;
        const iconName = isActive ? 'star' : 'star_border';
        return <S.Star iconName={iconName} key={key} />;
      })}
    </S.StarRating>
  );
});

export default StarRating;
