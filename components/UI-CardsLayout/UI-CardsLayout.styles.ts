import styled from 'styled-components';

import { container } from 'shared/styles/mixins';

const Container = styled.div`
  ${container};
  padding-top: 1rem;
`;

const SearchRoomFormWrapper = styled.div``;

const RegistrationFormWrapper = styled.div`
  margin-top: 3rem;
`;

const AccountEntryWrapper = styled.div`
  margin-top: 1rem;
`;

const RoomsWrapper = styled.div`
  max-width: 60rem;
`;

export {
  Container,
  SearchRoomFormWrapper,
  RegistrationFormWrapper,
  AccountEntryWrapper,
  RoomsWrapper,
};
