import styled from 'styled-components';

import { container } from 'shared/styles/mixins';

const Container = styled.div`
  ${container};
`;

const FooterContainer = styled(Container)`
  padding: 7.1429rem 10rem;
  border-bottom: 0.0714rem solid rgba(31, 32, 65, 0.1);
`;

export { Container, FooterContainer };
