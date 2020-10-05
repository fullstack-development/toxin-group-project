import AccountEntry from 'components/AccountEntry/AccountEntry';

import * as S from './InnerPage.styles';

type InnerPageProps = {
  hasAuth: boolean;
  authStatusText: string;
  requestToAuth: ({ email, password }) => void;
};

const InnerPage: React.FC<InnerPageProps> = (props: InnerPageProps): JSX.Element => {
  const { hasAuth, authStatusText, requestToAuth } = props;

  return (
    <S.Container>
      <AccountEntry
        hasAuth={hasAuth}
        authStatusText={authStatusText}
        requestToAuth={requestToAuth}
      />
    </S.Container>
  );
};

export default InnerPage;
