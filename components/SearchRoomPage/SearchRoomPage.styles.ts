import styled from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';
import { titles } from 'shared/styles/mixins';

const Container = styled.div`
  display: grid;
  gap: 0 4.2857rem;
  grid-template-columns: 19rem 1fr;
  padding: 2.1429rem 10rem;

  @media ${breakpointDown('lg')} {
    padding-left: 4.2857rem;
    padding-right: 4.2857rem;
  }

  @media ${breakpointDown('md')} {
    display: flex;
    flex-direction: column;
  }
`;

const FilterContainer = styled.div`
  @media ${breakpointDown('xl')} {
    margin: 0 auto 2.1429rem;
  }
`;

const RoomsContainer = styled.section``;

const RoomsTitle = styled.h1`
  ${titles.h1}
  margin-bottom: 1.4286rem;

  @media ${breakpointDown('md')} {
    text-align: center;
  }
`;

const PreloaderWrapper = styled.div`
  margin-top: 3.5715rem;
`;

export { Container, RoomsContainer, RoomsTitle, PreloaderWrapper, FilterContainer };
