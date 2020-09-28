import { HeaderProps } from '../Header.types';
import * as S from './HeaderUserProfile.styles';

const HeaderUserProfile: React.FC<HeaderProps> = ({ authData }: HeaderProps): JSX.Element => {
  const { userName, pathToProfile } = authData;

  return (
    <S.HeaderUserProfile>
      <S.Link href={pathToProfile}>{userName}</S.Link>
    </S.HeaderUserProfile>
  );
};

export default HeaderUserProfile;
