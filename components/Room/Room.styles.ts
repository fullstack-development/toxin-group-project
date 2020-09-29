import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';

const Room = styled.div`
  width: 100%;
  max-width: 19.2857rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 1.7857rem rgba(0, 0, 0, 0.1);
  border-radius: 0.2857rem;
  overflow: hidden;
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

const RoomLink = styled.a`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      text-decoration: none;
      color: ${colors.basicDarkest};

      &:hover,
      &:focus {
        color: ${colors.basicLight};
      }
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
      color: inherit;
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

const Reviews = styled.a`
  ${(props) => {
    const { typography, colors } = props.theme;
    return css`
      text-decoration: none;
      font: 700 1rem ${typography.fontName};
      color: ${colors.basic};

      &:hover,
      &:focus {
        color: ${colors.basicDark};
      }
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
  padding-bottom: 0;
  margin-bottom: 0;
`;

const ReviewCount = styled.span`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      font: 700 1rem ${typography.fontName};
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
  RoomLink,
  NumberSign,
  Price,
  Reviews,
  Measure,
  Container,
  RatingContainer,
  ReviewCount,
  ReviewMeasure,
};
