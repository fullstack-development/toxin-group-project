import { makeStyles } from '@material-ui/core/styles';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Timestamp } from 'services/api/Firebase/modules/Database/model';
import { Avatar, LikeButton } from 'shared/view/elements';

import * as S from './Review.style';
import { getReviewDate } from './utils/getReviewDate';

type Props = {
  avatarUrl: string;
  userName: string;
  date: Timestamp | Date;
  text: string;
  likesCount: number;
};

const Review = memo(({ avatarUrl, userName, date, text, likesCount }: Props) => {
  const correctDate = date instanceof Date ? date : date.toDate();

  const useStyles = makeStyles(() => ({
    avatarReviews: { width: '3.42857rem', height: '3.42857rem' },
  }));
  const classes = useStyles();
  const { i18n } = useTranslation();

  return (
    <S.Review>
      <S.Header>
        <Avatar photoURL={`${avatarUrl}`} className={classes.avatarReviews} />
        <S.AuthorWrapper>
          <S.User>{userName}</S.User>
          <S.Date dateTime={correctDate.toISOString()}>
            {getReviewDate(correctDate, i18n.language)}
          </S.Date>
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
});

export { Review };
