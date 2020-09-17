import LikeButton from 'components/LikeButton/LikeButton';

import * as S from './Comment.style';

type Comment = {
  avatarUrl: string;
  userName: string;
  date: string;
  text: string;
  likesCount: number;
}

const Comment: React.FC<Comment> = (props: Comment) => {
  const {
    avatarUrl, userName, date, text, likesCount,
  } = props;

  return (
    <S.Container>
      <S.UserDataWrapper>
        <S.Avatar src={`/img/${avatarUrl}`} />
        <S.User>{userName}</S.User>
        <S.Date>{date}</S.Date>
      </S.UserDataWrapper>
      <S.MessageWrapper>
        <S.LeftWrapper>
          <LikeButton count={likesCount} isActive />
        </S.LeftWrapper>
        <S.Text>
          {text}
        </S.Text>
      </S.MessageWrapper>
    </S.Container>
  );
};

export default Comment;
