import styled, { css } from 'styled-components';

import Logo from 'components/Logo/Logo';

const HamburgerButtonWrapper = styled.div`
  & > svg {
    cursor: pointer;
    display: none;

    @media (max-width: 900px) {
      display: block;
    }
  }
`;

const Header = styled.header`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      padding: 0 6vw;
      display: flex;
      align-items: center;
      min-height: 5rem;
      box-shadow: 0 0.7143rem 1.4286rem ${colors.basicLightest};

      @media (max-width: 900px) {
        flex-direction: column;
        min-height: 100%;
      }
    `;
  }}
`;

const HeaderLogo = styled(Logo)`
  @media (max-width: 900px) {
    margin: 0.5rem 1.5rem;
  }
`;

const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
`;

const AccountPanel = styled.div``;

export { HamburgerButtonWrapper, Header, AccountPanel, HeaderLogo, HeaderLogoWrapper };
