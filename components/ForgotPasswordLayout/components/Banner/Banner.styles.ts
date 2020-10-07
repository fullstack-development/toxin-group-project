import styled from 'styled-components';

import { container } from 'shared/styles/mixins';

const Banner = styled.div`
  ${container}
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 59.286rem;
  background: url('./img/forgot-password-page-banner.jpg') bottom / cover no-repeat;

  @media (max-width: 1200px) {
    min-height: 48rem;
  }

  @media (max-width: 992px) {
    min-height: 40rem;
  }

  @media (max-width: 768px) {
    min-height: 35rem;
  }

  @media (max-width: 576px) {
    min-height: 30rem;
  }
`;

export { Banner };
