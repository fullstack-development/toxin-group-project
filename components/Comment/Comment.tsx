import LikeButton from 'components/LikeButton/LikeButton';

import * as S from './Comment.style';

type Comment = {
  avatarUrl: string;
  UserName: string;
  Date: string;
  Text: string;
  LikesCount: number;
}

const Comment: React.FC<Comment> = (props: Comment) => {
  const {
    avatarUrl, UserName, Date, Text, LikesCount,
  } = props;

  return (
    <S.Container>
      <S.UserDataWrapper>
        <S.Avatar src={`/img/${avatarUrl}`} />
        <S.User>{UserName}</S.User>
        <S.Date>{Date}</S.Date>
      </S.UserDataWrapper>
      <S.MessageWrapper>
        <S.LeftWrapper>
          <LikeButton count={LikesCount} isActive />
        </S.LeftWrapper>
        <S.Text>
          {Text}
        </S.Text>
      </S.MessageWrapper>
    </S.Container>
  );
};

export default Comment;
