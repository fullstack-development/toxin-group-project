import { keywords } from './StarRating.data.json';
import * as S from './StarRating.styles';

type StarRatingProps = {
  rating?: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating = 0 }: StarRatingProps) => {
  const ratingTextKey = Object.values(keywords)[rating];
  const title = `Оценка номера - ${ratingTextKey}`;

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
};

export default StarRating;
