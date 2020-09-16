import styled from 'styled-components';

import container from 'shared/styles/mixins/container';
import visuallyHidden from 'shared/styles/mixins/visually-hidden';

const ColorsTypesLayout = styled.div`
  ${container}
`;

const Logo = styled.div`
  padding-left: 1.1428rem;
  padding-top: 2.1428rem;
`;

const Content = styled.main`
  padding: 4.5rem 12.6429rem 0 9.7143rem;

  @media (max-width: 1200px) {
    padding: 2.5rem 0;
  }
`;

const Title = styled.h1`
  ${visuallyHidden}
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;

  @media (max-width: 900px) {
    grid-template-columns: auto;
    justify-content: center;
    grid-gap: 5rem;
  }
`;

export {
  ColorsTypesLayout,
  Logo,
  Content,
  Title,
  Wrapper,
};
