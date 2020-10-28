import LikeButton from 'components/LikeButton/LikeButton';

import * as S from './Review.style';
import { Props } from './Review.types';
import getReviewDate from './utils/getReviewDate';

const Review = ({ avatarUrl, userName, date, text, likesCount }: Props): JSX.Element => {
  const convertedDate = date.toDate();

  return (
    <S.Review>
      <S.Header>
        <S.Avatar alt={userName} src={`/img/${avatarUrl}`} />
        <S.AuthorWrapper>
          <S.User>{userName}</S.User>
          <S.Date dateTime={convertedDate.toISOString()}>{getReviewDate(convertedDate)}</S.Date>
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
