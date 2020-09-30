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
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 0.5714rem;
      border-bottom: 0.0714rem solid ${colors.basicPale};
      margin-bottom: 0.4286rem;
    `;
  }}
`;

const RoomNumber = styled.h3`
  ${titles.h2}
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`;

const RoomLink = styled.a`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      text-decoration: none;
      color: ${colors.basicDarkest};
      margin-right: 0.3571rem;

      &:hover,
      &:focus {
        color: ${colors.basicLight};
      }
    `;
  }}
`;

const RoomType = styled.span`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      word-break: break-all;
      text-transform: uppercase;
      ${titles.h3({ color: colors.primary })}
      margin-right: 0.7143rem;
    `;
  }}
`;

const NumberSign = styled.span`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      ${titles.h2}
      font-family: ${typography.fontName};
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
      text-align: right;
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
  RoomType,
  NumberSign,
  Price,
  Reviews,
  Measure,
  Container,
  RatingContainer,
  ReviewCount,
  ReviewMeasure,
};
