import StarRating from 'components/StarRating/StarRating';

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
}: RoomProps) => (
  <S.Room>
    <S.ImgContainer>
      <S.Img src="/img/room-1.jpg" alt="room" />
      <S.Dots>
        {[1, 2, 3, 4].map((el) => (
          <S.Dot key={el}>
            <S.DotButton />
          </S.Dot>
        ))}
      </S.Dots>
    </S.ImgContainer>
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

export default Room;
