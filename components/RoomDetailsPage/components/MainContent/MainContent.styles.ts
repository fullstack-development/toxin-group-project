import styled, { css } from 'styled-components';

import { container, titles } from 'shared/styles/mixins';

const MainContent = styled.main`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      ${container};
      padding: 0 0 0.3571rem;
      border-bottom: 0.071428rem solid ${colors.basicLight};
    `;
  }}
`;

const RoomImages = styled.figure`
  display: grid;
  grid-template-columns: 61.54% 1fr;
  justify-content: center;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  & > img {
    justify-self: stretch;
    width: 100%;
    max-height: 17.3214rem;
  }

  & > img:first-child {
    grid-row: 1 / 3;
    max-height: 34.6428rem;
  }
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: 20.714rem 25rem 27.857rem;
  justify-content: center;
  grid-gap: 2.1428rem 5rem;
  padding: 5rem;

  @media (max-width: 1200px) {
    grid-template-columns: 20.714rem 25rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 576px) {
    padding: 2rem 0.5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h2`
  ${titles.h2};
  font-size: 1.357rem;
  margin-bottom: 1.4285rem;
`;

const Benefits = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 20rem;

  & > h2 {
    margin: 0;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    justify-self: center;
  }
`;

const ReviewsWrapper = styled.div`
  grid-column: 1 / 3;

  @media (max-width: 768px) {
    grid-column: 1;
  }
`;

const BulletList = styled.section`
  max-width: 20rem;

  & > h2 {
    margin-left: 1.4285rem;
    margin-bottom: 1.2142rem;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    justify-self: center;
  }
`;

const CancellationTerms = styled.section`
  max-width: 24.428rem;

  @media (max-width: 768px) {
    justify-self: center;
    text-align: center;
  }
`;

const CancellationTermsText = styled.p`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      line-height: ${typography.lineHeight};
    `;
  }}
`;

const OrderFormWrapper = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 4;

  @media (max-width: 1200px) {
    justify-self: center;
    grid-column: 1 / 3;
    grid-row: 4;
  }

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 6;
  }
`;

export {
  MainContent,
  RoomImages,
  Details,
  Wrapper,
  Title,
  Benefits,
  ReviewsWrapper,
  BulletList,
  CancellationTerms,
  CancellationTermsText,
  OrderFormWrapper,
};
