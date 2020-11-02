import { Review as Props } from 'api/entities/types';
import Avatar from 'components/Avatar/Avatar';
import LikeButton from 'components/LikeButton/LikeButton';

import * as S from './Review.style';
import getReviewDate from './utils/getReviewDate';

const Review = ({ avatarUrl, userName, date, text, likesCount }: Props): JSX.Element => {
  const correctDate = date instanceof Date ? date : date.toDate();

  return (
    <S.Review>
      <S.Header>
        <Avatar photoURL={`${avatarUrl}`} width="3.42857rem" height="3.42857rem" />
        <S.AuthorWrapper>
          <S.User>{userName}</S.User>
          <S.Date dateTime={correctDate.toISOString()}>{getReviewDate(correctDate)}</S.Date>
        </S.AuthorWrapper>
      </S.Header>
      <S.MessageWrapper>
        <S.LeftWrapper>
          <LikeButton count={likesCount} isActive />
        </S.LeftWrapper>
        <S.Text>{text}</S.Text>
      </S.MessageWrapper>
    </S.Review>
  );
};

export default Review;
