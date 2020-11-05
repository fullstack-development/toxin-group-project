import { useTranslation } from 'react-i18next';

import Comment from 'components/Comment/Comment';
import getNounInDeclension from 'shared/helpers/getNounInDeclension';

import { reviews } from './Reviews.data';
import * as S from './Reviews.style';

const Reviews = (): JSX.Element => {
  const { t } = useTranslation('Reviews');
  const declensions = [t('Review'), t('ReviewsSecondary'), t('Reviews')];

  return (
    <S.Reviews>
      <S.Title>{t('Guest reviews')}</S.Title>
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
