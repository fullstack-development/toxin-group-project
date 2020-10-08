import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

import * as S from './MainContent.styles';

const MainContent: React.FC = (): JSX.Element => (
  <S.Container>
    <RegistrationForm />
  </S.Container>
);

export default MainContent;
