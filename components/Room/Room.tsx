import { withTranslation, WithTranslation } from 'react-i18next';

import StarRating from 'components/StarRating/StarRating';
import formatNumber from 'shared/helpers/formatNumber';

import ImageGallery from './components/ImageGallery/ImageGallery';
import * as S from './Room.styles';
import { Props } from './Room.types';

const Room: React.ComponentType<WithTranslation & Props> = ({
  price,
  number,
  reviews,
  href,
  imagePaths,
  roomType,
  measure = 'Per day',
  reviewMeasure = 'Reviews',
  currency,
  rating = 5,
  t,
}: Props) => (
  <S.Room>
    <ImageGallery imagePaths={imagePaths} />
    <S.Info>
      <S.Container>
        <S.RoomNumber>
          <S.RoomLink href={href}>
            <S.NumberSign>№</S.NumberSign>
            {number}
          </S.RoomLink>
          {roomType && <S.RoomType>{roomType}</S.RoomType>}
        </S.RoomNumber>
        <S.Price>
          {formatNumber(price, currency)}
          <S.Measure>{t(`WordForms:${measure}`)}</S.Measure>
        </S.Price>
      </S.Container>
      <S.RatingContainer>
        <StarRating rating={rating} />
        <S.Reviews>
          <S.ReviewCount>{reviews.length}</S.ReviewCount>
          <S.ReviewMeasure>{t(`WordForms:${reviewMeasure}`)}</S.ReviewMeasure>
        </S.Reviews>
      </S.RatingContainer>
    </S.Info>
  </S.Room>
);

export default withTranslation('WordForms')(Room);
