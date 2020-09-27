import styled from 'styled-components';

import Button from 'components/Button/Button';

const HeaderUserLogin = styled.div`
  display: flex;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.4286rem 0;
  }
`;

const HeaderLoginButton = styled(Button)`
  &:not(:last-child) {
    margin-right: 1.4286rem;
  }

  @media (max-width: 450px) {
    margin: 0;

    &:not(:last-child) {
      margin: 0 0 1.4286rem;
    }
  }
`;

export { HeaderUserLogin, HeaderLoginButton };
