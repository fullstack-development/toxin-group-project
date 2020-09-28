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
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const RoomNumber = styled.h3`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      ${titles.h2}
      display: flex;
      align-items: flex-end;
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

const Measure = styled.span`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      margin-left: 5px;
      font: 400 0.8571rem ${typography.fontName};
    `;
  }}
`;

export { Room, Info, RoomNumber, NumberSign, Price, Measure, Container };
