import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';

const Room = styled.div`
  width: 100%;
  max-width: 19.2857rem;
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  padding: 1.4286rem;
`;

const Container = styled.div`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 0.7143rem;
      border-bottom: 0.0714rem solid ${colors.basicPale};
      margin-bottom: 0.5714rem;
    `;
  }}
`;

const RoomNumber = styled.h3`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      ${titles.h2}
      display: flex;
      align-items: baseline;
      font-family: ${typography.secondaryFontName};
    `;
  }}
`;

const NumberSign = styled.span`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      ${titles.h2}
      font-family: ${typography.secondaryFontName};
      font-size: 1rem;
      margin-right: 0.3571rem;
    `;
  }}
`;

const Price = styled.span`
  ${(props) => {
    const { typography, colors } = props.theme;
    return css`
      font: 700 1rem ${typography.fontName};
      color: ${colors.basic};
    `;
  }}
`;

const Reviews = styled.span`
  ${(props) => {
    const { typography, colors } = props.theme;
    return css`
      font: 700 1rem ${typography.fontName};
      color: ${colors.basic};
    `;
  }}
`;

const Measure = styled.span`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      margin-left: 0.3571rem;
      font: 400 0.8571rem ${typography.fontName};
    `;
  }}
`;

const RatingContainer = styled(Container)`
  border-bottom: 0;
`;

const ReviewCount = styled.a`
  ${(props) => {
    const { typography, colors } = props.theme;
    return css`
      font: 700 1rem ${typography.fontName};
      color: ${colors.basic};
    `;
  }}
`;

const ReviewMeasure = styled.span`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      display: inline-block;
      margin-left: 0.3571rem;
      font: 400 0.8571rem ${typography.fontName};
      text-transform: capitalize;
    `;
  }}
`;

export {
  Room,
  Info,
  RoomNumber,
  NumberSign,
  Price,
  Reviews,
  Measure,
  Container,
  RatingContainer,
  ReviewCount,
  ReviewMeasure,
};
