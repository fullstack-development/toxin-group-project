import styled, { css } from 'styled-components';

import Logo from 'components/Logo/Logo';
import { mediaBreakpointUp, mediaBreakpointDown } from 'shared/styles/break-points';

type MobileMenu = {
  isShown?: boolean;
};

const MobileMenu = styled.div<MobileMenu>`
  ${(props) => {
    const { isShown } = props;

    return css`
      display: ${isShown ? 'flex' : 'none'};
      align-items: center;

      @media ${mediaBreakpointUp.lg} {
        display: flex;
        width: 100%;
      }

      @media ${mediaBreakpointDown.md} {
        flex-direction: column;
      }
    `;
  }}
`;

const HamburgerButtonWrapper = styled.button`
  display: none;
  border: none;
  background: inherit;

  & > svg {
    cursor: pointer;
  }

  @media ${mediaBreakpointDown.md} {
    display: block;
  }
`;

const Header = styled.header`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      padding-left: 10rem;
      padding-right: 10rem;
      display: flex;
      align-items: center;
      min-height: 5rem;
      box-shadow: 0 0.7143rem 1.4286rem ${colors.basicLightest};

      @media ${mediaBreakpointDown.lg} {
        padding-left: 4.2857rem;
        padding-right: 4.2857rem;
      }

      @media ${mediaBreakpointDown.md} {
        flex-direction: column;
        min-height: 100%;
      }
    `;
  }}
`;

const HeaderLogo = styled(Logo)`
  @media ${mediaBreakpointDown.md} {
    margin: 0.5rem 1.5rem;
  }
`;

const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.4286rem;

  @media ${mediaBreakpointDown.md} {
    width: 100%;
    justify-content: space-between;
  }
`;

const AccountPanel = styled.div`
  @media ${mediaBreakpointDown.md} {
    width: 100%;
    text-align: center;
  }
`;

export { MobileMenu, HamburgerButtonWrapper, Header, AccountPanel, HeaderLogo, HeaderLogoWrapper };
