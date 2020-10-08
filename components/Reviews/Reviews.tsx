import Comment from 'components/Comment/Comment';
import getNounInDeclension from 'shared/helpers/getNounInDeclension';

import { reviews } from './Reviews.data';
import * as S from './Reviews.style';

const Reviews = (): JSX.Element => {
  const declensions = ['отзыв', 'отзыва', 'отзывов'];

  return (
    <S.Reviews>
      <S.Title>Отзывы посетителей номера</S.Title>
      <S.Counter>
        {reviews.length} {getNounInDeclension(reviews.length, declensions)}
      </S.Counter>
      <S.List>
        {reviews.map((review) => (
          <S.Item key={review.userName}>
            <Comment {...review} />
          </S.Item>
        ))}
      </S.List>
    </S.Reviews>
  );
};

export default Reviews;
