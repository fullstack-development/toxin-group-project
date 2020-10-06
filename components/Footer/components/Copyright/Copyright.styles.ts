import styled, { css } from 'styled-components';

import { mediaBreakpointDown } from 'shared/styles/break-points';

const Copyright = styled.p`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      margin: 0;
      color: ${colors.basicDark};
      line-height: 1.2143rem;

      @media ${mediaBreakpointDown.md} {
        margin-bottom: 1.7857rem;
      }
    `;
  }}
`;

export { Copyright };
