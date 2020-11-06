import StarRating from 'components/StarRating/StarRating';
import formatNumber from 'shared/helpers/formatNumber';

import ImageGallery from './components/ImageGallery/ImageGallery';
import * as S from './Room.styles';
import { Props } from './Room.types';

const Room: React.FC<Props> = ({
  price,
  number,
  reviews,
  imagePaths,
  roomType,
  measure = 'в сутки',
  reviewMeasure = 'отзывов',
  currency,
  rating = 5,
}: Props) => (
  <S.Room>
    <ImageGallery imagePaths={imagePaths} />
    <S.Info href={`/room-details?room=${number}`}>
      <S.Container>
        <S.RoomNumber>
          <S.NumberSign>№</S.NumberSign>
          {number}
          {roomType && <S.RoomType>{roomType}</S.RoomType>}
        </S.RoomNumber>
        <S.Price>
          {formatNumber(price, currency)}
          <S.Measure>{measure}</S.Measure>
        </S.Price>
      </S.Container>
      <S.RatingContainer>
        <StarRating rating={rating} />
        <S.Reviews>
          <S.ReviewCount>{reviews.length}</S.ReviewCount>
          <S.ReviewMeasure>{reviewMeasure}</S.ReviewMeasure>
        </S.Reviews>
      </S.RatingContainer>
    </S.Info>
  </S.Room>
);

export default Room;
