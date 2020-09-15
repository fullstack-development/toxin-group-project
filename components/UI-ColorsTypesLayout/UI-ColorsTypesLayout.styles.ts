import styled from 'styled-components';

import visuallyHidden from 'shared/styles/mixins/visually-hidden';

const ColorsTypesLayout = styled.div`
  min-width: 320px;
  max-width: 1440px;
  padding: 0 1rem;
  margin: 0 auto;
`;

const Logo = styled.div`
  padding-left: 1.1428rem;
  padding-top: 2.1428rem;
`;

const Content = styled.main`
  padding: 4.5rem 12.6429rem 0 9.7143rem;
`;

const Title = styled.h1`
  ${visuallyHidden}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export {
  ColorsTypesLayout,
  Logo,
  Content,
  Title,
  Wrapper,
};
