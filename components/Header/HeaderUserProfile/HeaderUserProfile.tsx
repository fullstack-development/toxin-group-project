import * as S from './HeaderUserProfile.styles';

type Props = {
  displayName?: string;
};

const HeaderUserProfile: React.FC<Props> = ({ displayName }: Props): JSX.Element => (
  <S.HeaderUserProfile>
    <S.UserName>{displayName}</S.UserName>
  </S.HeaderUserProfile>
);

export default HeaderUserProfile;
