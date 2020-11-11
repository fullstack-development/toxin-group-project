import { memo } from 'react';

import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { RegistrationFormProps } from 'components/RegistrationForm/RegistrationForm.types';

import * as S from './MainContent.styles';

type Props = RegistrationFormProps;

const MainContent = memo(
  ({ isSuccess, isProcess, statusText, requestRegistration, stopRegistration }: Props) => (
    <S.Container>
      <RegistrationForm
        isSuccess={isSuccess}
        isProcess={isProcess}
        statusText={statusText}
        requestRegistration={requestRegistration}
        stopRegistration={stopRegistration}
      />
    </S.Container>
  ),
);

MainContent.displayName = 'MainContent';

export default MainContent;
