import styled from 'styled-components';

import { container } from 'shared/styles/mixins';

const Container = styled.div`
  ${container};
  display: grid;
  grid-template-columns: minmax(0, 18.5714rem) 1fr minmax(0, 18.5714rem);
  grid-gap: 40px;
  border-bottom: 0.0714rem solid rgba(31, 32, 65, 0.1);
  padding: 7.1429rem 10rem;

  @media (max-width: 1200px) {
    padding: 7.1429rem 4.2857rem;
  }
`;

export { Container };
