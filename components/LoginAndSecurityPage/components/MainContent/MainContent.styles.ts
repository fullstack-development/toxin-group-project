import styled from 'styled-components';

import { container, titles } from 'shared/styles/mixins';

const MainContent = styled.main`
  ${container};
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 60rem;
  padding: 5rem 5rem 15rem;
`;

const Title = styled.h1`
  ${titles.h1};
  margin-bottom: 2rem;
`;

export { MainContent, Title };
