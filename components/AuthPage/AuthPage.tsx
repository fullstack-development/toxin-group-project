import MainLayoutContainer from 'components/MainLayout/MainLayoutContainer';

import InnerPageContainer from './components/MainContentContainer';

const AuthPage: React.FC = (): JSX.Element => {
  return (
    <MainLayoutContainer>
      <InnerPageContainer />
    </MainLayoutContainer>
  );
};

export default AuthPage;
