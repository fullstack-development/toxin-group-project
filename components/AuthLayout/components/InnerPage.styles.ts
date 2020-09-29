import styled from 'styled-components';

import { container } from 'shared/styles/mixins';

const Container = styled.div`
  ${container}
  background: url('./img/auth-register.jpg') bottom / cover no-repeat;
  min-height: 59.286rem;
  padding: 5rem 9.6rem 1.47rem 10rem;
`;

export { Container };
