import * as S from './Comment.style';

type Comment = {
  avatarUrl: string;
  UserName: string;
  Date: string;
  Text: string;
  LikesCount: number;
}

const Comment: React.FC<Comment> = (props: Comment) => {
  const { avatarUrl, UserName, Date, Text, LikesCount } = props;

  return (
    <S.Container>
      <S.Avatar src={avatarUrl} />
      <S.User>{UserName}</S.User>
      <S.Date>{Date}</S.Date>
      <S.Text>{Text}</S.Text>
    </S.Container>
  );
}

export default Comment;
