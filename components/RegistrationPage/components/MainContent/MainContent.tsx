import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

import { MapState } from '../../Registration.types';
import * as S from './MainContent.styles';

const MainContent: React.FC<MapState> = ({
  isSuccess,
  isProcess,
  statusText,
  requestRegistration,
  stopRegistration,
}: MapState): JSX.Element => (
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
