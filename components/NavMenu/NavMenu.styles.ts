import styled, { css } from 'styled-components';

import { mediaBreakpointDown } from 'shared/styles/break-points';

type ListItem = {
  withSubMenu?: boolean;
};

const ListItem = styled.li<ListItem>`
  ${(props) => {
    const { withSubMenu } = props;

    return css`
      position: relative;
      list-style: none;

      margin-right: ${withSubMenu ? '1.7rem' : '0'};

      @media ${mediaBreakpointDown.md} {
        margin: 0.5rem 0;
        width: 100%;
      }
    `;
  }}
`;

const NavContainer = styled.nav`
  width: 100%;

  @media ${mediaBreakpointDown.md} {
    margin-right: 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    @media ${mediaBreakpointDown.md} {
      justify-content: end;

      & > li {
        padding: 0.3rem 0;
      }
    }

    @media ${mediaBreakpointDown.md} {
      flex-direction: column;
      align-items: center;
      min-width: 20rem;
    }
  }
`;

export { ListItem, NavContainer };
