import styled from 'styled-components';

import { mediaBreakpointDown } from 'shared/styles/break-points';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  margin-right: 3.5714rem;

  @media ${mediaBreakpointDown.md} {
    display: none;
  }
`;

export { Nav };
