import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

import { RegistrationProps } from '../../Registration.types';
import * as S from './MainContent.styles';

const MainContent: React.FC<RegistrationProps> = ({
  isSuccess,
  isProcess,
  statusText,
  requestRegistration,
  stopRegistration,
}: RegistrationProps): JSX.Element => (
  <S.Container>
    <RegistrationForm
      isSuccess={isSuccess}
      isProcess={isProcess}
      statusText={statusText}
      requestRegistration={requestRegistration}
      stopRegistration={stopRegistration}
    />
  </S.Container>
);

export default MainContent;
