import styled, { css } from 'styled-components';

type ListItem = {
  withSubMenu?: boolean;
};

const ListItem = styled.li<ListItem>`
  ${(props) => {
    const { withSubMenu } = props;

    return css`
      position: relative;
      list-style: none;

      &:not(:last-child) {
        margin-right: ${withSubMenu ? '1.7rem' : '0'};
      }

      @media (max-width: 900px) {
        margin: 0.5rem 0;
        width: 100%;
      }
    `;
  }}
`;

const NavContainer = styled.nav`
  width: 100%;
  margin-right: 1.4286rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
      min-width: 280px;
    }
  }
`;

export { ListItem, NavContainer };
