import styled from 'styled-components';

import LogoImg from '../../public/img/logo.svg';

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
`;

const Logo = styled(LogoImg)`
  margin-right: 1.4286rem;
`;

export { LogoContainer, Logo };
