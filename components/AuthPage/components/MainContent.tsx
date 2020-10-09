import { connect } from 'react-redux';

import AccountEntry from 'components/AccountEntry/AccountEntry';
import { requestToAuth, breakAuthProcess } from 'redux/actions';

import * as S from './MainContent.styles';
import { Props } from './MainContent.types';

const MainContent: React.FC<Props> = (props: Props): JSX.Element => {
  const {
    isAuthSuccess,
    isAuthProcessNow,
    authStatusText,
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
        breakAuthProcess={stopAuthProcess}
      />
    </S.Container>
  );
};

const mapState = (state) => ({
  isAuthSuccess: state.isAuthSuccess,
  isAuthProcessNow: state.isAuthProcessNow,
  authStatusText: state.authStatusText,
});

const mapDispatch = { startAuthProcess: requestToAuth, stopAuthProcess: breakAuthProcess };

export default connect(mapState, mapDispatch)(MainContent);
