import styled from 'styled-components';

import { container, visuallyHidden } from 'shared/styles/mixins';

const Container = styled.div`
  ${container}
  padding-left: 10rem;
  padding-right: 10rem;

  @media (max-width: 1200px) {
    padding-left: 4.2857rem;
    padding-right: 4.2857rem;
  }
`;

const MainContainer = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 18.5714rem) 1fr minmax(0, 18.5714rem);
  grid-gap: 2.8571rem;
  border-bottom: 0.0714rem solid rgba(31, 32, 65, 0.1);
  padding-top: 7.1429rem;
  padding-bottom: 7.1429rem;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    padding-bottom: 0;
    padding-top: 8.5714rem;
    border-bottom: 0;
  }

  @media (max-width: 500px) {
    padding-top: 3.5714rem;
  }
`;

const Title = styled.h2`
  ${visuallyHidden}
`;

const Wrapper = styled.footer``;

const BottomContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding-top: 1.8571rem;
  padding-bottom: 1.8571rem;

  @media (max-width: 900px) {
    padding-top: 0;
    flex-direction: column;
    padding-bottom: 8.5714rem;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 500px) {
    padding-bottom: 3.5714rem;
  }
`;

export { Container, MainContainer, BottomContainer, Title, Wrapper };
