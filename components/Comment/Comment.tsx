import LikeButton from 'components/LikeButton/LikeButton';

import * as S from './Comment.style';
import { Props } from './Comment.types';
import getCommentDate from './utils/getCommentDate';

const Comment: React.FC<Props> = ({ avatarUrl, userName, date, text, likesCount }: Props) => {
  const convertedDate = date.toDate();

  return (
    <S.Comment>
      <S.Header>
        <S.Avatar alt={userName} src={`/img/${avatarUrl}`} />
        <S.AuthorWrapper>
          <S.User>{userName}</S.User>
          <S.Date dateTime={convertedDate.toISOString()}>{getCommentDate(convertedDate)}</S.Date>
        </S.AuthorWrapper>
      </S.Header>
      <S.MessageWrapper>
        <S.LeftWrapper>
          <LikeButton count={likesCount} isActive />
        </S.LeftWrapper>
        <S.Text>{text}</S.Text>
      </S.MessageWrapper>
    </S.Comment>
  );
};

export default Comment;
