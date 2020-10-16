import AccountEntry from 'components/AccountEntry/AccountEntry';

import { Props } from '../AuthPage.types';
import * as S from './MainContent.styles';

const MainContent: React.FC<Props> = (props: Props): JSX.Element => {
  const {
    isAuthSuccess,
    isAuthProcessNow,
    authStatusText,
    startGoogleAuthProcess,
    startAuthProcess,
    stopAuthProcess,
  } = props;

  return (
    <S.Container>
      <AccountEntry
        isAuthSuccess={isAuthSuccess}
        isAuthProcessNow={isAuthProcessNow}
        authStatusText={authStatusText}
        requestToAuth={startAuthProcess}
        requestToAuthWithGoogle={startGoogleAuthProcess}
        breakAuthProcess={stopAuthProcess}
      />
    </S.Container>
  );
};

export default MainContent;
