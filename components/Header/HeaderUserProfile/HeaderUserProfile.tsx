import * as S from './HeaderUserProfile.styles';

type Props = {
  displayName?: string;
  pathToProfile?: string;
};

const HeaderUserProfile: React.FC<Props> = ({ displayName, pathToProfile }: Props): JSX.Element => (
  <S.HeaderUserProfile>
    <S.Link href={pathToProfile}>{displayName}</S.Link>
  </S.HeaderUserProfile>
);

export default HeaderUserProfile;
