import { useTranslation } from 'react-i18next';

import { Review as ReviewProps } from 'services/api/entities/types';
import { getNounInDeclension } from 'shared/helpers/getNounInDeclension';
import { Review } from 'shared/view/components';

import * as S from './Reviews.style';

type Props = {
  reviews: ReviewProps[];
};

const NUMBER_OF_REVIEWS = 2;

const Reviews = ({ reviews }: Props): JSX.Element => {
  const { t } = useTranslation(['WordForms', 'ReviewsPage']);
  const declensions = [t('Review'), t('ReviewsSecondary'), t('Reviews')];
  const sortedReviews = reviews.slice().sort((a, b) => b.likesCount - a.likesCount);
  const mostPopularReviews = sortedReviews.slice(0, NUMBER_OF_REVIEWS);

  return (
    <S.Reviews>
      <S.Title>{t('ReviewsPage:Guest reviews')}</S.Title>
      <S.Counter>
        {reviews.length} {getNounInDeclension(reviews.length, declensions)}
      </S.Counter>
      <S.List>
        {mostPopularReviews.map((review) => (
          <S.Item key={review.userName}>
            <Review {...review} />
          </S.Item>
        ))}
      </S.List>
    </S.Reviews>
  );
};

export { Reviews };
