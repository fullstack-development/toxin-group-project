import styled from 'styled-components';

import { titles } from 'shared/styles/mixins';

const Container = styled.div`
  display: grid;
  gap: 0 4.2857rem;
  grid-template-columns: 19rem 1fr;
  padding: 2.1429rem 10rem;
`;

const RoomsContainer = styled.section``;

const RoomsTitle = styled.h2`
  ${titles.h1}
  margin-bottom: 1.4286rem;
`;

const PreloaderWrapper = styled.div`
  margin-top: 3.5715rem;
`;

export { Container, RoomsContainer, RoomsTitle, PreloaderWrapper };
