import styled, { css } from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';

const HeaderUserProfile = styled.div`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      width: max-content;
      padding-left: 1.4rem;
      border-left: 0.0714rem solid ${colors.basicLightest};

      @media ${breakpointDown('md')} {
        width: 100%;
        border-left: none;
        padding: 1.4286rem 0;
        border-top: 0.0714rem solid ${colors.basicLightest};
      }
    `;
  }}
`;

const UserName = styled.span`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      color: ${colors.basic};
      margin-right: 1.5rem;
      position: relative;
      margin: 0;
      user-select: none;

      &:hover {
        color: ${colors.basicDarkest};
      }
    `;
  }}
`;

export { HeaderUserProfile, UserName };
