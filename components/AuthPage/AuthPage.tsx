import MainLayoutContainer from 'components/MainLayout/MainLayoutContainer';

import InnerPageContainer from './components/InnerPageContainer';

const AuthPage: React.FC = (props): JSX.Element => {
  return (
    <MainLayoutContainer>
      <InnerPageContainer />
    </MainLayoutContainer>
  );
};

export default AuthPage;
