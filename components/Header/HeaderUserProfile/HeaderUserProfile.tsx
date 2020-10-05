import { Props } from '../Header.types';
import * as S from './HeaderUserProfile.styles';

const HeaderUserProfile: React.FC<Props> = ({ authData }: Props): JSX.Element => {
  const { displayName, pathToProfile } = authData;

  return (
    <S.HeaderUserProfile>
      <S.Link href={pathToProfile}>{displayName}</S.Link>
    </S.HeaderUserProfile>
  );
};

export default HeaderUserProfile;
