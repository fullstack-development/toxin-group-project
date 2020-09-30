import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

import * as S from './InnerPage.styles';

const InnerPage: React.FC = (): JSX.Element => (
  <S.Container>
    <RegistrationForm />
  </S.Container>
);

export default InnerPage;
