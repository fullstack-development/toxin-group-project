import styled, { css } from 'styled-components';

import { container } from 'shared/styles/mixins';

const Banner = styled.div`
  ${container}
  background: url('./img/main-page-banner.jpg') bottom / cover no-repeat;
  min-height: 59.286rem;
  display: grid;
  grid-template-rows: max-content max-content;
  padding: 5rem 9.6rem 1.47rem 10rem;
  grid-row-gap: 22.8571rem;

  @media (max-width: 1200px) {
    min-height: 48rem;
    padding: 4rem 8rem 1.47rem;
  }

  @media (max-width: 992px) {
    min-height: 40rem;
    padding: 3rem 6rem 1.47rem;
    grid-row-gap: 10.7143rem;
  }

  @media (max-width: 768px) {
    min-height: 35rem;
    padding: 2rem 4rem 1rem;
    grid-row-gap: 7.1429rem;
  }

  @media (max-width: 576px) {
    min-height: 30rem;
    padding: 1rem;
    grid-row-gap: 3.5714rem;
  }
`;

const Message = styled.p`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      line-height: ${typography.lineHeight};
      text-align: right;
      max-width: 21.43rem;
      justify-self: end;
      align-self: end;
    `;
  }}
`;

export { Banner, Message };
