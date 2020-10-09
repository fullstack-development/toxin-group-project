import AccountEntry from 'components/AccountEntry/AccountEntry';

import * as S from './MainContent.styles';
import { Props } from './MainContent.types';

const MainContent: React.FC<Props> = (props: Props): JSX.Element => {
  const {
    isAuthSuccess,
    isAuthProcessNow,
    authStatusText,
    requestToAuth,
    breakAuthProcess,
  } = props;

  return (
    <S.Container>
      <AccountEntry
        isAuthSuccess={isAuthSuccess}
        isAuthProcessNow={isAuthProcessNow}
        authStatusText={authStatusText}
        requestToAuth={requestToAuth}
        breakAuthProcess={breakAuthProcess}
      />
    </S.Container>
  );
};

export default MainContent;
