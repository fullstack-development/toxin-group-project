import StarRating from 'components/StarRating/StarRating';

import * as S from './Room.styles';

type RoomProps = {
  price: number;
  number: number;
  reviewCount: number;
  reviewMeasure?: string;
  measure?: string;
  currency?: string;
  rating?: number;
};

const Room: React.FC<RoomProps> = ({
  price,
  number,
  reviewCount,
  measure = 'в сутки',
  reviewMeasure = 'отзывов',
  currency = '₽',
  rating = 5,
}: RoomProps) => (
  <S.Room>
    <S.Info>
      <S.Container>
        <S.RoomNumber>
          <S.NumberSign>№</S.NumberSign>
          {number}
        </S.RoomNumber>
        <S.Price>
          {`${price}${currency}`}
          <S.Measure>{measure}</S.Measure>
        </S.Price>
      </S.Container>
      <S.RatingContainer>
        <StarRating rating={rating} />
        <S.Reviews>
          <S.ReviewCount>{reviewCount}</S.ReviewCount>
          <S.ReviewMeasure>{reviewMeasure}</S.ReviewMeasure>
        </S.Reviews>
      </S.RatingContainer>
    </S.Info>
  </S.Room>
);

export default Room;
