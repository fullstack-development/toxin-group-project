import LikeButton from 'components/LikeButton/LikeButton';

import * as S from './Comment.style';

type Comment = {
  avatarUrl: string;
  userName: string;
  date: string;
  text: string;
  likesCount: number;
};

const Comment: React.FC<Comment> = ({ avatarUrl, userName, date, text, likesCount }: Comment) => (
  <div>
    <div>
      <S.Avatar alt={userName} src={`/img/${avatarUrl}`} />
      <S.User>{userName}</S.User>
      <S.Date>{date}</S.Date>
    </div>
    <S.MessageWrapper>
      <S.LeftWrapper>
        <LikeButton count={likesCount} isActive />
      </S.LeftWrapper>
      <S.Text>{text}</S.Text>
    </S.MessageWrapper>
  </div>
);

export default Comment;
