import styled, { css } from 'styled-components';

import Logo from 'components/Logo/Logo';

const Header = styled.div`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      padding: 0 10rem;
      display: flex;
      align-items: center;
      min-height: 5rem;
      box-shadow: 0 0.7143rem 1.4286rem ${colors.basicLightest};
    `;
  }}
`;

const HeaderLogo = styled(Logo)`
  margin-right: 20.2857rem;
`;

const AccountPanel = styled.div``;

export { Header, AccountPanel, HeaderLogo };
