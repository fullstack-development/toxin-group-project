import styled, { css } from 'styled-components';

import { container, titles } from 'shared/styles/mixins';

const MainContent = styled.main`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      ${container};
      border: 1px solid ${colors.basicLight};
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
  padding: 5rem;
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
  max-width: 280px;

  & > h2 {
    margin: 0;
  }
`;

const BulletList = styled.section`
  & > h2 {
    margin-left: 1.4285rem;
    margin-bottom: 1.2142rem;
  }
`;

const CancellatioTerms = styled.section`
  max-width: 342px;
`;

const CancellatioTermsText = styled.p`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      line-height: ${typography.lineHeight};
    `;
  }}
`;

export {
  MainContent,
  RoomImages,
  Details,
  Wrapper,
  Title,
  Benefits,
  BulletList,
  CancellatioTerms,
  CancellatioTermsText,
};
