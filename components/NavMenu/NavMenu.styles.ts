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
      margin-right: ${withSubMenu ? '1.7rem' : '0'};
    `;
  }}
`;

const NavContainer = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
  }
`;

export { ListItem, NavContainer };
