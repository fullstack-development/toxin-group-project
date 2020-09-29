import StarRating from 'components/StarRating/StarRating';

import ImageGallery from './components/ImageGallery/ImageGallery';
import * as S from './Room.styles';

type RoomProps = {
  price: number;
  number: number;
  reviewCount: number;
  href: string;
  reviewsHref: string;
  reviewMeasure?: string;
  measure?: string;
  currency?: string;
  rating?: number;
};

const Room: React.FC<RoomProps> = ({
  price,
  number,
  reviewCount,
  href,
  reviewsHref,
  measure = 'в сутки',
  reviewMeasure = 'отзывов',
  currency = '₽',
  rating = 5,
}: RoomProps) => {
  return (
    <S.Room>
      <ImageGallery />
      <S.Info>
        <S.Container>
          <S.RoomNumber>
            <S.RoomLink href={href}>
              <S.NumberSign>№</S.NumberSign>
              {number}
            </S.RoomLink>
          </S.RoomNumber>
          <S.Price>
            {`${price}${currency}`}
            <S.Measure>{measure}</S.Measure>
          </S.Price>
        </S.Container>
        <S.RatingContainer>
          <StarRating rating={rating} />
          <S.Reviews href={reviewsHref}>
            <S.ReviewCount>{reviewCount}</S.ReviewCount>
            <S.ReviewMeasure>{reviewMeasure}</S.ReviewMeasure>
          </S.Reviews>
        </S.RatingContainer>
      </S.Info>
    </S.Room>
  );
};

export default Room;
