import styled from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';
import { titles } from 'shared/styles/mixins';

const Container = styled.div`
  min-height: 50.2rem;
  padding: 3rem 8rem;

  & > section {
    margin: 0 auto;
  }

  @media (max-width: 1200px) {
    min-height: 40.2rem;
    padding: 2rem 6rem;
  }

  @media (max-width: 992px) {
    min-height: 30.2rem;
  }

  @media (max-width: 576px) {
    min-height: 20.2rem;
    padding: 0.7rem;
  }
`;

const Title = styled.h1`
  ${titles.h1}
  font-size: 1.7143rem;
  line-height: 1.25;
  margin: 2rem;
  padding: 1rem;

  @media ${breakpointDown('xs')} {
    font-size: 1.5rem;
  }
`;

const SubTitle = styled.h2`
  ${titles.h2};
  font-size: 1.7143rem;
  line-height: 1.25;
  margin: 2rem;
  padding: 1rem;

  @media ${breakpointDown('xs')} {
    font-size: 1.5rem;
  }
`;

const RoomsListContainer = styled.div`
  max-height: 40rem;
  overflow-y: scroll;
  padding: 1rem;

  &::-webkit-scrollbar {
    opacity: 0;
    width: 0.35rem;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: red;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.3rem;
    background-color: green;
  }
`;

export { Container, Title, SubTitle, RoomsListContainer };
